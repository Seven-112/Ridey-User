import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '20%',
        backgroundColor: COLORS.WHITE,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: COLORS.TRANSPARENT
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent:'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    headerText:{
        fontSize:24,
        color:COLORS.SECONDARY_ORANGE,
        alignSelf:'center',
        fontWeight:'500',
        marginHorizontal:20,
        marginTop:10
    },
    imageIcon:{
        width:'30%',
        height:'30%',
        alignSelf:'center'
    },
    carIcon:{
        height:40,
        width:40,
    },
    button:{
        height:40,
        width:'40%',
        borderRadius:20,
        backgroundColor:COLORS.SECONDARY_ORANGE,
        justifyContent:"center",
        alignItems:'center',
        marginHorizontal:'30%',
        marginVertical:20
    }

});
export default styles;