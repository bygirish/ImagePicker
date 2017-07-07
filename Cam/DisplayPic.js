import React, { Component } from 'react';
import { Text, Dimensions, View, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Button, Icon } from 'native-base';

class DisplayPic extends Component {

  constructor(props){
    super(props);
    console.log("In DisplayPic : Image Props", props);
  }

  render() {

   return (

     <View style = {{ alignItems: 'center', marginTop: 50 }}>

     <Text style={{ color: "#22A7F0", fontSize: 20, fontWeight: 'bold', marginBottom: 20}}> Nice Pic :) {'\n\n'} Looking Cool.. </Text>

     <Image
      style = { styles.ImagePreview }
      source = {{ uri: this.props.data }}
      />
      </View>

   ) ;

  }

}

const styles = {

  ImagePreview: {
   height: 50,
   width: 50
  },

}

export default DisplayPic;
