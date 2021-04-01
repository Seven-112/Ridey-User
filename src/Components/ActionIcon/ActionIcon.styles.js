import { StyleSheet } from 'react-native';

import { Theme } from '../../Constants';

const styles = StyleSheet.create({
  container: {
    borderRadius: Theme.LAYOUT.roundedIcon / 2,
    alignItems: 'center',
    height: Theme.LAYOUT.roundedIcon,
    justifyContent: 'center',
    width: Theme.LAYOUT.roundedIcon,
    backgroundColor: Theme.COLORS.BACKGROUND,
  },
});

export default styles;
