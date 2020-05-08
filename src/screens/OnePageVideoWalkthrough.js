import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native";
import Video from "react-native-video";
import I18n from "../Utils/i18n";
import WhiteLogo from "../img/svg/WhiteLogo";
const { height } = Dimensions.get("window");

export default class OnePageVideoWalkthrough extends Component {

    render() {
        return (
            <View style={styles.slide}>
                <Video source={require("../videos/background.mp4")} style={styles.backgroundVideo} muted={true} repeat={true} resizeMode={"cover"} rate={1.0} ignoreSilentSwitch={"obey"} />
                <View style={styles.titleContainer}>
                    <WhiteLogo width="60" height="60" style={styles.logo} />
                    <Text style={styles.title}>{I18n.t("walkthrough_title")}</Text>
                    <Text style={styles.subtitle}>{I18n.t("walkthrough_subtitle")}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
                        <View style={styles.button}>
                            <Text style={styles.text}>{I18n.t("get_started")}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1, // Take up all screen
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
        backgroundColor: "#111117"
    },
    logo: {
        marginBottom: 20
    },
    titleContainer: {
        alignSelf: 'center',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: height / 2.7
    },
    title: {
        color: "#FFFFFF",
        fontFamily: "Avenir",
        fontSize: 30,
        fontWeight: "500",
        marginBottom: 10,
        textAlign: "center"
    },
    subtitle: {
        color: "#FFFFFF",
        fontFamily: "Avenir",
        fontSize: 20,
        fontWeight: "300",
        textAlign: "center"
    },
    buttonContainer: {
        alignSelf: 'center',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 50
    },
    button: {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#FFFFFF",
        paddingHorizontal: 50,
        paddingVertical: 10
    },
    text: {
        color: "#FFFFFF",
        fontFamily: "Avenir",
        fontSize: 18,
        marginHorizontal: 40,
        textAlign: "center"
    },
    backgroundVideo: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 150,
        right: 0
    },
});
