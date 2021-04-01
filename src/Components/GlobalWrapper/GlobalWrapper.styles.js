import { Platform, StatusBar, StyleSheet } from 'react-native';

import { Theme } from '../../Constants';

const styles = StyleSheet.create({
  innerContainer: {
    flexGrow: 1,
  },
  modalTopView: {
    backgroundColor: Theme.COLORS.TRANSPARENT_BLACK,
    height: Theme.LAYOUT.window.height,
    position: 'absolute',
    top: 0,
    width: Theme.LAYOUT.window.width,
    zIndex: Theme.LAYOUT.zModalTop,
  },
  safeContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  topContainer: {
    backgroundColor: Theme.COLORS.WHITE,
    flex: 1,
  },
});

export default styles;
