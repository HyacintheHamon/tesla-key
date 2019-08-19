import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT, prototype } from 'react-native-maps';
import mapStyle from '../json/mapStyle.json'
import Geolocation from '@react-native-community/geolocation';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

// Calculate map zoom
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
// const LATITUDE_DELTA = 0.001;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA =  0.0421;


// Dummy data
const exampleMarker = [{
    latlng: { latitude: 48.8983508, longitude: 2.3778904},
    title: 'My Tesla car',
    description: '427m',
  },
];

// Dummy id for example map markers
var id = 0;

export default class MapModalScreen extends React.Component {

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
      }
    }
  }

  setNavigationColor = (color) => {
    changeNavigationBarColor(color);
  };

  componentDidMount() {

    this.setNavigationColor('#111117');

    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
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
  
  render() {
    return (
      <View style={styles.mainView}>
        <MapView
        provider={ PROVIDER_GOOGLE }
				style={ styles.container }
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
        {this.state.markers.map(marker => (
        <MapView.Marker
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
          key={id++}
        />
        ))}
        </MapView>
        <TouchableOpacity style={styles.closeButton} onPress={this.props.onCloseMapModal}>
            <Icon name="times" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={styles.searchBarContainer}>
            <TextInput
              placeholder=" Search..."
              keyboardAppearance="dark"
              style={styles.searchBar}
            />
        </View>
      </View>
    );
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

AppRegistry.registerComponent('prototype', () => prototype);
module.exports = MapModalScreen
