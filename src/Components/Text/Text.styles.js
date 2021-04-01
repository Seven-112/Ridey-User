import { StyleSheet, Platform } from 'react-native';

import { Theme } from '../../Constants';

const isAndroid = Platform.OS === 'android';

const styles = StyleSheet.create({
  centered: {
    textAlign: 'center',
  },
  h1: {
    fontSize: 32,
    fontWeight: isAndroid ? '700' : '900',
  },
  h2: {
    fontSize: 24,
    fontWeight: '700',
  },
  h3: {
    fontSize: 20,
    fontWeight: '700',
  },
  h4: {
    fontSize: 20,
    fontWeight: '500',
  },
  h5: {
    fontSize: 16,
    fontWeight: '600',
  },
  paragraph: {
    fontSize: 16,
    fontWeight: '400',
  },
  subParagraph: {
    fontSize: 14,
    fontWeight: '400',
  },
  bold: {
    fontWeight: '700',
  },
  semibold: {
    fontWeight: '600',
  },
  medium: {
    fontWeight: '500',
  },
  regular: {
    fontWeight: '400',
  },
  muted: {
    color: Theme.COLORS.ICONS,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default styles;
