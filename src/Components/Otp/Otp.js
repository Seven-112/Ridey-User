import React, { useState, useEffect, useRef } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, Image, TouchableOpacity } from 'react-native';
import COLORS from '../../Constants/Theme/Color';
import styles from './Otp.styles';
import loginImage from '../../assets/images/undraw_Login_re_4vu2.png';

const Otp = () => {

    let textInput = useRef(null);
    const [otpValue, setOtpValue] = useState("424242");
    const lengthInput = 6;

    const onChangeText = (val) => {
        setOtpValue(val)
    }

    useEffect(() => {
        textInput.focus()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.header}>Phone Verification</Text>
                <Text style={styles.subHeader}>Enter your Code Here</Text>
            </View>
            <View
                style={styles.subContainer}
            >
                <View>
                    <TextInput
                        ref={(input) => textInput = input}
                        value={otpValue}
                        onChangeText={onChangeText}
                        maxLength={lengthInput}
                        returnKeyType="done"
                        keyboardType="numeric"
                        style={{ width: 0, height: 0 }}

                    />
                    <View style={styles.containerInput}>
                        {
                            Array(lengthInput).fill().map((data, index) => (
                                <View key={index} style={{
                                    ...styles.cellView,
                                    borderBottomColor: COLORS.SECONDARY_ORANGE

                                }}>
                                    <Text
                                        onPress={() => textInput.focus()}
                                        style={otpValue > 0 ? styles.cellText : styles.cellTextPlaceholder}>
                                        {
                                            otpValue && otpValue.length > 0 ? otpValue[index] : '0'
                                        }
                                    </Text>
                                </View>
                            ))
                        }

                    </View>

                </View>

            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.disableText}>
                    Resend Code in 00:40 seconds
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Verify Now</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Otp;