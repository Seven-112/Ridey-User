import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';


const styles = StyleSheet.create({
    bottomView: {
        position: 'relative',
        height: 250,
        backgroundColor: COLORS.WHITE,
        bottom: 0,
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
    buttonContainer:{
        height:45,
        backgroundColor:COLORS.SECONDARY_ORANGE,
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        borderRadius:10
    },
    buttonText:{
        fontSize:16,
        fontWeight:'600'
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end'

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    currentLocation: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: COLORS.WHITE,
        margin: 10,
        height: 40,
        width: 40,
        position: 'absolute',
        top: '65%',
        right: 0,
        borderRadius:20,
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
    profileContainer:{
        backgroundColor:COLORS.WHITE,
        position:'absolute',
        width:50,
        height:50,
        top:'5%',
        margin:10,
        borderRadius:25,
        overflow:'hidden',
        borderWidth:1,
        borderColor:COLORS.WHITE,
        justifyContent:"center",
        alignItems:'center'
        
    },
    menu:{
        width:25,
        height:25
    },
    leftImageContainer: {
        flexDirection: 'row'
    },
    rightImageContainer: {
        flexDirection: 'row'
    },
    locationHeader: {
        fontSize: 16,
        color: COLORS.DISABLED_TEXT_GREY,
        marginHorizontal: 5,
        fontWeight: '600'
    },
    textLocation: {
        fontSize: 14,
        color: COLORS.BLACK,
        marginHorizontal: 5,
        marginVertical: 5
    },
    topbar: {
        borderWidth: 2,
        width: '15%',
        height: 1,
        alignSelf: 'center',
        margin: 10,
        borderRadius: 5,
        backgroundColor: COLORS.BORDER_GRAY,
        borderColor: COLORS.BORDER_GRAY

    }
});

export default styles;