import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    buttonContainer:{
        height: 50,
        backgroundColor: COLORS.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomColor:COLORS.LIGHT_GREY,
        borderBottomWidth:1,
        marginTop:50
    },
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: COLORS.SECONDARY_GREY,
    },
    headerContainer: {
        height: '18%',
        backgroundColor: COLORS.SECONDARY_ORANGE,
        justifyContent: 'flex-end'
    },
    headerText: {
        fontSize: 30,
        marginHorizontal: 20,
        fontWeight: '700',
        marginBottom: 20
    },
    profileContainer: {
        height: 80,
        backgroundColor: COLORS.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15
    },
    profiletextContainer: {
        width: '68%'
    },
    profileImage: {
        height: 50,
        width: 50,
        borderWidth: 1,
        borderRadius: 25,
        marginHorizontal: 20,
        borderColor: COLORS.TRANSPARENT
    },
    userName: {
        fontSize: 18,
        fontWeight: '500'
    },
    settingTypeText:{
        fontSize: 16,
        fontWeight: '500'
    },
    userEmail: {
        fontSize: 15,
        color: COLORS.DISABLED_TEXT_GREY
    },
    rightArraow: {
        justifyContent: "flex-end"
    },
    settingContainer:{
        height: 50,
        backgroundColor: COLORS.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor:COLORS.LIGHT_GREY,
        borderBottomWidth:1
    },
    settingtextContainer:{
        width:'85%',
        marginLeft:20,
    },
    extraSettingContainer:{
        height: 50,
        backgroundColor: COLORS.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor:COLORS.LIGHT_GREY,
        borderBottomWidth:1
    },
    logoutBtnText:{
        fontSize: 18,
        fontWeight: '500'
    },
    logoutBtnText:{
        fontSize:18,
        fontWeight:'700',
        color:COLORS.SECONDARY_ORANGE
    },
    menu:{
        width:25,
        height:25
    },
    menuContainer:{
        position:'absolute',
        width:50,
        height:50,
        top:'20%',
        margin:10,
        borderRadius:25,
        overflow:'hidden',
        borderWidth:1,
        borderColor:COLORS.TRANSPARENT,
        justifyContent:"center",
        alignItems:'center'
    }




})

export default styles;