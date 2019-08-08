import React, { PropTypes, Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import YourCarPic from '../components/YourCarPic'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-navigation';
const { height, width } = Dimensions.get('window');
const topView = require('../img/model-s-top-view.png');
export default class ModalScreen extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
        visibleModal: null
    }
  }

  render() {
    return (
        <SafeAreaView style={{flex:1}}>
          <View style={styles.modalContent}>
          <Text style={styles.header}>SUMMON</Text>
            <TouchableOpacity style={styles.closeButton} onPress={()=> this.setState({ visibleModal: null })}>
              <Icon name="times" size={24} color="#fff" />
            </TouchableOpacity>

            <Image source={topView} style={{width: width/3, height: height/2 }}/>

            <View style={styles.bottomModal}>
              <Text style={styles.descriptionText}>Press and hold a direction button to start Summon</Text>
              <TouchableOpacity style={styles.button} onPress={()=>alert("tapped")}>
                <Text style={styles.buttonText}>FORWARD</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=>alert("tapped")}>
                <Text style={styles.buttonText}>REVERSE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        backgroundColor: '#111117',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        position: 'absolute',
        top: 20,
        color: "#fff",
        textTransform: 'uppercase',
        fontSize: 15
    },
    descriptionText: {
        color: "#fff",
        fontSize: 12,
        textAlign: "center",
        lineHeight: 15,
        width: 200,
        marginBottom: 40
    },
    buttonText: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 15
    },
    button: {
        backgroundColor: 'transparent',
        padding: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#A9A9A9',
        width: width/2.5,
        maxWidth: width/2.5
    },
    closeButton: {
        position: 'absolute',
        right: 20,
        top: 15,
    },
    bottomModal: {
        width: '100%', 
        backgroundColor: 'transparent', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    }
})
