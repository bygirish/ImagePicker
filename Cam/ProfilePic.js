import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Button, Icon } from 'native-base';
import styles from './styles';

class ProfilePic extends Component {

  constructor(props){
    super(props);

    this.initialState = {
      path: 'unknown'
    };

    this.state = this.initialState;
  }

  render() {

    const { containerStyle, textStyle, imageStyle, buttonStyle, viewStyle } = styles;

    return (

      <View style = { containerStyle }>

        <Text style = { textStyle }> Profile Pic </Text>

        <View style = { viewStyle }>

            <Image
            style = { imageStyle }
            source = {{ uri: this.state.path }}
            />

            <Button light style = { buttonStyle }>

              <TouchableOpacity onPress = { () => { this.showAlert() } }>
              <Icon name = 'create'  />
              </TouchableOpacity>

            </Button>

        </View>

      </View>

    );
  }

  showAlert(){
    Alert.alert(
    '',
    'Choose From..',
    [
      { text: 'Remove', onPress: () => this.setState(this.initialState) },
      { text: 'Camera', onPress: () => this.selectFromCamera() },
      { text: 'Gallery', onPress: () => this.selectFromGallery() },
    ],
    { cancelable: true }
    )
  }

  selectFromCamera(){

    ImagePicker.openCamera({
      width: 1000,
      height: 1000,
      cropping: true
      }).then(image => {
      this.setState({ path: image.path });
    });

  }

  selectFromGallery(){

    ImagePicker.openPicker({
      width: 1000,
      height: 1000,
      cropping: true
      }).then(image => {
      this.setState({ path: image.path });
    });

  }

}

export default ProfilePic;
