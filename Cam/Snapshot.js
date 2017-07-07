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

             <Icon
             name = 'camera'
             style = { styles.capture }
             onPress = { this.takePicture.bind(this) }
             />

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
        <Icon
          name = 'close'
          style = { styles.cancel }
          onPress = { () => this.setState({ path: null }) }
        />
        <Icon
        name = 'crop'
        style = { styles.cropStyle }
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
   height: Dimensions.get('window').height,
   width: Dimensions.get('window').width
  },

  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  capture: {
    marginBottom: 10,
    color: "white",
    fontSize: 40
  },

  cancel: {
    position: 'absolute',
    bottom: 10,
    right: 70,
    color: '#FFF',
    fontSize: 40
  },

  cropStyle: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    color: '#FFF',
    fontSize: 40
  }

};

export default Snapshot;
