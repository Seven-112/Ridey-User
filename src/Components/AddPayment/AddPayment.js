import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './AddPayment.styles';
import CreditCard from '../../assets/images/creditCard.png';
import CameraIcon from '../../assets/images/camera.png';



const handleAddCard = (actions, navigation, userId, cardNumber, cvc, expiryMonth, expiryYear, setLoading) => {
    const data = {
        cardNumber,
        cvc,
        expiryMonth,
        expiryYear,
        userId
    }
    setLoading(true)
    actions.user
        .addCard(data)
        .then(actions.user
            .getCard(userId)
            .then(() => navigation.goBack())
            .catch((e) => console.log(e))
            .then(() => { }))
    setLoading(false)
}




const AddPayment = ({ actions, navigation, userId }) => {

    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvc, setCvc] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {/* <Image source={backIcon}/> */}
                <Text style={styles.headerText}>Add Card</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Card Number</Text>
                    <View style={styles.textInputContainer}>
                        <Image style={styles.imageIcon} source={CreditCard} />
                        <TextInput value={cardNumber} onChangeText={(text) => setCardNumber(text)} keyboardType='number-pad' style={styles.input} />
                        <Image style={styles.imageIconCamera} source={CameraIcon} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ ...styles.inputContainer, width: '40%' }}>
                        <Text style={styles.labelInput}>Expiry Month</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput value={expiryMonth} onChangeText={(text) => setExpiryMonth(text)} placeholder='MM' style={styles.smallInput} />
                        </View>
                    </View>
                    <View style={{ ...styles.inputContainer, width: '40%' }}>
                        <Text style={styles.labelInput}>Expiry Year</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput value={expiryYear} onChangeText={(text) => setExpiryYear(text)} placeholder='YYYY' style={styles.smallInput} />
                        </View>
                    </View>
                </View>
                <View style={{ ...styles.inputContainer, width: '40%' }}>
                        <Text style={styles.labelInput}>CVC Number</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput value={cvc} onChangeText={(text) => setCvc(text)} maxLength={3} keyboardType='number-pad' placeholder='123' style={styles.smallInput} />
                        </View>
                    </View>
                <TouchableOpacity onPress={() => handleAddCard(actions, navigation, userId, cardNumber, cvc, expiryMonth, expiryYear,setLoading)} style={styles.buttonContainer}>
                    {
                        loading ? <ActivityIndicator size="large" color="white" />
                            :
                            <Text style={styles.buttonText}>Save</Text>
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddPayment;