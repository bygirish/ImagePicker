
import React, { Component } from 'react';
import { Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-crop-picker';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component {


  selectFromGallery(){

    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true
    }).then(image => {
      Actions.DisplayPic(image.path);
      console.log(image);
    });

  }

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
                <TouchableOpacity onPress = { () => this.selectFromGallery() }>
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
