import { Dimensions } from 'react-native';

export default styles = {

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
   width: 200,
   borderRadius: 30

  },

  imageModalStyle: {
   height: Dimensions.get('window').width * 0.9,
   width: Dimensions.get('window').width * 0.9,
  },

  viewStyle: {
   height: 200,
   width: 200,
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

  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },

  modalContainerStyle: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

};
