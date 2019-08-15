import {AsyncStorage} from "react-native";

let helper = {
  
  async getCache(key){

        var value = await AsyncStorage.getItem(key);
        return value;

    },
    async setCache(key,data){

        var value = await AsyncStorage.setItem(key,data);

    } 
 
}

module.exports = helper
