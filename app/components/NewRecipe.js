import React from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styling from '../styles/style';
import {Actions} from 'react-native-router-flux';
import * as firebase from 'firebase';

export default class NewRecipe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      owner: firebase.auth().currentUser.uid,
      title: "",
      ingredients: "",
      directions: ""
    }
    this.AddRecipe = this.AddRecipe.bind(this);
  }


  AddRecipe() {
    this.props.addrecipe(this.state.owner, this.state.title, this.state.ingredients, this.state.directions);
    Actions.tabbar()
  }

  render() {
    const user = firebase.auth().currentUser.uid;
    console.log("ad recipe, User: ", user)
    return (
      <View style={styling.profileandnew}>
        <Text style={styling.heading}>Add A Recipe</Text>
        <ScrollView>
          <TextInput
            style={styling.input} autoCapitalize="none" placeholder='title' value={this.state.title}
            onChangeText={(t) => this.setState({title: t})}>
          </TextInput>
          <TextInput
            multiline={true}
            style={styling.inputlarge} autoCapitalize="none" placeholder='ingredients' value={this.state.ingredients}
            onChangeText={(t) => this.setState({ingredients: t})}>
          </TextInput>
          <TextInput
            multiline={true}
            style={styling.inputlarge} autoCapitalize="none" placeholder='directions' value={this.state.directions}
            onChangeText={(t) => this.setState({directions: t})}>
          </TextInput>
          <TouchableOpacity style={ styling.button } onPress={this.AddRecipe}><Text>Add Recipe</Text></TouchableOpacity>
        </ScrollView>
      </View>

    );
  }
}
