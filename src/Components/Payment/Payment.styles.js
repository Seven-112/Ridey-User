import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    buttonContainer:{
        height:50,
        backgroundColor:COLORS.SECONDARY_ORANGE,
        marginHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'30%',
        borderRadius:10
    },
    buttonText:{
        fontSize:16,
        fontWeight:'600'
    },
    container: {
        flex: 1,
        backgroundColor:COLORS.WHITE
    },
    contentContainer: {
        flex: 1,
        marginTop: '-10%'
    },
    headerContainer: {
        height: '20%',
        backgroundColor: COLORS.SECONDARY_ORANGE,
        justifyContent: 'flex-end'
    },
    headerText: {
        fontSize: 30,
        marginHorizontal: 20,
        fontWeight: '700',
        marginBottom: '14%'
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
        justifyContent: 'center'
    },
    cashHeaderText: {
        fontSize: 18,
        fontWeight: '700'
    },
    cashHeaderDetails: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.DISABLED_TEXT_GREY
    },
    cardContainer: {
        flex: 1
    },
    paymentItemContainer: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 20,
        borderWidth:1,
        borderRadius:10,
        borderColor:COLORS.TRANSPARENT,
        backgroundColor: COLORS.SECONDARY_GREY,
    },
    cardContainerText: {
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 20,
        marginVertical: 15,
        color: COLORS.BLACK
    },
    imageIcon: {
        height: 30,
        width: 30,
        marginHorizontal: 10
    },
    disabledText:{
        marginHorizontal:20,
        alignSelf:"center",
        color:COLORS.DISABLED_TEXT_GREY,
        fontSize:16
    }
});
export default styles;