import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';

let { height, width } = Dimensions.get("window");

export default class Details extends Component {
    getEstimatedTime(minutes) {
        let dt = new Date();
        dt.setMinutes( dt.getMinutes() + minutes );
        result = `${dt.getHours()} : ${dt.getMinutes()}`
        return result;
    }
    render() {
        return (
        <View style={styles.bottomContainer}>
            <View style={styles.startTripContainer}>
                <View style={styles.firstHalf}>
                    <View 
                        style={{
                            flex:10,
                            alignItems: 'center',
                            flexDirection:'row',
                            paddingLeft:23,
                            paddingRight:23,
                            marginTop: 25
                        }}
                    >
                        <View style={{
                            flex:3,
                            height:50,
                            justifyContent: "center"
                        }}>
                             <Text style={{color:"#fff", alignSelf:"flex-start", fontSize:15,}}>{this.props.distance/1.61} mi</Text>
                        </View>

                        <View style={{
                            flex:8,
                            height:50,
                            justifyContent: "center"
                        }}>
                            <Text style={{alignSelf:"center", color:"#fff", fontSize:15,}}>{this.props.duration} min</Text>
                        </View>

                        <View style={{
                            flex:3,
                            height:50,
                            justifyContent: "center"
                        }}>
                            <Text style={{color:"#fff", alignSelf:"flex-end", fontSize:15,}}>{this.getEstimatedTime(this.props.duration)}</Text>
                        </View>
                    </View>
                    <View style={{alignSelf: 'center',marginTop:25,marginBottom:5, height:3,width:width/1.3,borderRadius:2,backgroundColor:'#CCD6DD'}}/>
                </View>

                <View style={styles.secondHalf}>
                  <TouchableHighlight style={styles.startTripButton} onPress={this.props.startTrip}>
                    <Text style={styles.startTripButtonText}>START TRIP</Text>
                  </TouchableHighlight>
                </View>
            </View>
        </View>
        )
    }
}



Details.defaultProps = {
    distance: 0,
    duration: 0
};

const styles = StyleSheet.create({
    bottomContainer:{
        flex:1,
        zIndex:2,
        position: 'absolute',
        bottom: height/8,        
    },
    startTripContainer: {
        marginLeft:12,
        marginRight:12,
        zIndex:2,
    },
    firstHalf: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: "#202026",
        height:72,
        flexDirection:'column',
        zIndex:3,
    }, 
    secondHalf: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: "#202026",
        height:72,
        flexDirection:'column',
        zIndex:3,

    }, 
    startTripButton:{
        marginLeft:12,
        marginRight:12,
        borderRadius:2,
        height:56,
        width:width-42,
        zIndex:2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startTripButtonText: {
        color:'#fff', 
        fontWeight:'800',
        fontSize:15
    },
});
