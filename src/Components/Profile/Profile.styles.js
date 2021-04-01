import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: COLORS.SECONDARY_GREY,
    },
    headerContainer: {
        height: '20%',
        backgroundColor: COLORS.SECONDARY_ORANGE,
    },
    headerContent:{
        alignItems: 'flex-end',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:"10%"
    },
    headerText: {
        fontSize: 30,
        marginHorizontal: 20,
        fontWeight: '700',
        marginBottom: 20
    },
    profileImage: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 20,
        borderColor: COLORS.TRANSPARENT,
        marginBottom: 20
    },
    settingTypeText:{
        fontSize: 16,
        fontWeight: '500'
    },
    settingValue:{
        fontSize: 16,
        fontWeight: '500',
        color:COLORS.DISABLED_TEXT_GREY
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
        width:'90%',
        marginLeft:20,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    menu:{
        width:25,
        height:25
    },
    menuContainer:{
        // position:'absolute',
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