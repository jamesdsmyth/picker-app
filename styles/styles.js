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
    borderTopWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#ffffff'
  },
  colorCodeSectionText: {
    fontSize: 20
  },
  btn: {
    borderRadius: 4,
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingRight: 10
  },
  colorCodeSectionSave: {
    backgroundColor: '#1db954'
  },
  colorCodeSectionColors: {
    backgroundColor: '#4980eb'
  },
  colorCodeSectionSaveText: {
    fontSize: 20,
    color: '#ffffff'
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
    backgroundColor: '#ffffff',
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#cccccc'
  },
  savedColor: {
    flex: 1,
    width: window.width
  }
});

export default styles;