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
  profileContainer: {
    flex: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    width: window.width,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 10
  },
  signInContainer: {
    flex: 10,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    width: window.width,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 10
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
  colorCodeValues: {
    width: window.width / 2.5
  },
  colorCodeButtonSection: {
    display: 'flex',
    flexDirection: 'row'
  },
  colorCodeSectionText: {
    fontSize: 16,
    color: '#ffffff',
    marginLeft: 10
  },
  colorCodeSectionTextValue: {
    fontSize: 16,
    color: '#ffffff'
  },
  btn: {
    borderRadius: 4,
    paddingTop: 8,
    paddingLeft: 10,
    paddingBottom: 8,
    paddingRight: 10
  },
  topBtn: {
    marginBottom: 10
  },
  signOutBtn: {
    backgroundColor: '#bababa'
  },
  signInSignUpBtn: {
    backgroundColor: '#1db954'
  },
  colorCodeSectionSaveText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center'
  },
  signInform: {
    marginTop: 30
  },
  formMessage: {
    marginTop: 10,
    color: '#4980eb',
    textAlign: 'center'
  },

  // Profile section
  profileName: {
    fontSize: 20,
    marginBottom: 20,
    color: '#353535'
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
    marginBottom: 5,
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