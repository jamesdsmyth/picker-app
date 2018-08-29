import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: window.width,
  },
  signInContainer: {
    flex: 10,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    width: window.width,
    paddingLeft: 10,
    paddingRight: 10
  },
  colorCodeSection: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    bottom: 0,
    left: 0,
    width: window.width,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  colorCodeButtonSection: {
    display: 'flex',
    flexDirection: 'row'
  },
  colorCodeSectionText: {
    fontSize: 15,
    color: '#ffffff'
  },
  btn: {
    borderRadius: 4,
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingRight: 10
  },
  colorCodeSectionSave: {
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
    // borderColor:  '#1db954',
    // borderWidth: 2,
    // marginLeft: 12
  },
  colorCodeSectionColors: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    // backgroundColor: '#4980eb'
  },
  signInSignUpBtn: {
    backgroundColor: '#1db954'
  },
  colorCodeSectionSaveText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center'
  },
  formMessage: {
    marginTop: 10,
    color: '#4980eb',
    textAlign: 'center'
  },

  // ColorPicker component
  colorPickerContainer: {
    flex: 1,
    width: window.width
  },
  colorPicker: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#cccccc'
  },
  savedColor: {
    flex: 1,
    width: window.width,
    paddingTop: 70,
    paddingBottom: 5,
    paddingLeft: 5,
    // justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  notification: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 50,
    width: window.width,
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  savedColorsTitle: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 5,
    color: '#4ec965'
  },
  savedColorsSubtitle: {
    fontSize: 20,
    marginBottom: 10,
    color: '#4f4f4f'
  }
});

export default styles;