import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styling from '../styles/style';
import {Actions} from 'react-native-router-flux'
import * as firebase from 'firebase';


export default class Recipe extends React.Component {
    constructor(props) {
      super(props);
    }

  render() {
    let recipeOwner = this.props.recipe.child("owner").val()
    let recipeTitle = this.props.recipe.child("title").val()
    let recipeIngredients = this.props.recipe.child("ingredients").val()
    let recipeDirections = this.props.recipe.child("directions").val()

    let userid = firebase.auth().currentUser.uid

    return (
      <View style={styling.recipe}>
        <Text style={styling.recipetitle}>Title: <Text style={styling.recipetext}>{recipeTitle}</Text></Text>
        <Text style={styling.recipetitle}>Ingredients:</Text>
        <Text style={styling.recipetext}>{recipeIngredients}</Text>
        <Text style={styling.recipetitle}>Directions:</Text>
        <Text style={styling.recipetext}>{recipeDirections}</Text>
      </View>
    );

  }
}
