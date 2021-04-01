import React from 'react';
import PropTypes from 'prop-types';
import { Platform, SafeAreaView, StatusBar, View } from 'react-native';

import LoadingView from '../Loading';

// Styles
import styles from './GlobalWrapper.styles';

/**
 * GlobalWrapper.
 *
 * The global view component.
 *
 * @param {node} children - The children components.
 * @param {node} header - The navigation bar component.
 * @param {bool} isLoading - Defines if the loading view appears.
 * @param {bool} showModalTop - Defines if the modal transparent view appears.
 *
 * @returns {React.ReactElement} - React element.
 *
 * @example
 * <GlobalWrapper />
 */
const GlobalWrapper = ({ children, header, isLoading, showModalTop }) => (
  <>
    {isLoading ? <LoadingView /> : null}
    <View style={showModalTop && styles.modalTopView} />
    <View style={styles.topContainer}>
      {Platform.OS === 'ios' ? <StatusBar barStyle={'dark-content'} /> : null}
      <SafeAreaView style={styles.safeContainer}>
        {header}
        <View style={styles.innerContainer}>{children}</View>
      </SafeAreaView>
    </View>
  </>
);

GlobalWrapper.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
};

export default GlobalWrapper;
