import React from 'react'
import { Text, TouchableOpacity, StatusBar, TextInput, KeyboardAvoidingView, View, StyleSheet, Linking, Dimensions } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { Loading } from '../components/Common/Loading';
import { User, Lock, GreyLogo } from '../img/svg';
import I18n from "../Utils/i18n";

const { height, width } = Dimensions.get('window');

import * as OAuth from '../Utils/oauth'
import env from '../env'

class LoginScreen extends React.Component {

  state = {
    email: '',
    password: '',
    loading: false,
  };

  componentDidUpdate(nextProps) {
    this.props.navigation.navigate('DrawerStack');
  }

  setNavigationColor = (color) => {
    changeNavigationBarColor(color);
  };

  componentDidMount() {
    this.setNavigationColor('#111117');
  }

  render() {

    return (
      <View style={styles.container}>

        <KeyboardAvoidingView behavior="padding" style={styles.KeyboardAvoidingView}>
          <StatusBar barStyle="light-content" />
          <View style={styles.loginContainer}>
            <GreyLogo width="100px" height="50px" />
            <Text style={styles.description}>
              {I18n.t("login_description")}
            </Text>
          </View>
          <View style={styles.formContainer}>

            <View style={styles.inputContainer}>
              <User />
              <TextInput style={styles.input}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                ref={ref => { this._emailInput = ref }}
                autoCapitalize="none"
                onSubmitEditing={() => this.passwordInput.focus()}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType='email-address'
                keyboardAppearance="dark"
                returnKeyType="next"
                placeholder={I18n.t("email")}
                onSubmitEditing={this.handleSubmit}
                blurOnSubmit={true}
                placeholderTextColor='rgba(225,225,225,0.7)' />
            </View>

            <View style={styles.inputContainer}>
              <Lock />
              <TextInput style={styles.input}
                ref={ref => { this._passwordInput = ref }}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                keyboardType="ascii-capable"
                keyboardAppearance="dark"
                returnKeyType="go"
                autoCorrect={false}
                autoCapitalize="none"
                ref={(input) => this.passwordInput = input}
                placeholder={I18n.t("password")}
                placeholderTextColor='rgba(225,225,225,0.7)'
                onSubmitEditing={this.handleSubmit}
                blurOnSubmit={true}
                secureTextEntry />
            </View>
            {!this.state.loading ?
              <TouchableOpacity style={styles.buttonContainer} onPress={this.signIn}>
                <Text style={styles.buttonText}>{I18n.t("login")}</Text>
              </TouchableOpacity>
              :
              <Loading size={'small'} />
            }

          </View>
        </KeyboardAvoidingView>
        <View style={styles.legalView}>
          <Text style={styles.legal} onPress={() => { Linking.openURL('https://www.tesla.com/user/password?email=&redirect=no') }}>
            {I18n.t("reset_password")}
          </Text>
          <Text style={styles.legal} onPress={() => { Linking.openURL('https://www.tesla.com/about/legal#privacy-statement?redirect=no') }}>
            {I18n.t("privacy_policy")}
          </Text>
        </View>

      </View>
    )
  }

  signIn = async () => {
    this.setState({ loading: true });
    // let authData = {email: this.state.email, password: this.state.password};
    // this.props.requestSignIn(authData);
    const { email: username, password } = this.state;

    try {
      const authState = await OAuth.authorize({
        clientId: '81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384',
        issuer: env.OAUTH_URI,
        password,
        username,
      });

      this.props.navigation.navigate('DrawerStack');

    } catch (e) {
      alert(JSON.stringify(e));
    }

    // await this.getBearerToken(this.state.email, this.state.password, this.props.setEstablishedConnection);
    this.setState({ loading: false });
  }

  handleSubmit = () => {
    this.getBearerToken(this.state.email, this.state.password, this.props.setEstablishedConnection);
  };

  getBearerToken = async (email, password, fn) => {
    try {
      let response = await fetch('http://localhost:3000/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: qs.stringify({
          client_id: '81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384',
          grant_type: 'password',
          password: password,
          username: email,
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
    width: width / 1.3,
    marginTop: 50
  },
  loginContainer: {
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
    height: 45,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 45,
    backgroundColor: '#202026',
    padding: 10,
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
  },
  buttonContainer: {
    backgroundColor: '#333333',
    paddingVertical: 15
  },
  buttonText: {
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

export default LoginScreen;
