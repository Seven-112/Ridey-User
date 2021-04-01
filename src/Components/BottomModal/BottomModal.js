import React from 'react';
import PropTypes from 'prop-types';
import { Modal, View } from 'react-native';

import ModalHeader from '../ModalHeader';

// Styles
import styles from './BottomModal.styles';

/**
 * BottomModal.
 *
 * The BottomModal UI component.
 *
 * @param {node} children - Component children node.
 * @param {bool} isVisible - Defines if the component is visible.
 * @param {object} rightHeaderComponent - Right header buttons.
 * @param {func} setModalVisible - Function to set the component visible.
 * @param {string} title - The modal title.
 *
 * @returns {React.ReactElement} - React element.
 *
 * @example
 * <BottomModal />
 */
const BottomModal = ({ children, isVisible = false, rightHeaderComponent, setModalVisible, title }) => {
  const closeModal = () => setModalVisible(false);

  return !isVisible ? null : (
    <Modal animationType="slide" onRequestClose={() => {}} transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <ModalHeader closeModal={closeModal} rightButtons={rightHeaderComponent} testID={'modalHeader'} title={title} />
          {children}
        </View>
      </View>
    </Modal>
  );
};

BottomModal.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool.isRequired,
  rightHeaderComponent: PropTypes.object,
  setModalVisible: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default BottomModal;
