import React from "react";
import {StyleSheet, View, TouchableOpacity, PermissionsAndroid, Platform, Dimensions} from 'react-native';
import MapView , { PROVIDER_GOOGLE } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import mapStyle from '../json/mapStyle.json'
import { SuperchargerMarker } from '../img/svg';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA =  0.0421;

export default class SuperchargersMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
      dataSource: [{
        "response":{
          "congestion_sync_time_utc_secs":1545091987,
          "destination_charging":[
            {
              "location":{
                "lat":33.811484,
                "long":-118.138451
              },
              "name":"Long Beach Marriott",
              "type":"destination",
              "distance_miles":2.201606
            },
            {
              "location":{
                "lat":33.767198,
                "long":-118.191987
              },
              "name":"Renaissance Long Beach Hotel",
              "type":"destination",
              "distance_miles":4.071068
            },
            {
              "location":{
                "lat":33.757146,
                "long":-118.19861
              },
              "name":"Hotel Maya, a Doubletree by Hilton",
              "type":"destination",
              "distance_miles":4.843953
            },
            {
              "location":{
                "lat":33.832254,
                "long":-118.079218
              },
              "name":"The Gardens Casino",
              "type":"destination",
              "distance_miles":6.449794
            }
          ],
          "superchargers":[
            {
              "location":{
                "lat":33.934471,
                "long":-118.121217
              },
              "name":"Downey, CA - Stonewood Street",
              "type":"supercharger",
              "distance_miles":2.196721,
              "available_stalls":5,
              "total_stalls":12,
              "site_closed":false
            },
            {
              "location":{
                "lat":33.953385,
                "long":-118.112905
              },
              "name":"Downey, CA - Lakewood Boulevard",
              "type":"supercharger",
              "distance_miles":9.587273,
              "available_stalls":6,
              "total_stalls":12,
              "site_closed":false
            },
            {
              "location":{
                "lat":33.921063,
                "long":-118.330074
              },
              "name":"Hawthorne, CA",
              "type":"supercharger",
              "distance_miles":12.197322,
              "available_stalls":3,
              "total_stalls":6,
              "site_closed":false
            },
            {
              "location":{
                "lat":33.894227,
                "long":-118.367407
              },
              "name":"Redondo Beach, CA",
              "type":"supercharger",
              "distance_miles":13.125912,
              "available_stalls":3,
              "total_stalls":8,
              "site_closed":false
            }
          ],
          "timestamp":1545092157769
        }
      }]
     };
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
  /*
  fetch('https://owner-api.teslamotors.com/api/1/vehicles/'+id+'/nearby_charging_sites', { 
    method: 'get', 
    headers: new Headers({
        'Authorization': 'Bearer ' + token, 
        'Content-Type': 'application/json'
    })
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
        loading: false,
        dataSource: responseJson
      })
    })
    .catch(error=>console.log(error)) 

    console.log('latitude', StoreGlobal.currentLatitude);
    console.log('longitude', StoreGlobal.currentLongitude);
  */
  console.log('data source : ',  this.state.dataSource);
  console.log('data source superchargers : ',  this.state.dataSource[0].response.superchargers[0].location.lat);
 }


  componentWillUnmount = () => {
    this.index = 0;
    this.animation = new Animated.Value(0);
    Geolocation.clearWatch(this.watchID);
  }
   

render(){
return(
  <View style={styles.container}>
    <MapView
      provider={ PROVIDER_GOOGLE }
      customMapStyle= {mapStyle}
      ref={map => this.map = map}
      region={{ latitude: this.state.currentPosition.latitude,
        longitude: this.state.currentPosition.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
      style={styles.container}
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
    {this.state.dataSource[0].response.superchargers.map((marker, index) => {

      console.log('item lattitude', marker.location.lat);
      console.log('item longitude', marker.location.long);

      return (
        <MapView.Marker key={index} coordinate={{
          latitude:  marker.location.lat,
          longitude: marker.location.long,
        }}
        title={marker.name}
        description={"Distance: " + marker.distance_miles + " mi"}
        >
          <SuperchargerMarker width="24" height="24"/>
          {/* <Text style={styles.batteryText}>{marker.battery}%</Text> */}
        </MapView.Marker>
      );
    })}
  </MapView>
  <TouchableOpacity style={styles.closeButton} onPress={this.props.navigation.goBack()}>
      <Icon name="arrow-left" size={30} color="#fff" />
  </TouchableOpacity>
</View>
)}
}
const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    left: 30,
    top: 50,
  },
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  mainView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  scooterImg: {
    width: 30,
    height: 37,
  },
  batteryText: {
    fontSize: 10
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});
