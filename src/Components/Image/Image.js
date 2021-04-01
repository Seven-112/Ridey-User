import React, { useState } from 'react';
import { View, Image as RNImage } from 'react-native';
import styles from './Image.styles';
import PropTypes from 'prop-types'

import FailedPlaceholder from '../../assets/images/failed-placeholder.png';
import LoadingPlaceholder from '../../assets/images/loading-placeholder.png';

const Image = ({ style, icon = false, round = false, ...attributes }) => {

    const { height, width } = style;
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasFailed, setHasFailed] = useState(false);

    return (
        <View>
            <RNImage
                {...attributes}
                onError={() => setHasFailed(true)}
                onLoad={() => setIsLoaded(true)}
                style={[
                    styles.baseStyling,
                    round && { borderRadius: height / 2 },
                    icon && styles.icon,
                    style
                ]}
            />
            {hasFailed && <RNImage
                source={FailedPlaceholder}
                style={[styles.placeholderImage,
                { width, height },
                styles.baseStyling,
                round && { borderRadius: height / 2 },
                icon && styles.icon
                ]}

            />}
            {!hasFailed && !isLoaded && <RNImage
                source={LoadingPlaceholder}
                style={[styles.placeholderImage,
                { width, height },
                styles.baseStyling,
                round && { borderRadius: height / 2 },
                icon && styles.icon
                ]}

            />}
        </View>
    )

}
Image.propTypes = {
    style: PropTypes.object,
    icon: PropTypes.bool,
    round: PropTypes.bool
};

export default Image;