import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';


const styles = StyleSheet.create({
    centerContainer:{
        height:'40%',
        marginHorizontal:20,
        backgroundColor:COLORS.WHITE,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center"
    },
    imageContainer:{
        height:40,
        width:40,
        borderRadius:20,
        borderWidth:1,
        borderColor:COLORS.TRANSPARENT
    },
    textContainer:{
        backgroundColor:'red'
    },
    buttonContainer:{
        height:40,
        width:'90%',
        borderRadius:20,
        backgroundColor:COLORS.PRIMARY_YELLOW
    }

})