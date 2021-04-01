import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    buttonContainer:{
        height:50,
        width:'90%',
        backgroundColor:COLORS.SECONDARY_ORANGE,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginTop:20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.WHITE
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        width:'90%',
        backgroundColor: COLORS.SECONDARY_GREY
    },
    amountContainer:{
        height:150,
        width:150,
        borderWidth:1,
        borderRadius:75,
        justifyContent:"center"
    },
    textAmount:{
        fontSize:40,
        alignSelf:'center',
        color:COLORS.SECONDARY_ORANGE,
        fontWeight:'800'
    },
    headerText:{
        fontSize:40,
        fontWeight:'600',
        marginBottom:10
    },
})

export default styles;