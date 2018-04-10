import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styling from '../styles/style';

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
          <TouchableOpacity style={styling.logout} onPress={this.props.logout}><Text>LOGOUT</Text></TouchableOpacity>
      </View>
    );
  }
}

export default Logout;
