import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Card.styles';


const Card = ({ children, text, style, onPress,small=false,medium=false,large=false }) => (
    <TouchableOpacity
        // This helps when scrolling to not display the "press in" opacity change
        delayPressIn={50}
        disabled={typeof onPress !== 'function'}
        onPress={onPress}
        style={[
            styles.container,
            small && styles.small,
            medium && styles.medium,
            large && styles.large,
            style
        ]}
    >
        {children || <Text>{text}</Text>}
    </TouchableOpacity>
);
Card.PropTypes = {
    prop: PropTypes.node
};

export default Card