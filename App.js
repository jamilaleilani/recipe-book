import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styling from './app/styles/style'
import Header from './app/components/Header'
import Logout from './app/components/Logout'
import Signup from './app/components/Signup'
import Login from './app/components/Login'
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC0i7bYtLk4cNXRANxaNjCzhX2U56ILsSQ',
  authDomain: "recipe-app-api.firebaseapp.com",
  databaseURL: "https://recipe-app-api.firebaseio.com",
  projectId: 'recipe-app-api',
  storageBucket: "recipe-app-api.appspot.com",
  messagingSenderId: "817261021460"
};

firebase.initializeApp(config);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.database = firebase.database();

    this.state = {
      email: "",
      password: ""
    }

    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  render() {
    return (
      <View style={styling.container}>
        <Header />
        <Login login={this.login} />
        <Signup register={this.register} />
        <Logout logout={this.signOut} />
      </View>
    );
  }

  login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
      alert("login successful");
    }). catch((err) => {
      alert(err);
    });
  }

  register(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
      alert("new user created");
    }). catch((err) => {
      alert( err);
      console.log("an error occured: ", err);
    });
  }

  signOut() {
    firebase.auth().signOut().then(res => {
      alert('You have signed out')
    }).catch(err => alert(err))
  }

}
