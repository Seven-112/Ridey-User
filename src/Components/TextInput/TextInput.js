import React from 'react';
import PropTypes from 'prop-types';
import { TextInput as RNTextInput, View } from 'react-native';

import { Theme } from '../../Constants';

// Styles
import styles from './TextInput.Styles';

/**
 * TextInput.
 *
 * The TextInput UI component.
 *
 * @param {string} keyboardType - The keyboard type.
 * @param {string} placeholder - The placeholder text.
 * @param {bool} secureTextEntry - Defines if its secure text entry.
 * @param {func} setText - Text update function.
 * @param {object} style - Context style.
 * @param {string} text - The text input text.
 *
 * @returns {React.ReactElement} - React element.
 *
 * @example
 * <TextInput />
 */
const TextInput = ({ keyboardType, placeholder, secureTextEntry, setText, style, text, testID, ...props }) => (
  <View style={[styles.container, style]}>
    <RNTextInput
      clearButtonMode={'unless-editing'}
      keyboardType={keyboardType || 'default'}
      style={styles.textInput}
      onChangeText={setText}
      placeholder={placeholder}
      placeholderTextColor={Theme.COLORS.SUBTITLE_BLACK}
      secureTextEntry={secureTextEntry}
      value={text}
      testID={testID}
      {...props}
    />
  </View>
);

TextInput.propTypes = {
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  setText: PropTypes.func,
  style: PropTypes.object,
  text: PropTypes.string,
  testID: PropTypes.string,
};

export default TextInput;
