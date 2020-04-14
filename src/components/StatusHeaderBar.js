import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Platform,
} from 'react-native';

export default class StatusBarHeader extends Component {

    render() {
        var _backgroundColor    = this.props.backgroundColor    ? this.props.backgroundColor    : '#111117';
        var _barStyle           = this.props.barStyle           ? this.props.barStyle           : 'light-content';

        return (<View style={{flexDirection:'row', alignItems:'flex-end', height:Platform.OS=='ios'?80:80, backgroundColor:_backgroundColor}}>
            <StatusBar  backgroundColor={_backgroundColor} barStyle={_barStyle} />
             <View style={{ height:50, flexDirection:'row', flex:1, justifyContent:'space-between', alignItems:'center', paddingLeft:8, paddingRight:8,}}>
                 {this.props.children}
            </View>
        </View>);
    }
}
