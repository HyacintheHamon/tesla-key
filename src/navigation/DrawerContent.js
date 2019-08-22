import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5';
import SvgUri from 'react-native-svg-uri';

export default class DrawerContent extends React.Component {

  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#15191E'}}>
      <View style={styles.container}>
        
        <View style={styles.headerView}>
           <Text style={styles.header}>MATTHEW</Text>
        </View>
        
        <TouchableOpacity style={styles.closeButton} onPress={()=>this.props.navigation.toggleDrawer()}>
          <Icon name="times" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.mileageView}>
          <Text style={styles.mileageText}>MILEAGE</Text>
          <View style={styles.milesView}>
            <Text style={styles.milesNumberText}>32,986</Text>
            <Text style={styles.miText}>mi</Text>
          </View>
        </View>

          <TouchableOpacity onPress={()=>alert("temp")} style={styles.DrawerItem}>
            <Icon name={'concierge-bell'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon}/>
            <Text
              //onPress={() => navigation.navigate('MainScreen')}
              onPress={()=>alert("tapped")}
              style={styles.DrawerItemText}>
              Valet Mode
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>alert("temp")} style={styles.DrawerItem}>
            <Icon name={'gift'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon} />
            <Text
              //onPress={() => navigation.navigate('MainScreen')}
              onPress={()=>alert("tapped")}
              style={styles.DrawerItemText}>
              Loot box
              </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>alert("temp")} style={styles.DrawerItem}>
            <Icon name={'bell'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon} />
            <Text
              //onPress={() => navigation.navigate('Screen')}
              onPress={()=>alert("tapped")}
              style={styles.DrawerItemText}>
              Notifications
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>alert("temp")} style={styles.DrawerItem}>
          <Icon name={'battery-three-quarters'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon} />
            <Text
              //onPress={() => navigation.navigate('Screen')}
              onPress={()=>alert("tapped")}
              style={styles.DrawerItemText}>
              Battery
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>alert("temp")} style={styles.DrawerItem}>
            <Icon name={'shield-alt'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon} />
            <Text
              //onPress={() => navigation.navigate('Screen')}
              onPress={()=>alert("tapped")}
              style={styles.DrawerItemText}>
              Authentication
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>alert("temp")} style={styles.DrawerItem}>
            <Icon name={'calendar'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon} />
            <Text
              //onPress={() => navigation.navigate('Screen')}
              onPress={()=>alert("tapped")}
              style={styles.DrawerItemText}>
              Calendar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>alert("temp")} style={styles.DrawerItem}>
            <Icon name={'bolt'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon} />
            <Text
              onPress={() => navigation.navigate('SuperchargersMap')}
              style={styles.DrawerItemText}>
              Superchargers Map
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>alert("temp")} style={styles.DrawerItem}>
            <Icon name={'question-circle'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon} />
            <Text
              //onPress={() => navigation.navigate('Screen')}
              onPress={()=>alert("tapped")}
              style={styles.DrawerItemText}>
              Help
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>alert("temp")} style={styles.DrawerItem}>
            <Icon name={'sign-out-alt'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon} />
            <Text
              //onPress={() => navigation.navigate('Screen')}
              onPress={()=>alert("tapped")}
              style={styles.DrawerItemText}>
              Sign Out
            </Text>
          </TouchableOpacity>

        <View style={styles.logoView}>
          <SvgUri style={styles.logo} width="100" height="50" source={require('../img/logo_grey.svg')} />
          <Text style={styles.version}>v. 1.0.0</Text>
        </View>

    
    </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15191E',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  headerView: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
  },
  header:{
    color: "#fff",
    textTransform: 'uppercase',
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    textAlign: 'center',
  },
  mileageView:{
    marginTop: 30,
    marginBottom: 30,
  },
  mileageText:{
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#fff',
    padding: 5,
    textAlign: 'left'
  },
  milesView:{
    flexDirection: "row",
  },
  milesNumberText:{
    fontFamily: 'Montserrat-Medium',
    fontSize: 35,
    color: '#fff',
  },
  miText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#fff',
    marginLeft: 5,
    marginTop: 20,
  },
  closeButton: {
    position: 'absolute',
    left: 20,
    top: 15,
  },
  DrawerItem: {
    flexDirection: "row",
    alignItems: "center"
  },
  DrawerItemIcon: {
    margin: 12,
  },
  DrawerItemText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#fff',
    padding: 12,
    textAlign: 'left'
  },
  logoView: {
    width: '100%', 
    backgroundColor: 'transparent', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  logo: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  version: { 
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    fontWeight: 'bold',
    color: '#36393e',
    marginTop: 10,
  }
})