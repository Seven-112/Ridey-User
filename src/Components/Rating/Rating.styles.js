import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    buttonContainer:{
        height:50,
        backgroundColor:COLORS.SECONDARY_ORANGE,
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
        borderRadius:10,
        marginTop:10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        height: '55%',
        width: '90%',
        marginHorizontal: 20,
        backgroundColor: COLORS.PALE_GREY,
        alignItems: 'center',
        borderRadius:10,
    },
    commentContainer:{
        width:'90%',
        height:100,
        backgroundColor:COLORS.TRANSPARENT_LIGHT_GREY,
        marginTop:20,
        borderRadius:10
    },
    imageContainer: {
        width: 90,
        height: 90,
        borderWidth: 1,
        borderRadius: 45,
        overflow: 'hidden',
        marginTop:-45,
        borderColor:COLORS.WHITE
    },
    image: {
        width: 90,
        height: 90
    },
    name:{
        fontSize:17,
        fontWeight:'600',
        marginTop:10
    },
    carName:{
        color:COLORS.DISABLED_TEXT_GREY
    },
    heading:{
        fontSize:20,
        marginTop:30,
        fontWeight:'600'
    },
    subHeading:{
        fontSize:17,
        marginTop:10,
        fontWeight:'400',
        textAlign:'center'
    },
    starContainer:{
        flexDirection:'row',
        marginTop:30,
    },
    starItem:{
        width:50,
        height:50
    },
    starImage:{
        width:50,
        height:50
    },
    inputComment:{
        height:'100%',
        width:'100%',
        padding:15
    }
});

export default styles;