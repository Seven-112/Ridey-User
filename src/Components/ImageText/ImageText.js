import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Image from '../Image';
import Text from '../Text';

// Styles
import styles from './ImageText.styles';

const renderImage = (isHeader, imagePath) => (
  <Image
    round
    resizeMode={'contain'}
    style={isHeader ? styles.imageViewHeader : styles.imageView}
    source={{
      uri: imagePath,
    }}
    testID={'image'}
  />
);

const renderText = (isHeader, text, textFirst) => {
  if (isHeader) {
    return (
      <Text h2 numberOfLines={1} style={textFirst ? styles.headerTextFirst : styles.headerText} testID={'headerText'}>
        {text}
      </Text>
    );
  }

  return (
    <Text subParagraph numberOfLines={2} style={textFirst ? styles.textFirst : styles.text} testID={'text'}>
      {text}
    </Text>
  );
};

/**
 * ImageText.
 *
 * The ImageText UI component.
 *
 * @param {string} imagePath - The image uri path.
 * @param {bool} isHeader - Defines text and size of an header.
 * @param {object} style - Context style.
 * @param {string} text - The text.
 * @param {bool} textFirst - Defines if text comes first.
 *
 * @returns {React.ReactElement} - React element.
 *
 * @example
 * <ImageText />
 */
const ImageText = ({ imagePath, isHeader, style, text, textFirst }) => (
  <View style={[styles.container, style]}>
    {textFirst ? (
      <>
        {renderText(isHeader, text, textFirst)}
        {renderImage(isHeader, imagePath)}
      </>
    ) : (
      <>
        {renderImage(isHeader, imagePath)}
        {renderText(isHeader, text, textFirst)}
      </>
    )}
  </View>
);

ImageText.propTypes = {
  imagePath: PropTypes.string,
  isHeader: PropTypes.bool,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  textFirst: PropTypes.bool,
};

export default ImageText;
