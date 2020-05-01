import React, { Component } from "react";
import {
  Platform,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Target, Close } from "../../img/svg/";
import VectorIcon from "../VectorIcons/VectorIcon";
import I18n from "../../Utils/i18n";

const screen = Dimensions.get("window");

export default class Search extends Component {
  state = {
    searchFocused: false,
    placeContent: "",
    showClearButton: false,
  };

  render() {
    const { searchFocused, placeContent, showClearButton } = this.state;
    const { onLocationSelected } = this.props;

    return (
      <View
        style={{
          position: "absolute",
          top: Platform.select({ ios: 0, android: 0 }),
          height: placeContent.length > 0 && searchFocused ? screen.height : 90,
          backgroundColor: "#15191E",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.closeButton}>
          <TouchableOpacity onPress={this.props.onCloseMap}>
            <VectorIcon.MaterialVectorIcon
              color={"white"}
              size={30}
              name={"close"}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "absolute",
            top: Platform.select({ ios: 80, android: 80 }),
            width: "85%",
            left: 24,
          }}
        >
          <GooglePlacesAutocomplete
            ref={(instance) => {
              this.GooglePlacesRef = instance;
            }}
            renderRightButton={() => (
              <TouchableOpacity
                disabled={!showClearButton}
                onPress={() => {
                  this.GooglePlacesRef.setAddressText();
                  this.props.clearSearch();
                  this.setState({ showClearButton: false });
                }}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 42,
                  backgroundColor: "rgb(32,32,38)",
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                  paddingHorizontal: 10,
                  marginTop: 7.5,
                  marginLeft: -12,
                }}
              >
                {showClearButton && (
                  <VectorIcon.AntDesignVectorIcon name={"closecircle"} />
                )}
              </TouchableOpacity>
            )}
            placeholder={I18n.t("where_to")}
            placeholderTextColor="#777"
            onPress={onLocationSelected}
            query={{
              key: "AIzaSyBI_lZSOEBQz7a1RwFS6qWTyhoIJkvOvyA",
              language: "en",
            }}
            textInputProps={{
              clearButtonMode: "never",
              onFocus: () => {
                this.setState({ searchFocused: true, showClearButton: false });
                this.props.searchFocused();
              },
              onBlur: () => {
                this.setState({ searchFocused: false, showClearButton: true });
              },
              autoCapitalize: "none",
              autoCorrect: false,
              onChangeText: (text) => {
                this.setState({ placeContent: text });
              },
            }}
            listViewDisplayed={searchFocused}
            fetchDetails
            enablePoweredByContainer={false}
            textInputContainer
            styles={{
              container: {
                position: "absolute",
                top: Platform.select({ ios: -50, android: -50 }),
                left: "-5%",
                width: "105%",
              },
              textInput: {
                backgroundColor: "rgb(32,32,38)",
                height: 42,
                fontSize: 15,
                color: "white",
              },
              textInputContainer: {
                flex: 1,
                backgroundColor: "transparent",
                height: 54,
                marginHorizontal: 20,
                borderTopWidth: 0,
                borderBottomWidth: 0,
              },
              textView: {
                height: 54,
                margin: 0,
                borderRadius: 0,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                marginTop: 0,
                marginLeft: 0,
                marginRight: 0,
                elevation: 5,
                shadowColor: "#fff",
                shadowOpacity: 0.1,
                shadowOffset: { x: 0, y: 0 },
                shadowRadius: 15,
                borderWidth: 1,
                borderColor: "#DDD",
                fontFamily: "Montserrat-Medium",
                fontSize: 15,
                color: "#EEE",
              },
              listView: {
                borderWidth: 0,
                backgroundColor: "rgb(32,32,38)",
                marginHorizontal: -12,
                elevation: 5,
                shadowOpacity: 0.1,
                shadowOffset: { x: 0, y: 0 },
                shadowRadius: 15,
                marginTop: 0,
                color: "#FFF",
                width: screen.width,
                height: screen.height,
              },
              description: {
                fontFamily: "Montserrat-Medium",
                fontSize: 16,
                color: "white",
              },
              row: {
                padding: 20,
                height: 58,
              },
            }}
          />
        </View>
        <View style={styles.rightButton}>
          <TouchableOpacity
            onPress={() => {
              this.props.onCloseMap();
              this.props.navigation.navigate("ARScene");
            }}
          >
            <Target />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    left: 3,
    top: 43,
  },
  rightButton: {
    position: "absolute",
    right: 10,
    top: 47,
  },
});
