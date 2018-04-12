import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styling from '../styles/style';
import {Actions} from 'react-native-router-flux';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }

    this.SignUp = this.SignUp.bind(this);

  }

  SignUp() {
    this.props.register(this.state.email, this.state.password);
  }


  render() {
    return (
      <View>
      <Text style={styling.heading}>Signup</Text>
      <TextInput
        style={styling.input}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder='email'
        value={this.state.email}
        onChangeText={(t) => this.setState({email: t})}>
      </TextInput>
      <TextInput
        style={styling.input}
        secureTextEntry={true}
        autoCapitalize="none"
        placeholder='password'
        value={this.state.password}
        onChangeText={(t) => {this.setState({password: t})}}>
      </TextInput>
      <TouchableOpacity style={ styling.button } onPress={this.SignUp, Actions.tabbar}><Text>Register</Text></TouchableOpacity>
      </View>
    );
  }
}
