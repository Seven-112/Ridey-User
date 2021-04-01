import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    buttonContainer:{
        height:50,
        marginHorizontal:20,
        backgroundColor:COLORS.BORDER_GRAY,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'15%',
        borderRadius:10

    },
    buttonText:{
        fontSize:18,
        fontWeight:'700'
    },
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: COLORS.SECONDARY_GREY,
    },
    headerContainer: {
        height: '16%',
        backgroundColor: COLORS.SECONDARY_ORANGE,
         alignItems: 'flex-end',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerText: {
        fontSize: 30,
        marginHorizontal: 20,
        fontWeight: '700',
        marginBottom: 20
    },
    inputContainer:{
        marginHorizontal:20,
        marginTop:30,
    },
    textInputContainer:{
        height:50,
        backgroundColor:COLORS.TRANSPARENT_LIGHT_GREY,
        alignItems:'center',
        flexDirection:'row'
    },
    imageIcon:{
        height:30,
        width:30,
        marginHorizontal:4
    },
    imageIconCamera:{
        height:25,
        width:25,
        marginHorizontal:4
    },
    input:{
        width:'80%',
        height:40,
        fontSize:20
    },
    smallInput:{
        width:'80%',
        height:40,
        fontSize:20,
        paddingLeft:10
    },
    labelInput:{
        fontSize:16,
        marginBottom:5,
        fontWeight:'600'
    }



})

export default styles;