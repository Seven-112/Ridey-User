import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    notificationHeader: {
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: "space-between"
    },
    itemHeaderText: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 2,
    },
    itemHeaderTime: {
        fontSize: 12,
        fontWeight: '500',
        color: COLORS.DISABLED_TEXT_GREY

    },
    itemDetails: {
        fontSize: 16,
        marginHorizontal: 10
    },
    notificationItem: {
        height: 80,
        backgroundColor: COLORS.SECONDARY_GREY,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.BORDER_GRAY,

    },
    notificationContent: {
        width: '100%',
        flexDirection: 'row',
        height: 80,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    imageIconContainer:{
        width:30,
        height:30,
        borderRadius:15,
        borderWidth:1,
        borderColor:COLORS.TRANSPARENT,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor:COLORS.TRANSPARENT_LIGHT_GREY,
        marginTop:10
    
    },
    imageIcon: {
        width: 25,
        height: 25,
      
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