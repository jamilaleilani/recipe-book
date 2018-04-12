import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styling from '../styles/style';
import {Actions} from 'react-native-router-flux';
import * as firebase from 'firebase';

export default class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: "",
      title: "",
      ingredients: "",
      directions: ""
    }
    this.AddRecipe = this.AddRecipe.bind(this);
  }


  AddRecipe() {
    this.props.addrecipe(this.state.title, this.state.ingredients, this.state.directions);
  }

  render() {
    let owner = firebase.auth().currentUser.uid;
    return (
      <View style={styling.container}>
        <Text style={styling.heading}>Add A Recipe</Text>
        <TextInput
          style={styling.input} autoCapitalize="none" placeholder='title' value={this.state.title}
          onChangeText={(t) => this.setState({title: t})}>
        </TextInput>
        <TextInput
          style={styling.input} autoCapitalize="none" placeholder='ingredients' value={this.state.ingredients}
          onChangeText={(t) => this.setState({ingredients: t})}>
        </TextInput>
        <TextInput
          style={styling.input} autoCapitalize="none" placeholder='directions' value={this.state.directions}
          onChangeText={(t) => this.setState({directions: t})}>
        </TextInput>
        <TouchableOpacity style={ styling.button } onPress={this.AddRecipe}><Text>Add Recipe</Text></TouchableOpacity>
      </View>

    );
  }
}
