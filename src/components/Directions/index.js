import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyBI_lZSOEBQz7a1RwFS6qWTyhoIJkvOvyA"
    strokeWidth={3}
    strokeColor="#fff"
    onError={(errorMessage) => {
      console.log(errorMessage);
    }}
  />
);

export default Directions;
