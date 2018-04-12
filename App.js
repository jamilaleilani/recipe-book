import React from 'react';
import { Router, Scene, TabBar, Modal, Actions, ActionConst } from 'react-native-router-flux';
import { Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styling from './app/styles/style'
import Launch from './app/components/Launch'
import Profile from './app/components/Profile'
import NewRecipe from './app/components/NewRecipe'
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
      isloggedin: false,
      email: "",
      password: ""
    }

    this.signOut = this.signOut.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  addRecipe(recipe) {
    firebase.database().ref('recipes/').push({
      title: recipe,
    })
  }

  show() {
    const query = firebase.database().ref("recipes").orderByKey();
    query.once("value").then( function(snapshot) {
       snapshot.forEach(function(childSnapshot) {
         let key = childSnapshot.key;
         let recipes = recipes + '<Text>' + key + '</Text>'
     });
     return recipes
    });
  }


  login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
      this.state.isloggedin = true
      alert(this.state.isloggedin);
    }). catch((err) => {
      this.state.isloggedin = false
      alert(err, this.state.isloggedin);
    });
  }

  register(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
      this.state.isloggedin = true
      alert("new user created", this.state.isloggedin);
    }). catch((err) => {
      this.state.isloggedin = false
      alert( err, this.state.isloggedin);
    });
  }

  signOut() {
    firebase.auth().signOut().then(res => {
      this.state.isloggedin = false
      alert('You have signed out', this.state.isloggedin)
    }).catch(err => alert(err, this.state.isloggedin))
  }

  render() {

    return (
      <Router>

        <Scene key="modal" component={Modal} >
                <Scene key="root" hideNavBar={true}>
                    <Scene key="signup" component={Signup} title="signup" register={this.register} />
                    <Scene key="login" component={Login} title="Login" login={this.login}/>
                    <Scene key="logout" component={Logout} title="Logout" signout={this.signOut}/>
                    <Scene key="newrecipe" component={NewRecipe} title="New Recipe" onLeft={()=>Actions.launch()} leftTitle="back" addrecipe={this.addRecipe}/>
                    <Scene key="launch" component={Launch} title="Recipe Book" initial={true} style={{flex:1, backgroundColor:'transparent'}} register={this.register} show={this.show} db={this.database}/>
                    <Scene key="tabbar" tabs={true} >
                        <Scene key="profile" component={Profile} title="Profile" onLeft={()=>Actions.launch()} leftTitle="back" show={this.show}/>
                        <Scene key="newrecipe" component={NewRecipe} title="New Recipe" onLeft={()=>Actions.launch()} leftTitle="back" addrecipe={this.addRecipe}/>
                    </Scene>
                </Scene>
                <Scene key="profile" component={Profile}/>
            </Scene>
      </Router>
    );
  }
}
