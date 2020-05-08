import React, { Component, useRef, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    Dimensions,
    Animated,
    ScrollView,
} from 'react-native';

import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';
import Shimmer from 'react-native-shimmer';

var { windowWidth } = Dimensions.get('window');

var shimmerBg = require('../img/transparent.png');

export default class BatteryScreen extends Component {

    state = { progress: 0.5, progressStatus: 50 };
    anim = new Animated.Value(0);

    componentDidMount() {
        this.onAnimate();
    }

    onAnimate = () => {
        this.anim.addListener(({ value }) => {
            this.setState({ progressStatus: parseInt(value, 10) });
        });
        Animated.timing(this.anim, {
            toValue: 100,
            duration: 50000,
            useNativeDriver: true
        }).start();
    };

    render() {
        const { progress } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Battery</Text>
                </View>
                <ScrollView>
                    <View style={styles.bodyContainer}>
                        <Text style={{ color: '#FFF', marginTop: 10, marginBottom: 10 }}>
                            New Test - Animated View with Shimmer
                        </Text>
                        <View style={styles.batteryContainer}>
                            <View style={styles.batteryTip} />
                            <View style={styles.inner}>
                                <Shimmer direction={'right'} opacity={0.9}>
                                    <LinearGradient
                                        colors={['#397C5D', '#37DD5D']}
                                        start={{ x: 0.0, y: 0.5 }}
                                        end={{ x: 1.0, y: 0.5 }}
                                        locations={[0.0, 1.0]}
                                        style={[
                                            styles.batteryLinearGradient,
                                            { width: this.state.progressStatus + '%' },
                                        ]}
                                    />
                                </Shimmer>
                            </View>
                            <Text style={styles.label}>{this.state.progressStatus}%</Text>
                        </View>

                        {/* Regular progress bar */}
                        <Text style={{ color: '#FFF', marginTop: 10, marginBottom: 10 }}>
                            Test 0
                        </Text>
                        <Shimmer direction={'right'}>
                            <Progress.Bar
                                animated={true}
                                progress={progress}
                                color={'green'}
                                unfilledColor={'grey'}
                                borderWidth={1}
                                borderColor={'#fff'}
                                width={200}
                                height={50}
                                //borderRadius={3}
                                useNativeDriver={true}
                                // animationConfig
                                animationType={'timing'}
                            />
                        </Shimmer>
                        <View style={styles.buttonView}>
                            <Text
                                onPress={() =>
                                    this.setState({ progress: progress <= 0 ? 0 : progress - 0.1 })
                                }
                                style={styles.buttonText}>
                                Minus
                            </Text>
                            <Text
                                onPress={() =>
                                    this.setState({ progress: progress >= 1 ? 1 : progress + 0.1 })
                                }
                                style={styles.buttonText}>
                                Plus
                            </Text>
                        </View>

                        <Text style={{ color: '#FFF', marginTop: 10, marginBottom: 10 }}>
                            Test 1 - Progress bar
                        </Text>
                        <Progress.Bar
                            animated={true}
                            progress={0.7}
                            color={'green'}
                            unfilledColor={'grey'}
                            borderWidth={0}
                            borderColor={'#111117'}
                            width={200}
                            height={50}
                            //borderRadius={3}
                            useNativeDriver={true}
                            // animationConfig
                            animationType={'timing'}
                        />
                        {/* Shimmer on Text */}
                        <Text style={{ color: '#FFF', marginTop: 10, marginBottom: 10 }}>
                            Test 2 - Shimmer effect
                        </Text>
                        <Shimmer
                            direction={'right'}
                            autoRun={true}
                            style={{ width: 180, height: 40 }}>
                            <Text style={{ fontSize: 30, color: '#FFF' }}>
                                .........................
                            </Text>
                        </Shimmer>

                        <Text style={{ color: '#FFF', marginTop: 10, marginBottom: 10 }}>
                            Test 3 - Shimmer effect + progress bar
                        </Text>
                        {/* Shimmer on View with Text. Shimmer isn't working */}
                        <Shimmer
                            direction={'right'}
                            autoRun={true}
                            style={{ width: 180, height: 40 }}>
                            <View style={{ backgroundColor: 'green', width: 180, height: 40 }}>
                                <Text style={{ fontSize: 30, color: '#FFF' }}>
                                    .........................
                                </Text>
                            </View>
                        </Shimmer>

                        <Text style={{ color: '#FFF', marginTop: 10, marginBottom: 10 }}>
                            Test 4 - Shimmer on view
                        </Text>
                        {/* Shimmer on View without Text. Shimmer isn't working */}
                        <Shimmer
                            direction={'right'}
                            autoRun={true}
                            style={{ width: 180, height: 40 }}>
                            <View
                                style={{ backgroundColor: 'green', width: 180, height: 40 }}
                            />
                        </Shimmer>

                        <Text style={{ color: '#FFF', marginTop: 10, marginBottom: 10 }}>
                            Test 5 - Shimmer + Linear gradient
                        </Text>
                        {/* Shimmer + Linear Gradient. Shimmer isn't working */}
                        <Shimmer direction={'right'}>
                            <LinearGradient
                                colors={['#397C5D', '#37DD5D']}
                                start={{ x: 0.0, y: 0.5 }}
                                end={{ x: 1.0, y: 0.5 }}
                                locations={[0.0, 1.0]}
                                style={styles.linearGradient}>
                                <View style={styles.gradientView} />
                            </LinearGradient>
                        </Shimmer>

                        <Text style={{ color: '#FFF', marginTop: 10, marginBottom: 10 }}>
                            Test 6 - Linear gradient + Shimmer
                        </Text>
                        {/* Shimmer + Linear Gradient. Shimmer isn't working */}
                        <LinearGradient
                            colors={['#397C5D', '#37DD5D']}
                            start={{ x: 0.0, y: 0.5 }}
                            end={{ x: 1.0, y: 0.5 }}
                            locations={[0.0, 1.0]}
                            style={styles.linearGradient}>
                            <Shimmer direction={'right'}>
                                <View style={{ width: 170, height: 50 }} />
                            </Shimmer>
                        </LinearGradient>

                        <Text style={{ color: '#FFF', marginTop: 10, marginBottom: 10 }}>
                            Test 7 - Shimmer + Image
                        </Text>
                        <Shimmer autoRun={true} direction={'right'}>
                            <Image source={shimmerBg} />
                        </Shimmer>
                    </View>
                </ScrollView>
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
        justifyContent: 'center',
        paddingVertical: 10,
    },
    header: {
        paddingHorizontal: 34,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    bodyContainer: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        height: 40,
    },
    buttonView: {
        flexDirection: 'row',
    },
    buttonText: {
        padding: 10,
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    gradientView: {
        width: 170,
        height: 50,
    },
    progressBar: {
        flexDirection: 'row',
        height: 20,
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
    },

    //battery
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
});
