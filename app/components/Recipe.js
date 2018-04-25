import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styling from '../styles/style';
import {Actions} from 'react-native-router-flux';
import RecipePage from './RecipePage';
import * as firebase from 'firebase';


export default class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeId: this.props.recipe.child("_id").val(),
      recipeOwner: this.props.recipe.child("owner").val(),
      recipeTitle: this.props.recipe.child("title").val(),
      recipeIngredients: this.props.recipe.child("ingredients").val(),
      recipeDirections: this.props.recipe.child("directions").val(),
    }

    this.GoToRecipe = this.GoToRecipe.bind(this)
  }

  GoToRecipe() {
    Actions.recipepage({ recipeId: this.state.recipeId,
                         recipeOwner: this.state.recipeOwner,
                         recipeTitle: this.state.recipeTitle,
                         recipeIngredients: this.state.recipeIngredients,
                         recipeDirections: this.state.recipeDirections,
                       })
  }

  render() {

    return (
      <View style={styling.recipe}>
        <Text style={styling.recipetitle}>Title: <Text style={styling.recipetext}>{this.state.recipeTitle}</Text></Text>
        <TouchableOpacity style={{backgroundColor: "pink"}} onPress={this.GoToRecipe}><Text style={styling.buttontext}>See Recipe</Text></TouchableOpacity>
      </View>
    );

  }
}
