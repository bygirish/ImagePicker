import React, { Component } from 'react';
import { Text, Dimensions } from 'react-native';
import Camera from 'react-native-camera';
import { Button, Icon } from 'native-base';

class Snapshot extends Component {

  takePicture() {
     this.camera.capture()
       .then((data) => console.log(data))
       .catch(err => console.error(err));
   }

render(){
  console.log('Take Snaps with Camera');
  return(
    <Camera
           ref={(cam) => {
             this.camera = cam;
           }}
           style={styles.preview}
           type = 'front'
           aspect={Camera.constants.Aspect.fill}>
           <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
            <Icon rounded name = 'camera' />
           </Text>
    </Camera>
  );
 }
}

const styles = {

  preview: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
   height: Dimensions.get('window').height,
   width: Dimensions.get('window').width
  },

  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }

};

export default Snapshot;
