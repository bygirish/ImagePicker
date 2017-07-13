/* CAMERA MODULE */

// importing required libraries
import React, { Component  } from 'react';
import { Text, View, Image, TouchableOpacity, Alert, Modal, Dimensions } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Button, Icon } from 'native-base';

// importing styles
import styles from './styles';

// constants
const FILE_NAME = "ProfilePic.js : ";

class ProfilePic extends Component {

  constructor(props){
    super(props);

    // Initializing state for image and modal
    this.initialState = {
      imageProperties: {
        path : "unknown",
      },
      modalVisible: false,
    };

    this.state = this.initialState;
  }

  render() {

    return (

      <View style = { styles.containerStyle }>

        <Text style = { styles.textStyle }> Profile Pic </Text>

        <View style = { styles.viewStyle }>

          <Modal
            animationType = { "none" }
            transparent = { true }
            visible = { this.state.modalVisible }
            onRequestClose = { () => { this.setModalVisible(false) } }
            >

                <View style = { styles.modalContainerStyle } >

                    <Image
                    style = { styles.imageModalStyle }
                    source = {{ uri: this.state.imageProperties.path }}
                    >

                      <Button light style = { styles.closeButtonStyle }>
                        <TouchableOpacity onPress = { () => { this.setModalVisible(false) } } >
                          <Icon name = 'close'/>
                        </TouchableOpacity>
                      </Button>

                      <Button light style = { styles.buttonStyle }>
                        <TouchableOpacity onPress = { () => { this.showAlert() } } >
                          <Icon name = 'create'  />
                        </TouchableOpacity>
                      </Button>

                    </Image>

                </View>

          </Modal>

          <TouchableOpacity onPress = { () => { this.setModalVisible(true) } } >

            <View style = { styles.imageContainerStyle } >

              <Image
              style = { styles.imageStyle }
              source = {{ uri: this.state.imageProperties.path }}
              />

            </View>

          </TouchableOpacity>

        </View>

      </View>

    );
  }

  // for flipping modal visibility
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  // Displaying choices in alert box for selection
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

  // When Camera option is chosen
  selectFromCamera(){

    console.log( FILE_NAME + "In selectFromCamera method");

    ImagePicker.openCamera({
      width: Dimensions.get('window').height,
      height: Dimensions.get('window').height,
      cropping: true,
      includeBase64: true
      }).then(image => {
      this.setState({ imageProperties: image, modalVisible: false });
    });

  }

  // When Gallery option is chosen
  selectFromGallery(){

    console.log( FILE_NAME + "In selectFromGallery method");

    ImagePicker.openPicker({
      width: Dimensions.get('window').height,
      height: Dimensions.get('window').height,
      includeBase64: true,
      cropping: true
      }).then(image => {
      console.log(image);
      this.setState({ imageProperties: image, modalVisible: false });
    });

  }

}

export default ProfilePic;
