import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Button.styles';

const Button = ({ cta=false,color, disabled, text, plainText, onPress, style }) => (
    <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[
            styles.container,
            !plainText && styles.buttonContainer,
            plainText && styles.plainTextContainer,
            color && { backgroundColor: color },
            style
        ]}
    >
        <Text
            minimumFontScale={0.7}
            numberOfLines={1}
            style={[
                plainText && styles.plainTextButton,
                !plainText && styles.buttonText,
                cta && styles.cta,
                disabled && styles.mutedText
            ]}
        >
            {text}
        </Text>

    </TouchableOpacity>
);
Button.propTypes = {
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    plainText: PropTypes.bool,
    style: PropTypes.object,
    text: PropTypes.string.isRequired,

};

export default Button;