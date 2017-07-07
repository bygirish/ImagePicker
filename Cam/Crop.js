import React, { Component } from 'react';
import { Text, Dimensions, View, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Crop extends Component {

  constructor(props){
    super(props);
    console.log("Image Props", props);

    this.state = {
      cropPath: this.props.imagePath
    };

  }

  cropIt(){

      console.log('Nice Click');

      ImagePicker.openCropper({
        path:  this.state.cropPath,
        width: 200,
        height: 200
        }).then(image => {
        Actions.DisplayPic(image.path);
        console.log(image);
      })
      .catch(err => {
        console.log("user cancelled cropping");
      });

  }

  render() {

   return (
     <View>
     <View style = {{ alignItems: 'center', marginTop: 50 }}>

     <Image
      style = { styles.ImagePreview }
      source = {{ uri: this.state.cropPath }}
      />

      </View>

      <Icon
      name = 'crop'
      style = { styles.cropStyle }
      onPress = { () => { this.cropIt() }}
      />

      </View>

   ) ;

  }

}

const styles = {

  ImagePreview: {
   height: Dimensions.get('window').height * 0.7,
   width: Dimensions.get('window').width * 0.7
  },

  cropStyle: {
    marginTop: 20,
    color: '#000',
    fontSize: 40,
    alignSelf: "center"
  },

}

export default Crop;
