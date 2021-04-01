import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between"
    },
    topContainer: {
        height: 200,
        marginTop: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        height: 100,
        width: 100,
        overflow: 'hidden',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: COLORS.WHITE
    },
    image: {
        width: 100,
        height: 100,
        // borderColor:COLORS.TRANSPARENT
    },
    name: {
        fontSize: 20,
        fontWeight: "500",
        margin: 10,
    },
    timer: {
        fontSize: 16,
        color: COLORS.SECONDARY_ORANGE,
        fontWeight: "700"
    },
    bottomContainer: {
        height: 200,
        marginBottom: '10%',
        width: '90%',
        alignItems: "center",
        marginHorizontal: 30,
    },
    bottomRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    videoContainer: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    videoIcon: {
        height: 40,
        width: 40
    },
    messageContainer: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    messageIcon: {
        height: 40,
        width: 40
    },
    soundContainer: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    soundIcon: {
        height: 40,
        width: 40
    },
    hangUpContainer: {
        backgroundColor: 'red',
        width:80,
        height:80,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:40,
        marginVertical:30
    },
    hangUpIcon:{
        height: 40,
        width: 40
    }
});
export default styles;