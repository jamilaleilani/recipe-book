import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styling from '../styles/style';
import {Actions} from 'react-native-router-flux';
import Signup from './Signup';

export default class Launch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styling.launch}>
        <View>
          <Text style={styling.launchtitle}>Recipe Book</Text>
          <Signup register={this.props.register}/>
        </View>
        <View style={styling.launchtextbox}>
          <TouchableOpacity onPress={()=>Actions.login()}><Text style={styling.launchtext}>Login</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}
