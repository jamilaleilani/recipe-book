import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styling from '../styles/style';
import {Actions} from 'react-native-router-flux'

export default class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.Show = this.Show.bind(this);
    }

    Show() {
      this.props.show();
    }
  render() {
    return (
      <View style={styling.container}>
        <Text>This is the Profile Page!!!</Text>
        <View>{this.Show}</View>
      </View>
    );
  }
}
