import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/Theme/Color';

const styles = StyleSheet.create({
    buttonContainer:{
        width: '50%',
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.SECONDARY_ORANGE,
        borderRadius:10,
        marginTop:10
    },
    buttonText: {
      fontSize:16
    },
    dot: {
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: COLORS.SECONDARY_ORANGE,
    },
    onboardingList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    onboardingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    onboardingImage: {
        borderRadius: 150,
        height: 300,
        borderWidth: 1,

    },
    onboardingtextContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    headingText: {
        fontSize: 24,
        fontWeight: '700'
    },
    subheadingText: {
        fontSize: 16,
        margin: 10,
        textAlign: 'center'
    }

})

export default styles;