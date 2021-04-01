import { StyleSheet, Platform } from 'react-native';

import { Theme } from '../../Constants';

// TODO: Get correct spacing for iOS devices
const contentMarginTop = Platform.select({
  android: Theme.LAYOUT.statusBarHeight + 11,
  ios: 56,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.COLORS.TRANSPARENT,
  },
  contentContainer: {
    marginTop: contentMarginTop,
    flex: 1,
    width: '100%',
    backgroundColor: Theme.COLORS.WHITE,
    borderRadius: 15,
  },
  closeButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
