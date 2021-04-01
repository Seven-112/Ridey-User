import { StyleSheet } from 'react-native';

import { Theme } from '../../Constants';

const styles = StyleSheet.create({
  closeButton: {
    borderRadius: 22,
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.COLORS.BACKGROUND,
  },
  container: {
    alignItems: 'center',
    backgroundColor: Theme.COLORS.TRANSPARENT,
    flexDirection: 'row',
    height: Theme.LAYOUT.headerHeight,
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 9998,
  },
  dragView: {
    backgroundColor: Theme.COLORS.TRANSPARENT,
    height: 20,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 9998,
  },
  leftButtons: {
    flexDirection: 'row',
    marginLeft: Theme.LAYOUT.baseSpacing,
    maxWidth: '30%',
  },
  rightButtons: {
    flexDirection: 'row',
    marginRight: Theme.LAYOUT.baseSpacing,
    maxWidth: '30%',
  },
  titleView: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: -1,
  },
});

export default styles;
