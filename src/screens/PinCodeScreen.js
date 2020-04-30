import React, { Component } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Pincode from "../components/PinCode";
import I18n from "../Utils/i18n";

export default class PinCodeScreen extends Component {
  onDetectPin = (pin) => {
    console.log("pinCode>>>", pin);
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#111117" }}>
        <View style={styles.container}>
          <Pincode
            {...this.props}
            descriptionText={I18n.t("create_pin")}
            spaceColor={"#FFFFFF"}
            closeButtonColor={"#FFFFFF"}
            onEnteredPincode={(pin) => this.onDetectPin(pin)}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
