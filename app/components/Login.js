import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styling from '../styles/style';
import {Actions} from 'react-native-router-flux';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.Login = this.Login.bind(this);
  }

  Login() {
    this.props.login(this.state.email, this.state.password);
  }


  render() {
    return (
      <View style={styling.container}>
        <Text style={styling.heading}>Login</Text>
        <TextInput
          style={styling.input} keyboardType="email-address" autoCapitalize="none" placeholder='email' value={this.state.email}
          onChangeText={(t) => this.setState({email: t})}>
        </TextInput>
        <TextInput style={styling.input} secureTextEntry={true} autoCapitalize="none" placeholder='password' value={this.state.password}
          onChangeText={(t) => {this.setState({password: t})}}>
        </TextInput>
        <TouchableOpacity style={ styling.button } onPress={this.Login, Actions.tabbar}><Text>Login</Text></TouchableOpacity>
      </View>
    );
  }
}
