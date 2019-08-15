import React from 'react'
import { Text, TouchableOpacity, StatusBar, TextInput, KeyboardAvoidingView, View, StyleSheet, Linking, Dimensions } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestSignIn } from "../actions";

const { height, width } = Dimensions.get('window');

class LoginScreen extends React.Component {

  state = {
    email: '',
    password: '',
  };

  componentWillReceiveProps(nextProps) {
    this.props.navigation.replace('DrawerStack');
		const { userData } = nextProps.auth;
		if (userData!==this.props.auth.userData) {
      this.props.navigation.replace('DrawerStack');
		}
  }

  render() {

    return (
      <View style={styles.container}>

        <KeyboardAvoidingView behavior="padding" style={styles.KeyboardAvoidingView}>
          <StatusBar barStyle="light-content" />
          <View style={styles.loginContainer}>
            <SvgUri style={styles.logo} width="100" height="50" source={require('../img/logo_grey.svg')} />
            <Text style={styles.description}>
              Please enter the username and password you use to login to the Tesla site
            </Text>
          </View>
          <View style={styles.formContainer}>
            
            <View style={styles.inputContainer}>
              <SvgUri style={styles.inputIcon} width="20" height="20" source={require('../img/user.svg')} />
              <TextInput style = {styles.input} 
                value={this.state.email}
                onChangeText={email => this.setState({email})}
                ref={ref => {this._emailInput = ref}}
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                autoCapitalize="none"
                keyboardType='email-address' 
                returnKeyType="next" 
                placeholder='Email' 
                onSubmitEditing={this.handleSubmit}
                blurOnSubmit={true}
                placeholderTextColor='rgba(225,225,225,0.7)'/>
            </View>

            <View style={styles.inputContainer}>
              <SvgUri style={styles.inputIcon} width="20" height="20" source={require('../img/lock.svg')} />
              <TextInput style = {styles.input}   
                ref={ref => {this._passwordInput = ref}}
                value={this.state.password}
                onChangeText={password => this.setState({password})}
                keyboardType="ascii-capable"
                returnKeyType="go" 
                autoCorrect={false}
                autoCapitalize="none"
                ref={(input)=> this.passwordInput = input} 
                placeholder='Password' 
                placeholderTextColor='rgba(225,225,225,0.7)' 
                onSubmitEditing={this.handleSubmit}
                blurOnSubmit={true}
                secureTextEntry/>
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={this.signIn}>
            {/* onPress={this.handleSubmit} */}
              <Text  style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity> 

        </View>
      </KeyboardAvoidingView>
      <View style={styles.legalView}>
        <Text style={styles.legal} onPress={ ()=>{ Linking.openURL('https://www.tesla.com/user/password?email=&redirect=no')}}>
          Reset your password
        </Text>
        <Text style={styles.legal} onPress={ ()=>{ Linking.openURL('https://www.tesla.com/about/legal#privacy-statement?redirect=no')}}>
          Privacy Policy
        </Text>  
      </View>
  
    </View>
    )
  }

  signIn = () => {
    let authData = {email: this.state.email, password: this.state.password};
    this.props.requestSignIn(authData);
  }

  handleSubmit = () => {
    async function getBearerToken(email, password, fn) {
      try {
        let response = await fetch('https://owner-api.teslamotors.com/oauth/token', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            grant_type: 'password',
            client_id: '81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384',
            client_secret: 'c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3',
            email: email,
            password: password
          }),
        });
        let responseJson = await response.json();      
        if (responseJson.access_token !== undefined) {
          alert('Successfully authenticated!')
          fn(responseJson.access_token)
        } else {
          alert('Could not authenticate, please try again')
        }
      } catch (error) {
        console.error(error);
      }
    }
    getBearerToken(this.state.email, this.state.password, this.props.setEstablishedConnection);
  };
  
}



const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#111117',
      
  },
  KeyboardAvoidingView: {
    flex: 1,
    backgroundColor: '#111117',
    padding: 20
  },
  description: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    color: '#9d9d9d',
    textAlign: 'center',
    width: width/1.3
  },
  loginContainer:{
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer: {
    flex: 2,
  },
  logo: {
    marginTop: 50,
    marginBottom: 50,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  inputContainer: {
    backgroundColor: '#202026',
    height:45,
    marginBottom:10,
    padding: 10,
    flexDirection: 'row',
    alignItems:'center'
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  input:{
    flex: 1,
    height:45,
    backgroundColor: '#202026',
    padding: 10,
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
  },
  buttonContainer:{
    backgroundColor: '#333333',
    paddingVertical: 15
  },
  buttonText:{
    color: '#cccccc',
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Montserrat-Medium',
  },
  legalView: {
    width: '100%', 
    backgroundColor: 'transparent', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
  },
  legal: {
    color: '#98989b',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    textAlign: 'center',
    paddingBottom: 20,
  },
});



function mapStateToProps(state) {
    const { auth } = state;
    return {
      auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
      requestSignIn: bindActionCreators(requestSignIn, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);