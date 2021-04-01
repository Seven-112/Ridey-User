import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        // justifyContent: 'flex-end'

    },
    carContainer: {
        marginHorizontal: 20,
        height: 60,
        backgroundColor: COLORS.WHITE,
        flexDirection: 'row',
        width: '90%',
        marginVertical:5
    },
    carImage:{
        width:60,
        height:50,
        alignSelf:'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    topContainer: {
        marginTop: '15%',
        backgroundColor: COLORS.WHITE,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        marginHorizontal: 20
    },
    textContentContainer: {
        width: '80%',
        marginHorizontal: 10,
       justifyContent:"center",
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%',
        alignItems:'center'
    },
    textInput: {
        width: '80%',
        height: 35,
        marginHorizontal: 5,
        fontSize: 15
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '40%',
        backgroundColor: COLORS.WHITE,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: COLORS.TRANSPARENT
    },
    locationContainer: {
        height: 40,
        width: 40,
        backgroundColor: COLORS.PALE_GREY,
        position: "absolute",
        bottom: '12%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        right: 30
    },
    headerBottom: {
        height: '10%',
        backgroundColor: COLORS.SECONDARY_GREY,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 16,
        color: COLORS.SECONDARY_BLACK,
        fontWeight: "700"
    },
    bottomContent: {
        height: '65%',
        // backgroundColor:'red'
    },
    buttonContainer: {
        height: '12%',
        backgroundColor: COLORS.SECONDARY_ORANGE,
        marginHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    marker: {
        width: 50,
        height: 50,
        // backgroundColor:'red'
    },
    markerSource: {
        height: 30,
        width: 30,
    }
});
export default styles;