import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: window.width
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
    fontSize: 20,
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
    backgroundColor: '#1db954',
    marginLeft: 10
  },
  colorCodeSectionColors: {
    backgroundColor: '#4980eb'
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
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
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
  }
});

export default styles;