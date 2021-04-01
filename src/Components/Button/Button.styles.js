import { StyleSheet } from 'react-native';
import { Theme } from '../../Constants';

const styles = StyleSheet.create({

    buttonContainer:{
        backgroundColor:Theme.COLORS.CTA
    },
   buttonText:{
       color:Theme.COLORS.WHITE,
       fontSize:16,
       fontWeight:'600'
   },
   container:{
       alignItems:'center',
       borderRadius:8,
       height:44,
       justifyContent:'center',
       minWidth:60,
       padding:10
   },
   plainTextContainer:{
    backgroundColor:Theme.COLORS.TRANSPARENT
   },
   plainTextButton:{
    color:Theme.COLORS.ICONS
   },
   mutedText:{
       color:Theme.COLORS.BODY_MUTED
   },
   cta:{
       backgroundColor:Theme.COLORS.CTA,
       fontWeight:'500'
   }
    
})

export default styles;