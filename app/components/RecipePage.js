import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styling from '../styles/style';

export default class RecipePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styling.recipe}>
        <Text style={styling.recipetitle}>RECIPE</Text>
        <Text style={styling.recipetitle}>Title: <Text style={styling.recipetext}>{this.props.recipeTitle}</Text></Text>
        <Text style={styling.recipetitle}>Ingredients:</Text>
        <Text style={styling.recipetext}>{this.props.recipeIngredients}</Text>
        <Text style={styling.recipetitle}>Directions:</Text>
        <Text style={styling.recipetext}>{this.props.recipeDirections}</Text>

      </View>
    );

  }
}
