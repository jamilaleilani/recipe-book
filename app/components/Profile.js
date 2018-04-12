import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styling from '../styles/style';
import {Actions} from 'react-native-router-flux'
import Recipe from './Recipe'
import Logout from './Logout'
import * as firebase from 'firebase';


export default class Profile extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        recipes: []
      }

      this.Signout = this.Signout.bind(this);
    }

  Signout() {
    this.props.signout()
    Actions.launch()
  }

  componentDidMount() {
    const query = this.props.db.ref("recipes").orderByKey();
    query.once("value").then( snapshot => {
      let recipes = []
      snapshot.forEach( recipe => {
        let userid = firebase.auth().currentUser.uid
        let recipeid = recipe.child("owner").val()
        if (userid == recipeid) {
          recipes.push(recipe)
        }
      })
      this.setState({ recipes: recipes });
    });
  }

  render() {
    return (
      <View style={styling.container}>
        <Text onPress={this.Signout}>logout</Text>
        <Text>My Recipes</Text>
        <ScrollView>
          {this.state.recipes.map(recipe =>
            <Recipe recipe={recipe}/>
          )}
        </ScrollView>
      </View>
    );
  }
}
