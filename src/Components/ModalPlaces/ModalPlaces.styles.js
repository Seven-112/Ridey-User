import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color'

const styles = StyleSheet.create({
    bottomView: {
        marginTop: '30%',
        backgroundColor: COLORS.WHITE,
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: COLORS.TRANSPARENT,
        shadowColor: COLORS.BLACK,
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,

    },
    container: {
        flex: 1,
        backgroundColor: COLORS.TRANSPARENT_MEDIUM_GREY,
       
    },
    contentContainer: {
        borderColor: COLORS.TRANSPARENT,
        shadowColor: COLORS.BLACK,
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        backgroundColor:COLORS.WHITE,
        flex:1
    },
    divider: {
        height: 10,
        backgroundColor: COLORS.SECONDARY_GREY
    },
    markerView: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.TRANSPARENT_LIGHT_YELLOW,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: COLORS.TRANSPARENT,
    },
    marker: {
        width: 60,
        height: 60
    },
    pickUpContainer: {
        marginTop: 10,
        marginHorizontal: 20
    },

    leftImageContainer: {
        flexDirection: 'row',

    },
    rightImageContainer: {
        flexDirection: 'row'
    },
    locationHeader: {
        fontSize: 16,
        color: COLORS.DISABLED_TEXT_GREY,
        marginHorizontal: 10,
        fontWeight: '600'
    },
    textLocation: {
        fontSize: 14,
        color: COLORS.BLACK,
        marginHorizontal: 10,
        marginVertical: 5,
        width: "80%",
    },
    textLocationPickUp: {
        fontSize: 14,
        color: COLORS.BLACK,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    topbar: {
        borderWidth: 2,
        width: '15%',
        height: 1,
        alignSelf: 'center',
        margin: 10,
        borderRadius: 5,
        borderColor: COLORS.BORDER_GRAY

    },
    headerPopular: {
        fontSize: 15,
        textAlign: "left",
        marginHorizontal: 12,
        marginVertical: 20,
        color: COLORS.BODY_MUTED
    },
    dropOffContainerDivider: {
        width: '100%',
        height: 1,
        borderWidth: 0.3,
        borderColor: COLORS.TRANSPARENT_LIGHT_GREY,
        marginVertical: 10
    },
    mapImageContainer: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: COLORS.SECONDARY_ORANGE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listContainer:{
        marginHorizontal:10,
    },
    listItem:{
        height:45,
        borderBottomWidth:1,
        borderBottomColor:COLORS.TRANSPARENT_LIGHT_GREY,
        flexDirection:'row',
        alignItems:'center'
    },
    locationInputContainer:{
        height:120,
        width:'80%',
        fontSize: 14,
        color: COLORS.BLACK,
        marginHorizontal: 10,
        marginVertical: 20,
        backgroundColor:'red'
    },
    textLocationPickUpAutoComplete: {
        fontSize: 14,
        color: COLORS.BLACK,
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor:'red',
        width:'100%',
      
    },
});
export default styles;