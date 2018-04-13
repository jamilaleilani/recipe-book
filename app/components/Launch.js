import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styling from '../styles/style';
import {Actions} from 'react-native-router-flux';
import Signup from './Signup';

export default class Launch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const resizeMode = 'cover';
    return (
      <View style={styling.launch}>
        <Image style={{flex: 1, position: 'absolute', resizeMode, width: '100%', height: '100%',}} source={require("../assets/purplepeppers.png")}/>
        <View style={styling.launchtextbox}>
          <Text style={styling.launchtitle}>Recipe Book</Text>
          <Signup register={this.props.register}/>
        </View>
        <Text onPress={()=>Actions.login()} style={styling.launchtext}>Login</Text>
      </View>
    );
  }
}
