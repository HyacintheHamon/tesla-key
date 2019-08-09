import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class DrawerContent extends React.Component {

  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#13181B'}}>
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

        <View style={styles.DrawerItem}>
          <Icon name={'concierge-bell'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon}/>
          <TouchableOpacity onPress={()=>alert("temp")}>
            <Text
              //onPress={() => navigation.navigate('MainScreen')}
              onPress={()=>alert("tapped")}
              style={styles.DrawerItemText}>
              Valet Mode
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DrawerItem}>
          <Icon name={'gift'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon} />
          <TouchableOpacity onPress={()=>alert("temp")}>
            <Text
              //onPress={() => navigation.navigate('MainScreen')}
              onPress={()=>alert("tapped")}
              style={styles.DrawerItemText}>
              Loot box
              </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DrawerItem}>
          <Icon name={'bell'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon} />
          <TouchableOpacity onPress={()=>alert("temp")}>
            <Text
              //onPress={() => navigation.navigate('Screen')}
              onPress={()=>alert("tapped")}
              style={styles.DrawerItemText}>
              Notifications
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DrawerItem}>
          <Icon name={'battery-three-quarters'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon} />
          <TouchableOpacity onPress={()=>alert("temp")}>
            <Text
              //onPress={() => navigation.navigate('Screen')}
              onPress={()=>alert("tapped")}
              style={styles.DrawerItemText}>
              Battery
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DrawerItem}>
          <Icon name={'shield-alt'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon} />
          <TouchableOpacity onPress={()=>alert("temp")}>
            <Text
              //onPress={() => navigation.navigate('Screen')}
              onPress={()=>alert("tapped")}
              style={styles.DrawerItemText}>
              Authentication
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DrawerItem}>
          <Icon name={'calendar'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon} />
          <TouchableOpacity onPress={()=>alert("temp")}>
            <Text
              //onPress={() => navigation.navigate('Screen')}
              onPress={()=>alert("tapped")}
              style={styles.DrawerItemText}>
              Calendar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DrawerItem}>
          <Icon name={'question-circle'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon} />
          <TouchableOpacity onPress={()=>alert("temp")}>
            <Text
              //onPress={() => navigation.navigate('Screen')}
              onPress={()=>alert("tapped")}
              style={styles.DrawerItemText}>
              Help
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DrawerItem}>
          <Icon name={'sign-out-alt'} type={'Entypo'} color={'white'} size={14} style={styles.DrawerItemIcon} />
          <TouchableOpacity onPress={()=>alert("temp")}>
            <Text
              //onPress={() => navigation.navigate('Screen')}
              onPress={()=>alert("tapped")}
              style={styles.DrawerItemText}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logoView}>
          <Image style={styles.logo} source={require('../img/logo_grey.png')} />
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
    backgroundColor: '#13181B',
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
    fontSize: 15,
    textAlign: 'center',
  },
  mileageView:{
    marginTop: 30,
    marginBottom: 30,
  },
  mileageText:{
    fontSize: 14,
    color: '#fff',
    padding: 5,
    textAlign: 'left'
  },
  milesView:{
    flexDirection: "row",
  },
  milesNumberText:{
    fontSize: 35,
    color: '#fff',
  },
  miText: {
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
  },
  DrawerItemIcon: {
    margin: 12
  },
  DrawerItemText: {
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
    width: 200,
    height: 100
  },
  version: { 
    fontSize: 10,
    fontWeight: 'bold',
    color: '#A9A9A9',
    marginTop: 0,
  }
})