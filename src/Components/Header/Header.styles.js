import { StyleSheet } from 'react-native';

import { Theme } from '../../Constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Theme.COLORS.WHITE,
    flexDirection: 'row',
    height: Theme.LAYOUT.headerHeight,
    justifyContent: 'space-between',
    width: '100%',
    zIndex: Theme.LAYOUT.zHeader,
  },
  elevationAndroid: {
    borderBottomColor: Theme.COLORS.TRANSPARENT_LIGHT_GREY,
    borderBottomWidth: 1,
  },
  elevationIOS: {
    shadowColor: Theme.COLORS.BLACK,
    shadowOffset: {
      height: 1.5,
      width: 0,
    },
    shadowOpacity: 0.06,
    shadowRadius: 0.0,
  },
  floatingHeader: {
    position: 'absolute',
    marginTop: Theme.LAYOUT.statusBarHeight,
  },
  headerContainer: {
    alignItems: 'center',
    height: Theme.LAYOUT.headerHeight,
    padding: Theme.LAYOUT.baseSpacing,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: Theme.LAYOUT.zHeader,
  },
  leftContainer: {
    marginLeft: 15,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  leftButtons: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  rightButtons: {
    flexDirection: 'row',
    marginRight: 15,
  },
  rightContainer: {
    marginRight: 15,
    alignItems: 'flex-end',
  },
  titleText: {
    fontSize: 18,
  },
  titleView: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    flex: 1,
    paddingLeft: Theme.LAYOUT.baseSpacing / 2,
    paddingRight: Theme.LAYOUT.baseSpacing / 2,
    zIndex: -1,
  },
  titleViewAbsolute: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    left: Theme.LAYOUT.window.width * 0.2,
    position: 'absolute',
    top: 0,
    width: Theme.LAYOUT.window.width * 0.58,
    zIndex: -1,
  },
});

export default styles;
