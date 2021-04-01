import React from 'react';
import PropTypes from 'prop-types';
import {Text as RNText} from 'react-native';
import Animated  from 'react-native-reanimated';
import styles from './Text.styles';


const Text = ({
    animated = false,
    centered = false,
    style = null,
    h1 = false,
    h2 = false,
    h3 = false,
    h4 = false,
    h5 = false,
    paragraph = false,
    subParagraph = false,
    title = false,
    muted = false,
    children = null,
    ...rest
}) =>{
    const TextCmp = animated ? Animated.Text : RNText;
    return (
        <TextCmp
          adjustsFontSizeToFit
          minimumFontScale={0.7}
          style={[
            centered && styles.centered,
            h1 && styles.h1,
            h2 && styles.h2,
            h3 && styles.h3,
            h4 && styles.h4,
            h5 && styles.h5,
            paragraph && styles.paragraph,
            subParagraph && styles.subParagraph,
            title && styles.title,
            muted && styles.muted,
            style && style,
          ]}
          {...rest}
        >
          {children}
        </TextCmp>
      );

}

Text.propTypes = {
    centered: PropTypes.bool,
    children: PropTypes.any,
    style: PropTypes.any,
    h1: PropTypes.bool,
    h2: PropTypes.bool,
    h3: PropTypes.bool,
    h4: PropTypes.bool,
    h5: PropTypes.bool,
    muted: PropTypes.bool,
    paragraph: PropTypes.bool,
    subParagraph: PropTypes.bool,
    title: PropTypes.bool,
  };
  
  export default Text;
  