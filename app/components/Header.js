import React from 'react';
import { Text, View } from 'react-native';
import { Link, nativeHistory,
        Route, Router, StackRoute, withRouter } from 'react-router-native';
import styling from '../styles/style';

class Header extends React.Component {
  render() {
    return (
      <View style={styling.header}>
        <Text>This is the Header</Text>
      </View>
    );
  }
}

export default Header;
