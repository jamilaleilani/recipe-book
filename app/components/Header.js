import React from 'react';
import { Text, View } from 'react-native';
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
