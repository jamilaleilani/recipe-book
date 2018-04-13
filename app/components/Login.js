import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
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
    const resizeMode = 'cover';
    return (
      <View style={styling.login}>
        <Image style={{flex: 1, position: 'absolute', resizeMode, width: '100%', height: '100%',}} source={require("../assets/greencauli.png")}/>
        <Text style={styling.heading}>Login</Text>
        <TextInput
          style={styling.input} keyboardType="email-address" autoCapitalize="none" placeholder='email' value={this.state.email}
          onChangeText={(t) => this.setState({email: t})}>
        </TextInput>
        <TextInput style={styling.input} secureTextEntry={true} autoCapitalize="none" placeholder='password' value={this.state.password}
          onChangeText={(t) => {this.setState({password: t})}}>
        </TextInput>
        <TouchableOpacity style={ styling.loginbutton} onPress={this.Login}><Text style={styling.buttontext}>Login</Text></TouchableOpacity>
      </View>
    );
  }
}
