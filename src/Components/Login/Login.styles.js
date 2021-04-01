import { StyleSheet } from 'react-native';
import { Theme } from '../../Constants';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    button: {
        width:'90%',
        marginHorizontal: 20,
        fontSize:24
    },
    bottomContainer:{
        marginHorizontal: 20,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginTop:  5
      
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
    },
    centerContainer: {
        backgroundColor: COLORS.SECONDARY_GREY,
        marginTop: -59,
        marginHorizontal: 10,
        borderRadius: 10,
        height: '35%'
    },
    contentContainer: {
        marginTop: 10
    },
    headerContainer: {
        height: 80,
        justifyContent: 'center',
        width:'70%',
        marginHorizontal:20,
        marginVertical:20
    },
    header: {
        fontWeight: '600',
        fontSize: 30,
        color: COLORS.SECONDARY_ORANGE
    },
    loginbutton:{
        color:COLORS.SECONDARY_ORANGE,
        fontSize:14,
        fontWeight:'600',
        marginHorizontal:2
    },
    image: {
        width: '100%',
        height: '100%'
    },
    input: {
        backgroundColor: COLORS.TRANSPARENT_LIGHT_GREY,
        marginHorizontal: 20,
        borderWidth: 0.7,
        borderColor: COLORS.BORDER_GRAY,
        marginBottom: 30

    },
    subHeading:{
        fontWeight: '500',
        fontSize: 30,
        color: COLORS.SECONDARY_ORANGE
    },
    topContainer: {
        height: '40%',
        backgroundColor: COLORS.WHITE,
        borderBottomColor: COLORS.TRANSPARENT_LIGHT_GREY,
        
    },

})
export default styles;