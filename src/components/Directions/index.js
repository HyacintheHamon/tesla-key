import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyBMR0UOofrP0PrX4frgdj47ecBMDhEw4TM"
        strokeWidth={3}
        strokeColor="#222"
    />
);

export default Directions;
