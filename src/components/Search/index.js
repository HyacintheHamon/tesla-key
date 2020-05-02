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
import axios from "axios";

const screen = Dimensions.get("window");

export default class Search extends Component {
  state = {
    searchFocused: false,
    placeContent: "",
    showClearButton: false,
  };

  render() {
    const { searchFocused, placeContent, showClearButton } = this.state;
    const { onLocationSelected, currentPosition } = this.props;

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
                  <VectorIcon.AntDesignVectorIcon
                    size={18}
                    name={"closecircle"}
                  />
                )}
              </TouchableOpacity>
            )}
            placeholder={I18n.t("where_to")}
            placeholderTextColor="#777"
            onPress={onLocationSelected}
            query={{
              key: "AIzaSyBI_lZSOEBQz7a1RwFS6qWTyhoIJkvOvyA",
              language: "en",
              location: `${currentPosition.latitude},${currentPosition.longitude}`,
              radius: 16000,
              strictbounds: true,
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
            ListEmptyComponent={() => (
              <Text
                style={{
                  fontFamily: "Montserrat-Medium",
                  fontSize: 16,
                  color: "white",
                  alignSelf: "center",
                  paddingVertical: 20,
                }}
              >
                Not Found!
              </Text>
            )}
            listViewDisplayed={searchFocused}
            fetchDetails
            enablePoweredByContainer={false}
            textInputContainer
            renderRow={(rowData) => <SearchResult data={rowData} />}
            styles={{
              container: {
                position: "absolute",
                top: Platform.select({ ios: -50, android: -50 }),
                left: "-1%",
                width: "100%",
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
                marginHorizontal: 10,
                borderTopWidth: 0,
                borderBottomWidth: 0,
              },
              separator: {
                marginHorizontal: 20,
                marginVertical: 10,
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

class SearchResult extends Component {
  state = {
    placeDetails: null,
  };
  componentDidMount = async () => {
    const { data } = this.props;
    try {
      const {
        data: { result },
      } = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${data.place_id}&key=AIzaSyBI_lZSOEBQz7a1RwFS6qWTyhoIJkvOvyA`
      );
      this.setState({ placeDetails: result });
    } catch (error) {
      console.log(error);
    }
  };
  formatString = (string) => string.replace(/(^.{35}).*$/, "$1...");
  render() {
    const { placeDetails } = this.state;
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {placeDetails ? (
          <React.Fragment>
            <VectorIcon.SimpleLineIcon
              style={{ marginLeft: 10 }}
              size={25}
              name={"location-pin"}
            />
            <View>
              <Text
                style={{
                  fontFamily: "Montserrat-Medium",
                  fontSize: 16,
                  color: "white",
                  marginLeft: 20,
                }}
              >
                {this.formatString(placeDetails.name)}
              </Text>

              <Text
                style={{
                  fontFamily: "Montserrat-Medium",
                  fontSize: 16,
                  color: "#98989b",
                  marginLeft: 20,
                  marginTop: 5,
                }}
              >
                {this.formatString(placeDetails.formatted_address)}
              </Text>
            </View>
          </React.Fragment>
        ) : (
          <Text
            style={{
              fontFamily: "Montserrat-Medium",
              fontSize: 16,
              color: "white",
              marginLeft: 20,
            }}
          >
            Loading...
          </Text>
        )}
      </View>
    );
  }
}
