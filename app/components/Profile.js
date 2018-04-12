import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styling from '../styles/style';
import {Actions} from 'react-native-router-flux'
import Recipe from './Recipe'
import * as firebase from 'firebase';


export default class Profile extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        recipes: []
      }
    }


  componentDidMount() {
    const query = this.props.db.ref("recipes").orderByKey();
    query.once("value").then( snapshot => {
      let recipes = []
      snapshot.forEach( recipe => {
        recipes.push(recipe)
      })
      this.setState({ recipes: recipes });
    });
  }

  render() {
    let user = firebase.auth().currentUser.uid;
    console.log("this is the user: ", user)
    return (
      <View style={styling.container}>
        <Text>My Recipes</Text>
        <View>
          {this.state.recipes.map(recipe =>
            <Recipe recipe={recipe} user={user}/>
          )}
        </View>
      </View>
    );
  }
}
