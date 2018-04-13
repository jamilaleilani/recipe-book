import React from 'react';
import { Router, Scene, TabBar, Modal, Actions, ActionConst } from 'react-native-router-flux';
import { Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styling from './app/styles/style'
import Launch from './app/components/Launch'
import Profile from './app/components/Profile'
import NewRecipe from './app/components/NewRecipe'
import Signup from './app/components/Signup'
import Login from './app/components/Login'
import TabIcon from './app/components/TabIcon'
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
      isloggedin: false,
      email: "",
      password: "",
      user: ""
    }

    this.signOut = this.signOut.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.listeningForAuthChange = this.listeningForAuthChange.bind(this);
    this.addRecipe = this.addRecipe.bind(this);

  }

  addRecipe(owner, title, ingredients, directions) {
    firebase.database().ref('recipes/').push({
      owner: owner,
      title: title,
      ingredients: ingredients,
      directions: directions
    })
  }

  listeningForAuthChange() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          this.setState({user: user.email})
        } else {
          this.setState({user: "no user logged in"})
        }
    });
  }

  login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
      this.state.isloggedin = true
    }). catch((err) => {
      this.state.isloggedin = false
      alert(err);
    });
  }

  register(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
      this.state.isloggedin = true
      alert("new user created", this.state.isloggedin);
    }). catch((err) => {
      this.state.isloggedin = false
      alert(err);
    });
  }

  signOut() {
    firebase.auth().signOut().then(res => {
      this.state.isloggedin = false
      alert('You have signed out')
    }).catch(err => alert(err))
  }

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
            <Scene key="signup" component={Signup} title="signup" register={this.register} />
            <Scene key="login" component={Login} title="Login" login={this.login}/>
            <Scene key="launch" component={Launch} title="Recipe Book" initial={true} style={{flex:1, backgroundColor:'transparent'}} register={this.register}/>
            <Scene key="tabbar" tabs={true} tabBarStyle={{backgroundColor: 'rgb(119,77,117)', paddingBottom: 15, tabBarTextFontSize: 50, tabBarLabelColor: 'pink'}}>
                <Scene key="profile" component={Profile} title="Profile" navigationBarStyle={{backgroundColor:'white'}} titleStyle={{fontFamily: 'Avenir', color: 'rgb(119,77,117)', fontWeight: '600'}} onLeft={()=>Actions.launch()} leftTitle="back" onRight={()=> {this.signOut(); Actions.launch()}} rightTitle="logout" rightButtonTextStyle={styling.navbutton} leftButtonTextStyle={styling.navbutton} db={this.database}/>
                <Scene key="newrecipe" component={NewRecipe} title="New Recipe" navigationBarStyle={{backgroundColor:'white'}} titleStyle={{fontFamily: 'Avenir', color: 'rgb(119,77,117)', fontWeight: '600'}} onLeft={()=>Actions.launch()} leftTitle="back" onRight={()=> {this.signOut(); Actions.launch()}} rightTitle="logout" rightButtonTextStyle={styling.navbutton} leftButtonTextStyle={styling.navbutton} addrecipe={this.addRecipe}/>
            </Scene>
        </Scene>
      </Router>
    );
  }
}
