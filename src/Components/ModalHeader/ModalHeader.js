import React from 'react';
import PropTypes from 'prop-types';
import { PanResponder, View } from 'react-native';

// Our components
import ActionIcon from '../ActionIcon';
import Text from '../Text';
import { Theme } from '../../Constants';

// Styles
import styles from './ModalHeader.styles';

/**
 * BottomModal Header.
 *
 * The modal's header component.
 *
 * @param {func} closeModal - Function to close the modal.
 * @param {object} rightButtons - Right header buttons.
 * @param {string} title - The modal title.
 *
 * @returns {React.ReactElement} - React element.
 *
 * @example
 * <Header />
 */
const ModalHeader = ({ closeModal, rightButtons, title }) => {
  const panResponder = React.useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderRelease: (_evt, gestureState) => {
        if (Math.floor(gestureState.dy) >= 30) {
          closeModal();
        }
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <View {...panResponder.panHandlers} style={styles.dragView} />
      <View style={styles.leftButtons}>
        {closeModal ? <ActionIcon close color={Theme.COLORS.ICONS} height={44} onPress={closeModal} /> : null}
      </View>
      <View style={styles.titleView}>
        <Text h3 testID={'modalTitle'}>
          {title}
        </Text>
      </View>
      <View style={styles.rightButtons} testID={'modalRightButtons'}>
        {rightButtons}
      </View>
    </View>
  );
};

ModalHeader.propTypes = {
  closeModal: PropTypes.func.isRequired,
  rightButtons: PropTypes.object,
  title: PropTypes.string,
};

export default ModalHeader;
