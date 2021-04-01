import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    bottomContainer:{
        height:'15%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    button:{
        backgroundColor:COLORS.SECONDARY_ORANGE,
        height:45,
        width:'50%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    buttonText:{
        fontSize:16,
        fontWeight:'600'
    },
    container:{
        flex:1,
    },
    disableText:{
        color:COLORS.DISABLED_TEXT_GREY
    },
    subContainer:{
        padding:10,
        height:'15%',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    containerInput:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    cellView:{
        paddingVertical:5,
        width:40,
        margin:5,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:2
    },
    cellText:{
        textAlign:'center',
        fontSize:20
    },
    cellTextPlaceholder:{
        textAlign:'center',
        fontSize:20,
        color:COLORS.DISABLED_TEXT_GREY
    },
    header:{
        marginHorizontal:20,
        fontSize:30,
        fontWeight:'500'
    },
    subHeader:{
        marginHorizontal:20,
        fontSize:20,
        fontWeight:'300',
        marginBottom:40
    },
    topContainer: {
        height: '25%',
        justifyContent:'flex-end',
        backgroundColor:COLORS.SECONDARY_GREY,
        borderBottomColor: COLORS.TRANSPARENT_LIGHT_GREY,
        
    },
});

export default styles;