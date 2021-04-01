import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  containerImageFirst: {
    justifyContent: 'flex-start',
  },
  containerTextFirst: {
    justifyContent: 'flex-end',
  },
  headerTextFirst: {
    marginRight: 10,
  },
  headerText: {
    marginLeft: 10,
  },
  imageView: {
    height: 30,
    width: 30,
  },
  imageViewHeader: {
    height: 44,
    width: 44,
  },
  textFirst: {
    marginRight: 5,
  },
  text: {
    marginLeft: 5,
  },
});

export default styles;
