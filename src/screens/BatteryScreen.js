import React, { Component, useRef, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Animated,
    Dimensions
} from 'react-native';
import Back from "../img/svg/Back";
import I18n from "../Utils/i18n";
import LinearGradient from 'react-native-linear-gradient';
import Shimmer from 'react-native-shimmer';

const { height, width } = Dimensions.get('window');

export default class BatteryScreen extends Component {

    state = {
        progress: 80,
        portOpen: false,
    };

    anim = new Animated.Value(0);

    componentDidMount() {
        this.onAnimate();
    }

    onAnimate = () => {
        this.anim.addListener(({ value }) => {
            this.setState({ progress: parseInt(value, 10) });
        });
        // Animated.timing(this.anim, {
        //     toValue: 100,
        //     duration: 100000,
        //     useNativeDriver: true
        // }).start();
    };

    onPressPortBtn = () => {
        this.setState({
            portOpen: !this.state.portOpen,
        })
    }

    render() {

        const buttonText = this.state.portOpen ? I18n.t("close_charge_port") : I18n.t("open_charge_port");

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
                            {I18n.t("battery")}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.bodyContainer}>
                        <View style={styles.milesView}>
                            <Text style={styles.milesViewTitle}>254</Text>
                            <Text style={styles.milesViewSubtitle}>mi</Text>
                        </View>
                        <View style={styles.batteryContainer}>
                            <View style={styles.batteryTip} />
                            <View style={styles.inner}>
                                <Shimmer duration={4000} opacity={0.7}>
                                    <View style={{ width: '100%' }}>
                                        <LinearGradient
                                            colors={['#397C5D', '#37DD5D']}
                                            start={{ x: 0.0, y: 0.5 }}
                                            end={{ x: 1.0, y: 0.5 }}
                                            locations={[0.0, 1.0]}
                                            style={[
                                                styles.batteryLinearGradient,
                                                { width: this.state.progress + '%' },
                                            ]}
                                        />
                                    </View>
                                </Shimmer>
                            </View>
                            <Text style={styles.label}>{this.state.progress}%</Text>
                        </View>
                        <Text style={{ color: '#FFF', marginTop: 10, marginBottom: 10 }}>
                            {I18n.t("charging")}
                        </Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={this.onPressPortBtn}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>{buttonText}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111117',
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
        marginTop: 50,
        alignItems: 'center',
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        height: 40,
    },
    milesView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    milesViewTitle: {
        fontFamily: "OpenSans-Light",
        fontWeight: "300",
        fontSize: 70,
        color: "#fff",
    },
    milesViewSubtitle: {
        fontFamily: "Montserrat",
        fontSize: 20,
        color: "#98989b",
        marginLeft: 5,
        marginTop: 40,
    },
    batteryContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 8,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    batteryTip: {
        position: 'absolute',
        borderWidth: 1,
        borderRightColor: '#fff',
        borderTopColor: '#fff',
        borderBottomColor: '#fff',
        height: 40,
        zIndex: 1,
        right: -8,
        width: 8,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderLeftColor: '#000',
    },
    inner: {
        backgroundColor: 'grey',
        borderColor: '#fff',
        borderWidth: 0.7,
        width: 200,
        borderRadius: 3,
    },
    batteryLinearGradient: {
        height: 50,
    },
    label: {
        fontSize: 23,
        color: '#fff',
        position: 'absolute',
    },
    buttonContainer: {
        marginTop: 50,
        alignSelf: 'center',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        paddingHorizontal: 20,
        width: width / 1.6,
        height: 50,
        justifyContent: 'center',
    },
    buttonText: {
        color: "#FFFFFF",
        fontFamily: "Avenir",
        fontSize: 16,
        marginHorizontal: 20,
        textAlign: "center",
        textTransform: 'uppercase',
    }
});
