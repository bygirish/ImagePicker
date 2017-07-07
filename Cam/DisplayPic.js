import React, { Component } from 'react';
import { Text, Dimensions, View, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Button, Icon } from 'native-base';

class DisplayPic extends Component {

  constructor(props){
    super(props);
  }

  render() {

  const { containerStyle, textStyle, imageStyle } = styles;

    return (

      <View style = { containerStyle }>

        <Text style={ textStyle }> Nice Pic :) </Text>

        <Image
        style = { imageStyle }
        source = {{ uri: this.props.data }}
        />

      </View>

    ) ;
  }
}

const styles = {

  containerStyle: {
    flex: 1,
    backgroundColor: '#E4F1FE',
    alignItems: 'center',
    paddingTop: 50
  },

  textStyle: {
    color: "#67809F",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },

  imageStyle: {
   height: 200,
   width: 200
  }

};

export default DisplayPic;
