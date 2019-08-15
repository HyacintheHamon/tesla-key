import React, { Component, Fragment } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT, prototype, Marker } from 'react-native-maps';

import { getPixelSize } from '../../../utils';

import Geocoder from 'react-native-geocoding';

import SearchInput from '../Search';
import Directions from '../Directions';
import Details from '../Details';
import {setNavigationRequest} from '../../actions/api';

import { Back, LocationBox, LocationText, LocationTimeBox, LocationTimeText, LocationTimeTextSmall } from './styles';

Geocoder.init('AIzaSyBI_lZSOEBQz7a1RwFS6qWTyhoIJkvOvyA');

import markerImage from '../../img/marker.png';
import backImagem from '../../img/back.png';
import mapStyle from '../../json/mapStyle.json'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Geolocation from '@react-native-community/geolocation'

import teslaCarIcon from '../../img/carIcon.png'

import HeaderComponent from '../HeaderComponent'

// Calculate map zoom
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
// const LATITUDE_DELTA = 0.001;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA =  0.0421;
const GOOGLE_MAPS_APIKEY = 'AIzaSyBMR0UOofrP0PrX4frgdj47ecBMDhEw4TM';


// Dummy data
const exampleMarker = [{
    latlng: { latitude: 48.8983508, longitude: 2.3778904},
    title: 'My Tesla car',
    description: '427m',
  },
];

// Dummy id for example map markers
var id = 0;

export default class Map extends Component {

    constructor(){
        super();
        this.state = {
          markers: exampleMarker,
          region: {
            latitude: 48.8983508,
            longitude: 2.3778904,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
          currentPosition: {
            latitude: 0.0,
            longitude: 0.0,
          },
          searchFocused: false
        }
        this.mapView = null;
      }

    /* 
    async componentDidMount() {
        Geolocation.getCurrentPosition(
            async ({ coords: { latitude, longitude } }) => {
                const response = await Geocoder.from({ latitude, longitude });
                const address = response.results[0].formatted_address;
                const location = address.substring(0, address.indexOf(','));

                this.setState({
                    location,
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134
                    }
                });
            },   //sucess
            () => { },   //error
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000,
            }
        );
    }
    */
    
     
    componentDidMount() {
        Geolocation.getCurrentPosition(
          (position) => {
            const carMarker = [{
                latlng: { latitude: position.coords.latitude+0.004, longitude: position.coords.longitude+0.004},
                title: 'My Tesla car',
                description: '427m',
              },
            ];
            this.setState({
                markers: carMarker,
                currentPosition: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }
            });
          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
      }
    
    handleLocationSelected = (data, { geometry }) => {
        const { location: { lat: latitude, lng: longitude } } = geometry;

        this.setState({
            searchFocused: false,
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text
            },
        })

    }

    handleBack = () => {
        this.setState({destination: null});
    };

    startTrip() {
        
    }

    render() {

        const { region, destination, duration, location, currentPosition, distance, searchFocused } = this.state;
        return (
            
            <View style={{ flex: 1 }}>
                <MapView
                provider={ PROVIDER_GOOGLE }
                style={ styles.container }
                ref={c => this.mapView = c}
				customMapStyle= {mapStyle}
                region={{ latitude: this.state.currentPosition.latitude,
                    longitude: this.state.currentPosition.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}
                mapType="standard"
                showsUserLocation={true}
                userLocationAnnotationTitle="My position"
                followsUserLocation={true}
                showsMyLocationButton={true}
                showsPointsOfInterest={true}
                showsCompass={true}
                showsIndoors={true}
                zoomEnabled={true}
                zoomControlEnabled={true}
                loadingEnabled={true}
                scrollEnabled={true}
                >
                    {destination && (
                        <Fragment>
                            <Directions
                                origin={currentPosition}
                                destination={destination}
                                onReady={result => {
                                    this.setState({
                                         duration: Math.floor(result.duration),
                                         distance: Math.floor(result.distance)
                                        });
                                    let des = [];
                                    des.push(destination);
                                    this.mapView.fitToCoordinates(des, {
                                        edgePadding: {
                                            right: getPixelSize(50),
                                            left: getPixelSize(50),
                                            top: getPixelSize(50),
                                            bottom: getPixelSize(350)
                                        }
                                    });
                                }}
                            />
                            <Marker coordinate={destination}
                                anchor={{ x: 0, y: 0 }}
                                image={markerImage}
                            >

                                <LocationBox>
                                    <LocationText>{destination.title}</LocationText>
                                </LocationBox>

                            </Marker>

                            <Marker coordinate={region} anchor={{ x: 0, y: 0 }}>
                            <LocationBox>
                                <LocationTimeBox>
                                    <LocationTimeText>{duration}</LocationTimeText>
                                    <LocationTimeTextSmall>Min</LocationTimeTextSmall>                                
                                </LocationTimeBox>
                                    <LocationText>{location}</LocationText>
                                </LocationBox>

                            </Marker>
                        </Fragment>
                    )}
                    {this.state.markers.map(marker => (
                    <MapView.Marker
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}
                    key={id++}
                    image={teslaCarIcon}
                    />
                    ))}
                </MapView>
                {destination&&!searchFocused&&<Fragment><Back onPress={this.handleBack}><Image source={backImagem}/></Back><Details distance={distance} duration={duration} startTrip={()=>this.startTrip()}/></Fragment>}
                <SearchInput searchFocused={()=>this.setState({searchFocused: true})} onLocationSelected={this.handleLocationSelected} onCloseMap={this.props.onCloseMapModal}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    closeButton: {
      position: 'absolute',
      left: 20,
      top: 100,
    },
    icon: {
      width: 26,
      height: 26,
    },
    ar: {
      flex: 1,
    },
    mainView: {
      position: 'absolute',
      height: '100%',
      width: '100%',
    },
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    searchBar: {
      elevation: 1,
      width: '99%',
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    searchBarContainer: {
      elevation: 1,
      backgroundColor: 'white',
      width: '90%',
      height: '6%',
      marginLeft: '5%',
      top: 40,
      borderRadius: 3,
      shadowOpacity: 0.75,
      shadowRadius: 1,
      shadowColor: 'gray',
      shadowOffset: { height: 0, width: 0},
    }
});