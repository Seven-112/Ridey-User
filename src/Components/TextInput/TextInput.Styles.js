import { StyleSheet } from 'react-native';

import { Theme } from '../../Constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: Theme.COLORS.TRANSPARENT_LIGHT_GREY,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    width: '90%',
  },
  textInput: {
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15,
    width: '90%',
  },
});

export default styles;
