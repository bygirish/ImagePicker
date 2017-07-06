import React, { Component } from 'react';
import { Text, Dimensions, View, Image } from 'react-native';
import Camera from 'react-native-camera';
import { Button, Icon } from 'native-base';

class Snapshot extends Component {

  constructor(props){
    super(props);

    this.state = {
      path: null
    };
  }

  takePicture() {
     this.camera.capture()
       .then((data) => {
            console.log(data);
            this.setState({ path: data.path})
            }
       )
       .catch(err => console.error(err));
   }

  renderCamera() {
    console.log('Take Snaps with Camera');
    return(
      <Camera
             ref={(cam) => {
               this.camera = cam;
             }}
             style = { styles.Camerapreview }
             type = 'front'
             aspect = { Camera.constants.Aspect.fill }>
             <Text style = { styles.capture } onPress = { this.takePicture.bind(this) }>
             <Icon rounded name = 'camera' />
             </Text>
      </Camera>
    );
   }

   renderImage() {
   return (
     <View >
       <Image
          style = { styles.ImagePreview }
         source = {{ uri: this.state.path }}
       />
     </View>
   );
 }

 render() {
    return (
      <View style = { styles.container }>
        { this.state.path ? this.renderImage() : this.renderCamera() }
      </View>
    );
  }

}

const styles = {

  Camerapreview: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
   width: Dimensions.get('window').width
  },

  ImagePreview: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
   height: Dimensions.get('window').height * 0.7,
   width: Dimensions.get('window').width * 0.7
  },

  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 8,
    marginBottom: 10
  },

  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  cancel: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  }

};

export default Snapshot;
