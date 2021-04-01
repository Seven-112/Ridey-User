import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        // justifyContent: 'flex-end'

    },
    carContainer: {
        marginHorizontal: 20,
        height: 60,
        backgroundColor: COLORS.WHITE,
        flexDirection: 'row',
        width: '90%',
        marginVertical: 5
    },
    carImage: {
        width: 60,
        height: 50,
        alignSelf: 'center'
    },
    chatContainer: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.TRANSPARENT_MEDIUM_GREY,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: COLORS.TRANSPARENT,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    callContainer: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.TRANSPARENT_MEDIUM_GREY,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: COLORS.TRANSPARENT,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.BORDER_GRAY,
        width: '80%',
        marginHorizontal: 30
    },
    icons: {
        width: 20,
        height: 20
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    textContentContainer: {
        width: '80%',
        marginHorizontal: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textContainer: {
        justifyContent: "center",
        width: '30%',
    },
    textInput: {
        width: '80%',
        height: 35,
        marginHorizontal: 5,
        fontSize: 15
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        width: '90%',
        height: '35%',
        marginHorizontal: 20,
        marginBottom: 20,
        backgroundColor: COLORS.WHITE,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.TRANSPARENT,
        overflow: 'hidden'
    },
    locationContainer: {
        height: 40,
        width: 40,
        backgroundColor: COLORS.PALE_GREY,
        position: "absolute",
        bottom: '12%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        right: 30
    },
    headerBottom: {
        height: '20%',
        backgroundColor: COLORS.SECONDARY_GREY,
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 16,
        color: COLORS.SECONDARY_BLACK,
        fontWeight: "700"
    },
    bottomContent: {
        height: '55%',
    },
    buttonContainer: {
        height: '14%',
        backgroundColor: COLORS.SECONDARY_ORANGE,
        marginHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    marker: {
        width: 50,
        height: 50,
    },
    mapPin: {
        width: 25,
        height: 25
    },
    markerSource: {
        height: 30,
        width: 30,
    },
    profileImageContainer: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 1,
        overflow: 'hidden',
        borderColor: COLORS.WHITE,
        marginHorizontal: 10
    },
    profileContent: {
        width: '50%',
    },
    pointContainer: {
        // backgroundColor:'red',
        marginHorizontal: 20
    },
    locationShowContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    }
});
export default styles;