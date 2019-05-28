import React, {Component} from 'react';
import {Text, View, TextInput,Button,ScrollView,TouchableOpacity,StyleSheet} from "react-native";
import {connect} from 'react-redux'
import List from './list'
import Icon from "react-native-vector-icons/Feather";
class ToDo extends Component{
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props){
    super(props);
    this.state = {
      text:''
    };
   this.styles = StyleSheet.create({
      container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      },
     textInputContainer: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'baseline',
       borderColor: 'black',
       borderBottomWidth: 1,
       paddingRight: 10,
       paddingBottom: 10
     },
    })
  }

   readText = (value) => {
    this.setState({text: value})
    };
    createTask = () => {
        if(!this.state.text){
          return;
        }
      const payload = {name:this.state.text,checked:false,key:new Date().getTime()};
      this.props.addNew(payload);
    };
    checkTask = (id) =>{
      this.props.done(id)
    };
    remove = (id) => {
      this.props.remove(id)
    };
    render(){
      const {navigate} = this.props.navigation;
      const list =  this.props.tasks.map(item => {return  <List name={item.name}
                                                                remove = {() => this.remove(item.key)}
                                                                checkTodo={() =>this.checkTask(item.key)} checked={item.checked}/>});
      return (
        <View >
          <View><Text style={{color: 'red', textAlign: 'center'}}>ToDOList</Text></View>

          <View style={this.styles.textInputContainer}>
            <View><TextInput style={{width:100}} value={this.state.text} onChangeText={value => {return this.readText(value)}}/></View>
            <View><TouchableOpacity >
            <Icon name="plus" size={30} color="blue" onPress={() =>this.createTask()} style={{ marginLeft: 15 }} />
            </TouchableOpacity></View></View>
          <ScrollView>
            {list}
          </ScrollView>
          <Button
            title="Go to Jane's profile"
            onPress={() => navigate('About', {name: 'Jane'})}
          />
        </View>
      );

    }
}

const mapStateToProps = (state)=>{
  return {
    tasks : state.tasks,
    task:state.task,
  }
};
const mapDispatchToProps = (dispatch) => {

  return {
    addNew : (payload) => {dispatch({type:'ADD_NEW_ITEM',payload})},
    done: (payload) => {dispatch({type: 'DONE',payload})},
    remove: (payload) => {dispatch({type: 'REMOVE',payload})}
  }

};
export default connect(mapStateToProps, mapDispatchToProps)(ToDo)
