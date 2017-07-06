
import React, { Component } from 'react';
import { Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component {

  render() {
    return (
      <View style = { styles.container }>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>
          Welcome to Camera Module!
        </Text>

          <View style={{ flexDirection: 'row'}}>

              <Button rounded light style={{alignSelf: 'center', marginRight: 20}}>
                <TouchableOpacity onPress = { () => Actions.Snap() }>
              <Icon name = 'camera' />
                </TouchableOpacity>
              </Button>
              <Button rounded light style={{alignSelf: 'center'}}>
                <TouchableOpacity onPress = { () => Actions.Pics() }>
                  <Icon name = 'image' />
                </TouchableOpacity>
              </Button>

          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DADFE1',
  }
});
