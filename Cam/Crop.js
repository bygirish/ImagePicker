import React, { Component } from 'react';
import { Text, Dimensions, View, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Button, Icon } from 'native-base';

class Crop extends Component {

  constructor(props){
    super(props);
   console.log("Image Props", props);
  }

  render() {

   return (
     <View style = {{alignItems: 'center', marginTop: 50}}>
     <Image
      style = { styles.ImagePreview }
      source = {{ uri: this.props.imagePath }}
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

}

export default Crop;
