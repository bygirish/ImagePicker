import React, { Component  } from 'react';
import { Text, View, Image, TouchableOpacity, Alert, Modal, Dimensions } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Button, Icon } from 'native-base';
import styles from './styles';

class ProfilePic extends Component {

  constructor(props){
    super(props);

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

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
      width: Dimensions.get('window').height,
      height: Dimensions.get('window').height,
      cropping: true,
      includeBase64: true
      }).then(image => {
      this.setState({ imageProperties: image, modalVisible: false });
    });

  }

  selectFromGallery(){

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
