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
      trashVisible: false
    };

    this.state = this.initialState;
  }

  render() {

    var trashIcon;
    if(this.state.imageProperties.path != "unknown"){
      trashIcon =
      <TouchableOpacity onPress = { () => { this.showAlert() } } >
        <Icon name = 'trash' style={{color: 'white'}} />
      </TouchableOpacity> ;
    }
    else{
      trashIcon = <Text>    </Text> ;
    }

    return (

      <View style = { styles.containerStyle }>

        <View style = { styles.viewStyle }>

          <Modal
            animationType = { "none" }
            transparent = { true }
            visible = { this.state.modalVisible }
            onRequestClose = { () => { this.setModalVisible(false) } }
            >

              <View style = { styles.modalContainerStyle } >


                  <View style={{position: 'absolute', top: 20, flexDirection: 'row'}}>

                      <View style={{marginRight: Dimensions.get('window').width * 0.45}}>
                        <TouchableOpacity onPress = { () => { this.setModalVisible(false) }} >
                          <Icon name = 'arrow-back' style={{color: 'white'}} />
                        </TouchableOpacity>
                      </View>

                      <View style={{marginRight: Dimensions.get('window').width * 0.1}} >
                        {trashIcon}
                      </View>

                      <View style={{marginRight: Dimensions.get('window').width * 0.1}}>
                        <TouchableOpacity onPress = { () => { this.selectFromGallery() } } >
                          <Icon name = 'images' style={{color: 'white'}} />
                        </TouchableOpacity>
                      </View>

                      <View>
                        <TouchableOpacity onPress = { () => { this.selectFromCamera() } } >
                          <Icon name = 'camera' style={{color: 'white'}} />
                        </TouchableOpacity>
                      </View>



                  </View>

                  <Image
                  style = { styles.imageModalStyle }
                  source = {{ uri: this.state.imageProperties.path }}
                  />

              </View>

          </Modal>

          <TouchableOpacity onPress = { () => { this.setModalVisible(true) }} >

            <Image
              style = { styles.imageStyle }
              source = {{ uri: this.state.imageProperties.path }}
              />

          </TouchableOpacity>

        </View>

      </View>

    );
  }

  showAlert(){
  Alert.alert(
  '',
  'Remove Profile Photo ?',
  [
    {text: 'CANCEL', style: 'cancel'},
    {text: 'REMOVE', onPress: () => { this.setState(this.initialState) } },
  ],
  { cancelable: false }
  )
  }

  // for flipping modal visibility
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
      console.log("imageProperties from Camera - ", image);
      this.setState({ imageProperties: image, modalVisible: false});
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
      console.log("imageProperties from Gallery - ", image);
      this.setState({ imageProperties: image, modalVisible: false});
    });

  }

}

export default ProfilePic;
