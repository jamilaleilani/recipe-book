import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styling from '../styles/style';
import {Actions} from 'react-native-router-flux'

export default class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: ""
    }
    this.AddRecipe = this.AddRecipe.bind(this);
  }

  AddRecipe() {
    this.props.addrecipe(this.state.recipe);
  }

  render() {
    return (
      <View style={styling.container}>
        <Text style={styling.heading}>Add A Recipe</Text>
        <TextInput
          style={styling.input} autoCapitalize="none" placeholder='recipe' value={this.state.recipe}
          onChangeText={(t) => this.setState({recipe: t})}>
        </TextInput>
        <TouchableOpacity style={ styling.button } onPress={this.AddRecipe}><Text>Add Recipe</Text></TouchableOpacity>
      </View>

    );
  }
}
