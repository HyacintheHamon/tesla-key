import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import YourCarPic from '../components/YourCarPic'
import HeaderComponent from '../components/HeaderComponent'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { height, width } = Dimensions.get('window');
// import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import SummonModalScreen from './SummonModalScreen';

export default class MainScreen extends Component {
  state = {
    data: [
      { id: "1", iconTitle:"chair", title: "" },
      { id: "2", iconTitle:"angle-up", title: "" },
      { id: "3", iconTitle:"thermometer-full", title: "MANUAL" },
      { id: "4", iconTitle:"angle-up", title: "" },
      { id: "5", iconTitle:"chair", title: "" },

      { id: "6", iconTitle:"bolt", title: "port" },
      { id: "7", iconTitle:"car", title: "frunk" },
      { id: "8", iconTitle:"car", title: "panic" },
      { id: "9", iconTitle:"car", title: "trunk" },
      { id: "10", iconTitle:"door-closed", title: "vent" }
    ],
    visibleModal: null,
  };

  closeModal() {
    this.setState({visibleModal: false});
  }
  render() {
    const columns = 5;
    return (
      <View style={styles.container}>
        {/* <LinearGradient colors={['#111117', '#333']} style={styles.linearGradient}> */}
          <HeaderComponent
            leftButtonOnPress={() => this.props.navigation.toggleDrawer()}
            rightButtonOnPress={()=> this.setState({ visibleModal: true })}
            leftButtonImage={false}
            leftIconName={'menu'}
            leftIconType={'feather'}
          />
          <View style={ styles.topView} >
            <View style={ styles.milesView} >
              <Text style={styles.milesViewTitle}>254</Text>
              <Text style={styles.milesViewSubTitle}>mi</Text>
            </View>
          <YourCarPic />
          </View>
          <View style={ styles.bottomView} >
            <View style={styles.status}>
              <Icon
                name={'lock'}
                type={'Entypo'}
                color={'white'}
                size={14}
                style={{margin: 10}}
              />
              <TouchableOpacity onPress={()=>alert("temp")}>
                <Text style={styles.label}>Interior 68°F</Text>
              </TouchableOpacity>
              <Icon 
                style={styles.infoIcon}
                name="parking"
                size={14}
                color="#fff"
                style={{margin: 10}}
              />
              <TouchableOpacity onPress={()=>alert("temp")}>
                <Text style={styles.label}>Parked</Text>
              </TouchableOpacity>
              <Ionicons
                name={'md-battery-charging'}
                style={styles.infoIcon}
                color={'white'}
                size={14}
                style={{margin: 10}}
              />
              <TouchableOpacity onPress={()=>alert("temp")}>            
                <Text style={styles.label}>Charging</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.calloutView} >
              <View style={styles.calloutIconView}>
                <Icon style={styles.calloutIcon} name="location-arrow" size={10} color="#333" />
              </View>
              <TextInput style={styles.calloutSearch} placeholderTextColor = "#fff" placeholder={"Where to?"} />
          </View>
          <FlatList
          data={createRows(this.state.data, columns)}
          scrollEnabled={false} 
          keyExtractor={item => item.id}
          numColumns={columns}
          renderItem={({ item }) => {
            if (item.empty) {
              return <View style={[styles.item, styles.itemEmpty]} />;
            }
            return (
              <TouchableOpacity onPress={()=>alert("tapped")}> 
                <View style={styles.item}>
                  <Icon style={styles.icon} name={item.iconTitle} size={25} color="#FFF" />
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        </View>
        {/* </LinearGradient> */}
        <Modal
          style={{ margin: 0 }}
          isVisible={this.state.visibleModal === true}
          backdropColor={"#111117"}
          backdropOpacity={1}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          animationInTiming={300}
          animationOutTiming={300}
          backdropTransitionInTiming={300}
          backdropTransitionOutTiming={300}
        >
          <SummonModalScreen onClose={()=>this.closeModal()}/>
        </Modal>
      </View>
    );
  }
}

function createRows(data, columns) {
  const rows = Math.floor(data.length / columns);
  let lastRowElements = data.length - rows * columns;

  while (lastRowElements !== columns) {
    data.push({
      id: `empty-${lastRowElements}`,
      title: `empty-${lastRowElements}`,
      empty: true
    });
    lastRowElements += 1;
  }

  return data;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111117',
  },
  status: {
    flexDirection: 'row',
    width: width*0.9,
    flex: 0.075,
    alignItems: 'center'
  },
  label: {
    color: 'white'
  },
  topView: {
    flex: 1,
    paddingTop: height/5,
    backgroundColor: 'transparent', 
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  milesView: {
    flexDirection: 'row',
  },
  milesViewTitle: {
    fontFamily: 'Arial',
    fontSize: 130,
    color: '#fff',
    top: -height/7
  },
  milesViewSubtitle: {
    fontFamily: 'Arial',
    fontSize: 20,
    top: -125,
    color: '#606060',
  },
  bottomView: {
    width: '100%', 
    backgroundColor: 'transparent', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: "#fff",
    fontWeight: 'bold',
    marginTop: 10,
    paddingBottom: 20,
  },
  infoView: {
    flexDirection: 'row',
    marginLeft: 20
  },
  infoViewItem: {
    paddingLeft: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  info: {
    textAlign: 'center',
    color: "#fff",
    margin: 5,
  },
  iconIcon: {
  },
  item: {
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#111117",
    // flexBasis: 0,
    flexGrow: 1,
    margin: 7,
    width: 60,
    height: 60,
    maxWidth: 60,
    maxHeight: 60
  },
  itemEmpty: {
    backgroundColor: "transparent"
  },
  icon: {
    paddingBottom: 10
  },
  text: {
    color: "#fff",
    textTransform: 'uppercase',
    fontSize: 10
  },
  calloutView: {
    flexDirection: "row",
    backgroundColor: '#13181B',
    borderRadius: 5,
    width: "95%",
    marginLeft: "30%",
    marginRight: "30%",
    marginTop: 10,
    marginBottom: 40
  },
  calloutIconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  calloutIcon: {
    color: "#fff"
  },
  calloutSearch: {
    borderColor: "transparent",
    color: "#fff",
    marginLeft: 10,
    width: "80%",
    marginRight: 10,
    height: 40,
    borderWidth: 0.0 
  }
});