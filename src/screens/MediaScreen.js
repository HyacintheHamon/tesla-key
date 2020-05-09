import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Back from '../img/svg/Back';
import I18n from "../Utils/i18n";

export default class MediaScreen extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Back />
                    </TouchableOpacity>
                    <View style={styles.header}>
                        <Text
                            style={{ fontSize: 32, fontWeight: "bold", color: "#FFFFFF" }}
                        >
                            {I18n.t("media")}
                        </Text>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.controlsContainer}>
                        <TouchableOpacity>
                            <FontAwesome5 name="backward" size={32} color="#93A8B3"></FontAwesome5>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.playButtonContainer}>
                            <FontAwesome5
                                name="play"
                                size={32}
                                color="#93A8B3"
                                style={[styles.playButton, { marginLeft: 8 }]}
                            ></FontAwesome5>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome5 name="forward" size={32} color="#93A8B3"></FontAwesome5>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.volumeControlsContainer}>
                        <TouchableOpacity>
                            <FontAwesome5 name="minus" size={20} color="#93A8B3"></FontAwesome5>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.volumeContainer}>
                            <FontAwesome5
                                name="volume-up"
                                size={20}
                                color="#93A8B3"
                                style={[styles.playButton, { marginLeft: 8 }]}
                            ></FontAwesome5>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome5 name="plus" size={20} color="#93A8B3"></FontAwesome5>
                        </TouchableOpacity>
                    </View>
                </View>
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
        flexDirection: "row",
        paddingVertical: 10,
    },
    backButton: {
        marginLeft: 30,
        marginTop: 10
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 20
    },
    bodyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    controlsContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16
    },
    playButtonContainer: {
        backgroundColor: "#202026",
        width: 128,
        height: 128,
        borderRadius: 64,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 32
        // Other style style 
        // backgroundColor: "#FFF",
        // borderColor: "rgba(93, 63, 106, 0.2)",
        // borderWidth: 16,
        // shadowColor: "#5D3F6A",
        // shadowRadius: 30,
        // shadowOpacity: 0.5
    },
    volumeControlsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 35
    },
    volumeContainer: {
        width: 128,
        borderRadius: 64,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 32,
    }
});
