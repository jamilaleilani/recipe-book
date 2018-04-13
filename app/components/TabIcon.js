import React from 'react';
import { Text, View} from 'react-native';


export default class TabIcon extends React.Component {
  render() {
    var color = this.props.selected ? 'red' : 'green';

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Text style={{color: color, fontSize: 25}}>whyyyy</Text>
      </View>
    );
  }
}
