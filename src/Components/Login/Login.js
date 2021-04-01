import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import styles from './Login.styles';
import { TextInput, Button } from '..'
import COLORS from '../../Constants/Theme/Color';
import loginImage from '../../assets/images/undraw_Login_re_4vu2.png';
import RouteNames from '../../Navigation/routeNames';
// import Alert from '../CustomAlert'


const handleLogin = (actions, navigation, phone, setLoading) => {

    const data = {
        phoneNumber: phone
    }
    setLoading(true)
    actions.user
        .login(data)
        .then(()=>{})
        .catch((e) => console.log(e))
        .then(() =>{});
    setLoading(false)

}



const Login = ({ navigation, actions, userError, userStatus }) => {


    const [phoneNumber, setPhoneNumber] = useState('');
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    if (userStatus && loading) {
        Alert.alert("error", userError, [
            {
                text: "OK",
                onPress: () => actions.user.clearError()
            }
        ])
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image style={styles.image} resizeMode="contain" source={loginImage} />
            </View>
            <View style={styles.centerContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Login <Text style={styles.subHeading}>with your phone number</Text></Text>
                </View>
                <View style={styles.contentContainer}>
                    <TextInput text={phoneNumber} setText={(text) => setPhoneNumber(text)} style={styles.input} placeholder="Mobile Number" />
                    <Button onPress={() => handleLogin(actions, navigation, phoneNumber, setLoading)} style={styles.button} color={COLORS.SECONDARY_ORANGE} text={'NEXT'} />
                    {loading && <View><ActivityIndicator color="red" /></View>}
                    <View style={styles.bottomContainer}>
                        <Text>No Account Exists</Text>
                        <TouchableOpacity onPress={() => navigation.navigate(RouteNames.SignUp)}>
                            <Text style={styles.loginbutton}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Login;