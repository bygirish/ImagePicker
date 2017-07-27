import { Dimensions } from 'react-native';

export default styles = {

  containerStyle: {
    flex: 1,
    backgroundColor: '#E4F1FE',
    paddingLeft: 20,
    paddingTop: 40
  },

  textStyle: {
    color: "#67809F",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },

  imageStyle: {
   height: 70,
   width: 70,
   borderRadius: 30

  },

  imageModalStyle: {
   height: Dimensions.get('window').width,
   width: Dimensions.get('window').width,
  },

  viewStyle: {
   height: 70,
   width: 70,
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
