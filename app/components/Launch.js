import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styling from '../styles/style';
import {Actions} from 'react-native-router-flux';
import Signup from './Signup';

export default class Launch extends React.Component {
  constructor(props) {
    super(props);
    this.Show = this.Show.bind(this);
  }

  Show() {
    this.props.show();
  }


  componentDidMount() {
    const query = this.props.db.ref("recipes").orderByKey();
    let recipes = ""
    query.once("value").then( function(snapshot) {
       snapshot.forEach(function(childSnapshot) {
         let key = childSnapshot
         recipes = recipes + key
         alert(childSnapshot)
     });
    });
  }

  render() {
    return (
      <View style={styling.launch}>
        <View>
          <Text style={styling.launchtitle}>Recipe Book</Text>
          <Signup register={this.props.register}/>
        </View>
        <View><Text>{"hello"}</Text></View>
        <View style={styling.launchtextbox}>
          <TouchableOpacity onPress={()=>Actions.login()}><Text style={styling.launchtext}>Login</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}
