
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
      width: 500,
      height: 500,
      cropping: true
    }).then(image => {
      Actions.DisplayPic(image.path);
      console.log(image);
    });

  }

  selectFromCamera(){

    ImagePicker.openCamera({
      width: 500,
      height: 500,
      cropping: true
    }).then(image => {
      Actions.DisplayPic(image.path);
      console.log(image);
    });

  }

  render() {

    const { containerStyle, textStyle, viewStyle, galleryButtonStyle, cameraButtonStyle } = styles;

    return (
      <View style = { containerStyle }>

        <Text style = { textStyle }>
          Welcome to Camera Module!
        </Text>

          <View style = { viewStyle }>

              <Button rounded light>

                <TouchableOpacity onPress = { () => this.selectFromCamera() }>
                  <Icon name = 'camera' />
                </TouchableOpacity>

              </Button>
                <Text>   </Text>
              <Button rounded light>

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
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DADFE1',
  },

  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },

  cameraButtonStyle: {
    alignSelf: 'center',
    marginRight: 20
  },

  galleryButtonStyle: {
    alignSelf: 'center'
  },

  viewStyle: {
    flexDirection: 'row'
  }

});
