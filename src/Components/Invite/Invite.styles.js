import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: COLORS.PALE_GREY,

    },
    headerContainer: {
        height: '22%',
        backgroundColor: COLORS.SECONDARY_ORANGE,
        justifyContent: 'flex-end',
    },
    headerText: {
        fontSize: 30,
        marginHorizontal: 20,
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 10
    },
    searchInputContainer: {
        backgroundColor: COLORS.BORDER_GRAY,
        height: 45,
        marginHorizontal: 20,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.TRANSPARENT,
        borderRadius: 6
    },
    itemContainer: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.TRANSPARENT_LIGHT_GREY
    },
    itemText: {
        width: '70%',
        fontSize: 16
    },
    imageIcon: {
        height: 25,
        width: 25,
        marginHorizontal: 10
    },
    imageActionIcon: {
        height: 15,
        width: 15,
    },
    profileImage: {
        height: 45,
        width: 45,
        borderRadius: 22.5,
        borderWidth: 1,
        borderColor: COLORS.TRANSPARENT,
        marginHorizontal: 10
    },
    imageContainer: {
        height: 35,
        width: 35,
        borderWidth: 1,
        borderColor: COLORS.TRANSPARENT,
        borderRadius: 20,
        backgroundColor: COLORS.SECONDARY_ORANGE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        height: 35
    },
    menu: {
        width: 25,
        height: 25
    },
    menuContainer: {
        // position:'absolute',
        width: 50,
        height: 50,
        top: '18%',
        margin: 10,
        borderRadius: 25,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: COLORS.TRANSPARENT,
        justifyContent: "center",
        alignItems: 'center'
    },
    buttonContainer: {
        height: 45,
        backgroundColor: COLORS.SECONDARY_ORANGE,
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 20,
        justifyContent:"center",
        alignItems:'center',
        borderColor:COLORS.TRANSPARENT,
        marginHorizontal:20
    },
    buttonText:{
        fontSize:18,
        fontWeight:'500'
    }
})

export default styles;