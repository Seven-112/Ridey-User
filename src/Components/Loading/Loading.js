import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Theme } from '../../Constants';

// Styles
import styles from './Loading.styles';

/**
 * LoadingView.
 *
 * The LoadingView UI component.
 *
 * @param {object} props - Component Props.
 *
 * @returns {React.ReactElement} - React element.
 *
 * @example
 * <LoadingView />
 */
const LoadingView = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={Theme.COLORS.WHITE} />
  </View>
);

LoadingView.propTypes = {};

export default LoadingView;
