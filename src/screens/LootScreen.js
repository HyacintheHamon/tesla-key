import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Dimensions } from "react-native";
import Back from '../img/svg/Back';
import I18n from "../Utils/i18n";

var { width } = Dimensions.get('window');

export default class LootScreen extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Back style={styles.backButton} />
                    </TouchableOpacity>
                    <Text style={styles.header}>{I18n.t("loot_box")}</Text>
                </View>
                <ScrollView style={styles.bodyContainer} >
                    <Text style={styles.greyText}>Free Supercharger Miles Remaining</Text>
                    <Text style={styles.milesText}>6,172</Text>
                    <Text style={styles.greyText}>Expires on 30/3/2021</Text>
                    <Text style={styles.textArea}>
                      Share what you love about your Tesla products and encourage your friends to transition to sustainable energy. 
                    </Text>
                    <Text style={styles.secondaryHeader}>Cars</Text>
                    <Text style={styles.textArea}>
                      You and anyone using your referral link can each earn 1,000 miles of free Supercharging with the purchase of a new Tesla car. 
                      Each car referral also gives you a chance to win a Model Y monthly or Roadster supercar quarterly. 
                      Owners who already have free Supercharging get two chances to win. 
                    </Text>
                    <Text style={styles.secondaryHeader}>Solar</Text>
                    <Text style={styles.textArea}>
                      You and anyone using your referral link can each earn a $250 award after system activation by purchasing 
                      or subscribing to solar panels to reduce reliance on the grid and produce clean solar energy.
                    </Text>
                    <Text style={styles.learnMore}>Learn more</Text>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111117"
  },
  headerContainer: {
    justifyContent:"center",
    marginTop:30
  },
  backButton:{
    marginLeft:30
  },
  header: {
    paddingHorizontal: 34,
    fontSize:32, 
    fontWeight: "bold", 
    color:"#FFFFFF"
  },
  bodyContainer: {
    flex:1,
    marginTop: 50
  },
  greyText:{
    fontSize: 16, 
    color:"#C5CCD6", 
    textAlign:"center"
  },
  milesText:{
    fontSize: 22, 
    margin: 10,
    color:"#FFFFFF", 
    textAlign:"center"
  },
  textArea:{
    fontSize: 18, 
    marginTop: 20,
    marginLeft: parseInt(width/15),
    marginRight: parseInt(width/15),
    color:"#FFFFFF", 
    lineHeight: 30
  },
  secondaryHeader: {
    textAlign:"left",
    fontSize:20, 
    fontWeight: "bold", 
    color:"#FFFFFF",
    marginTop: 10,
    marginLeft: parseInt(width/15),
  },
  learnMore: {
    textAlign:"left",
    fontSize:13,
    fontWeight: "bold", 
    color:"#FFFFFF",
    marginTop: 10,
    marginLeft: parseInt(width/15),
    textDecorationLine: 'underline'
  },
});

