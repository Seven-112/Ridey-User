import { StyleSheet } from 'react-native';

import { Theme } from '../../Constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Theme.COLORS.TRANSPARENT_BLACK,
    height: Theme.LAYOUT.window.height,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: Theme.LAYOUT.window.width,
    zIndex: Theme.LAYOUT.zLoadingView,
  },
});

export default styles;
