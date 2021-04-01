import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        // justifyContent: 'flex-end'

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    topContainer:{
        marginTop:'15%',
        backgroundColor:COLORS.WHITE,
        height:50,
        borderRadius:25,
        marginHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
     
    },
    textInput:{
        width:'80%',
        height:35,
        marginHorizontal:5,
        fontSize:15
    },
    bottomContainer:{
        position:'absolute',
        bottom:'4%',
        width:'90%',
        height:50,
        marginHorizontal:20,
        backgroundColor:COLORS.SECONDARY_ORANGE,
        justifyContent:"center",
        alignItems:'center',
        borderWidth:1,
        borderRadius:25,
        borderColor:COLORS.TRANSPARENT
    },
    locationContainer:{
        height:40,
        width:40,
        backgroundColor:COLORS.PALE_GREY,
        position:"absolute",
        bottom:'12%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        right:30
    },
    marker: {
        width: 70,
        height: 70
    },
});
export default styles;