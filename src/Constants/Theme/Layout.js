import { Dimensions, Platform } from 'react-native';


const { width, height } = Dimensions.get('window');

const headerHeight = Platform.select({ android: 74, ios: 74, default: 74 });

export default {
    window: {
        width,
        height,
    },
    isSmallDevice: width < 375,
    headerHeight,
    mediumSpacing: 10,
    baseSpacing: 15,
    rowHeight: 60,
    largeRowHeight: 88,
    roundedIcon: 44,
    zHeader: 9996,
    zLoadingView: 9999,
    zModalContent: 9998,
    zModalTop: 9998,
};
