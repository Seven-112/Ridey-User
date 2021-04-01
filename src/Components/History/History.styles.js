import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginBottom: 20
    },
    contentContainer: {
        flex: 1,
        marginTop: '-24%'
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: COLORS.WHITE
    },
    headerContainer: {
        height: '20%',
        backgroundColor: COLORS.SECONDARY_ORANGE,
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 25,
        marginHorizontal: 20,
        fontWeight: '700',
        color: COLORS.SECONDARY_BLACK
    },
    itemContainer: {
        height: 150,
        backgroundColor: COLORS.SECONDARY_GREY,
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: COLORS.TRANSPARENT,
        shadowColor: COLORS.BLACK,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 0,
        elevation: 3,
    },
    locationContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        height: 30,
        marginVertical: 10
    },
    itemIcon: {
        width: 20,
        height: 20
    },
    itemText: {
        fontSize: 15,
        color: COLORS.SECONDARY_BLACK,
        marginHorizontal: 10
    },
    itemTextCompleted: {
        fontSize: 15,
        color: 'green',
        marginHorizontal: 10,
        fontWeight: '600'
    },
    itemTextGoing: {
        fontSize: 15,
        color: COLORS.SECONDARY_ORANGE,
        marginHorizontal: 10,
        fontWeight: '600'
    },
    itemTextCancelled: {
        fontSize: 15,
        color: 'red',
        marginHorizontal: 10,
        fontWeight: '600'
    },
    priceContainer: {
        height: 40,
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    scrollContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    menu: {
        width: 25,
        height: 25
    },
    menuContainer: {
        position: 'absolute',
        width: 50,
        height: 50,
        top: '20%',
        margin: 10,
        borderRadius: 25,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: COLORS.TRANSPARENT,
        justifyContent: "center",
        alignItems: 'center'
    }
});
export default styles;