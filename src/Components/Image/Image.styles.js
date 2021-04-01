
import { StyleSheet } from 'react-native';
import { Theme} from '../../Constants';

const styles = StyleSheet.create({
    placeholderImage: {
        backgroundColor:Theme.COLORS.LIGHT_GREY,
        position:'absolute'
    },
    baseStyling:{
        borderRadius:8,
        borderWidth:1,
        borderColor:Theme.COLORS.IMAGE_BORDER
    },
    icon:{
        height:Theme.LAYOUT.roundedIcon,
        width:Theme.LAYOUT.roundedIcon
    }

});
export default styles;