import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        height: '60%',
        backgroundColor: COLORS.SECONDARY_ORANGE,
        justifyContent: 'center',
        // alignItems:'center',
    },
    profileImageContainer: {
        height: 80,
        width: 80,
        borderRadius: 40,
        overflow: 'hidden',
        marginLeft: 30,
    },
    image: {
        height: 80,
        width: 80
    },
    userName: {
        fontSize: 18,
        fontWeight: "700",
        marginHorizontal: 10
    },
    userPhone: {
        fontSize: 15,
        fontWeight: "500",
        marginHorizontal: 10
    },
    topContentContainer:{
        flexDirection:'row',
        alignItems:'center',
        height:'80%'
    },
    textHintContainer: {
    //    backgroundColor:"red",
       marginHorizontal:10,
       height:'20%',
       justifyContent:'center',
       
    },
    textHint: {
        fontSize: 18,
        fontWeight:'500'
    },
    item:{
        fontSize:18,
        color:COLORS.SECONDARY_BLACK,
        
    }
});

export default styles;