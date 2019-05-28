import React, {Component} from 'react';
import {Text, View, TextInput,Button,ScrollView,StyleSheet} from "react-native"
import Icon from "react-native-vector-icons/Feather";

const List = (props) =>{
  return (
      <View style={styles.listContainer}>
        <Icon name={props.checked ? 'check' : 'square'} size={30} color="black" style={{ marginLeft: 15 }} onPress={props.checkTodo}/>
        <View><Text style={styles.listItem}>{props.name}</Text></View>
        <Icon
          onPress={props.remove}
          name="trash-2"
          size={30}
          color="red"
          style={{marginLeft: 'auto', marginRight:20 }}
        />
      </View>
    )
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    borderColor: '#aaaaaa',
    borderBottomWidth: 1.5,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40
  },
  listItem: {
    textAlign: 'center',
    flexWrap: 'wrap',
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 6,
    borderColor: 'green',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  }
});

export default List
