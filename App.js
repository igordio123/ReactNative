import React, {Component} from 'react';
import ToDo from './src/toDo';
import Hello from './src/hui'
import {Provider} from 'react-redux'
import reducer from './redux/reducer';
import { View,Text} from "react-native";
import {createStore } from "redux";
import { createStackNavigator , createAppContainer} from 'react-navigation';
import Icon from "react-native-vector-icons/index";
const store = createStore(reducer);


export default class App extends Component{
  render() {
    return(
      <Provider store={store}>
        <AppContainer/>
      </Provider>

      )
  }
}



const AppNavigator = createStackNavigator({
  Home: ToDo,
  About:Hello
});

const AppContainer =  createAppContainer(AppNavigator);
