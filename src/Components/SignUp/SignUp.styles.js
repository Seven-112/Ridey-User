import { StyleSheet } from 'react-native';
import { Theme } from '../../Constants';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    button: {
        width: '90%',
        marginHorizontal: 20,
        fontSize: 20,
        backgroundColor:COLORS.SECONDARY_ORANGE,
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    buttonText:{
        fontSize:18,
        fontWeight:'500'
    },
    bottomContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '5%'
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
    },
    centerContainer: {
        backgroundColor: COLORS.SECONDARY_GREY,
        marginTop: -59,
        marginHorizontal: 10,
        borderRadius: 10,
        height: '55%'
    },
    contentContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.LIGHT_GREY,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontWeight: '800',
        fontSize: 20,
        color: COLORS.SECONDARY_ORANGE
    },
    loginbutton: {
        color: COLORS.SECONDARY_ORANGE,
        fontSize: 14,
        fontWeight: '600',
        marginHorizontal: 2
    },
    profileImageContainer: {

        // justifyContent: 'center',
        // alignItems: 'center',
        height: 60,
        width: 60,
        marginBottom: 30,
        // backgroundColor: 'red',
        borderRadius: 30,
        borderColor: COLORS.BODY_MUTED,
        borderWidth:1,
        overflow:'visible'
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow:'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    input: {
        backgroundColor: COLORS.TRANSPARENT_LIGHT_GREY,
        marginHorizontal: 20,
        borderWidth: 0.7,
        borderColor: COLORS.BORDER_GRAY,
        marginBottom: 10

    },
    topContainer: {
        height: '40%',
        backgroundColor: COLORS.WHITE,
        borderBottomColor: COLORS.TRANSPARENT_LIGHT_GREY,
        shadowColor: COLORS.BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 3,
    },
    pickerView:{
        // backgroundColor:'red',
        height:70,
        width:120,
        marginLeft:'40%',
        marginTop:-20,
        marginBottom:10
    },
    pickerButton:{
        backgroundColor:COLORS.SECONDARY_ORANGE,
        borderWidth:1,
        height:30,
        width:100,
        marginTop:2,
        marginHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderColor:COLORS.TRANSPARENT
    }

})
export default styles;