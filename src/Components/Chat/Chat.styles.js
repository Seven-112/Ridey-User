import {StyleSheet} from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerContainer: {
        height: '14%',
        backgroundColor: COLORS.SECONDARY_ORANGE,
        flexDirection:'row'
    },
    headerText: {
        fontSize: 30,
        marginHorizontal:10,
        fontWeight: '700',
        top: '16%',
    },
    menu: {
        width: 25,
        height: 25
    },
    menuContainer: {
        // position:'absolute',
        width: 50,
        height: 50,
        top: '15%',
        // margin: 10,
        borderRadius: 25,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: COLORS.TRANSPARENT,
        justifyContent: "center",
        alignItems: 'center'
    },
    input: {
        borderColor: COLORS.TRANSPARENT,
        backgroundColor: COLORS.WHITE,
        marginHorizontal: 15,
        marginTop: 6,
        borderRadius: 10,
      },
})
export default styles;