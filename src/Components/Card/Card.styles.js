import { StyleSheet } from 'react-native';
import { Theme } from '../../Constants'

const { width } = Theme.LAYOUT.window;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.COLORS.WHITE,
        alignItems: "center",
        justifyContent: 'center',
        width: width - 2 * Theme.LAYOUT.baseSpacing,
        padding: Theme.LAYOUT.baseSpacing,
        marginLeft: Theme.LAYOUT.baseSpacing,
        marginRight: Theme.LAYOUT.baseSpacing,
        marginVertical: Theme.LAYOUT.baseSpacing / 2,
        minHeight: Theme.LAYOUT.rowHeight,
        borderRadius: 16,
        borderColor: Theme.COLORS.TRANSPARENT_LIGHT_GREY,
        shadowColor: Theme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 0,
        elevation: 3,
    },
    small: {
        width: 175,
        minWidth: 60,
    },
    medium: {
        width: 330,
        minHeight: 160
    },
    large: {
        minHeight: 200
    }
});

export default styles;