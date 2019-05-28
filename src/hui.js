import React, {Component} from 'react';
import {Text, View} from "react-native";
import Icon from "react-native-vector-icons/Feather";


export default class Hello extends Component{
  render(){
    return (
      <View >
        <Icon name= 'check' size={30} color="black" style={{ marginLeft: 15 }}/>
        <View><Text>Hello</Text></View>
        <Icon
          name="trash-2"
          size={30}
          color="red"
          style={{marginLeft: 'auto', marginRight:20 }}
        />
      </View>
    )
  }

};
