import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        marginTop: '-10%'
    },
    headerContainer: {
        height: '28%',
        backgroundColor: COLORS.SECONDARY_ORANGE,
        justifyContent: 'flex-end'
    },
    headerText: {
        fontSize: 30,
        marginHorizontal: 20,
        fontWeight: '700',
        marginBottom: '1%'
    },
    subHeaderText: {
        fontSize: 25,
        marginHorizontal: 20,
        fontWeight: '700',
        alignSelf: "center"
    },
    subHeaderDetails: {
        fontSize: 20,
        marginHorizontal: 20,
        fontWeight: '400',
        marginBottom: '13%',
        alignSelf: "center"
    },
    itemContainer: {
        height: 80,
        backgroundColor: COLORS.SECONDARY_GREY,
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: COLORS.TRANSPARENT,
        justifyContent: 'center'
    },
    cashContainer: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
    imageContainer: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: COLORS.TRANSPARENT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.TRANSPARENT_LIGHT_GREY
    },
    textContainer: {
        marginHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    cashHeaderText: {
        fontSize: 18,
        fontWeight: '700',
        width: '85%',
    },
    cardContainer: {
        flex: 1
    },
    walletItemContainer: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.TRANSPARENT_LIGHT_GREY,
        borderColor: COLORS.TRANSPARENT,
        backgroundColor: COLORS.SECONDARY_GREY,
    
    },
    walletContainer:{
        borderRadius:10,
        marginHorizontal:20,
        overflow:'hidden'
    },
    cardContainerText: {
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 20,
        marginVertical: 15,
        color: COLORS.BLACK
    },
    imageIcon: {
        height: 40,
        width: 40,
        marginHorizontal: 10,
        borderRadius: 20
    },
    imageIconDollar:{
        height: 30,
        width: 30,
        marginHorizontal: 10,
    },
    transactionText: {
        color: COLORS.DISABLED_TEXT_GREY
    },
    walletTextContainer: {
        width: '65%'
    },
    amountContainer: {
        height: 35,
        width: '15%',
        justifyContent: 'flex-end',
    },
    amountText:{
        fontSize:15,
        fontWeight:'700',
    },
    itemName:{
        fontSize:15,
        fontWeight:'600'
    },
    menu:{
        width:25,
        height:25
    },
    menuContainer:{
        width:50,
        height:50,
        top:'5%',
        margin:10,
        borderRadius:25,
        overflow:'hidden',
        borderWidth:1,
        borderColor:COLORS.TRANSPARENT,
        justifyContent:"center",
        alignItems:'center'
    }
});
export default styles;