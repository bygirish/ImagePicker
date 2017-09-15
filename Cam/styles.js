import { Dimensions } from 'react-native';

export default styles = {

  containerStyle: {
    flex: 1,
    backgroundColor: '#E4F1FE',
  },

  textStyle: {
    color: "#67809F",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },

  imageStyle: {
   height:  Dimensions.get('window').width * 0.8,
   width: Dimensions.get('window').width * 0.8,
   borderRadius: 20

  },

  imageModalStyle: {
   height: Dimensions.get('window').width,
   width: Dimensions.get('window').width,
  },

  viewStyle: {
     justifyContent: 'center',
     alignItems: 'center'
  },

  buttonStyle: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderRadius: 80,

  },

  closeButtonStyle: {
    position: 'absolute',
    right: 0,
    top: 0,
    borderRadius: 120,
  },

  modalContainerStyle: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

};
