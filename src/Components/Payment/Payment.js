import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import styles from './Payment.styles';
import KEYS from '../../Constants/appConstants/Global';
import dollarIcon from '../../assets/images/dollarIcon.png';
import VisaIcon from '../../assets/images/payPal.png';
import PayPalIcon from '../../assets/images/visa.png';
import routeNames from '../../Navigation/routeNames';
import stripe from 'tipsi-stripe'

stripe.setOptions({
    publishableKey: KEYS.publishableKey,
});



const handleGetUserCards = (actions, userId, setLoading) => {
    console.log("called", actions)
    setLoading(true);
    const data = {
        userId: userId
    }
    actions.user
        .getCard(data)
        .then(() => { })
        .catch((e) => console.log("err", e))
        .then(() => { });
    setLoading(false)
}

const PaymentItem = ({ item, actions, user, tripId, setLoading, navigation }) => {

    return (
        <TouchableOpacity onPress={() => handleCardPress(item, actions, user, tripId, setLoading, navigation)} style={styles.paymentItemContainer}>
            <Image style={styles.imageIcon} source={item.type === 'Visa' ? VisaIcon : PayPalIcon} />
            <Text>{item.cardNumber}</Text>
        </TouchableOpacity>
    )
}
//checking Card Press
const handleCardPress = async (item, actions, user, tripId, setLoading, navigation) => {
    setLoading(true)
    try {
        const token = await stripe.createTokenWithCard({
            number: item.cardNumber.toString(),
            cvc: item.cvc.toString(),
            expMonth: parseInt(item.expiryMonth),
            expYear: parseInt(item.expiryYear)
        })
        const data = {
            token: token.tokenId,
            user: user,
            amount: 200,
            tripId: tripId ? tripId : 'testId'
        }
        const transaction = await actions.user.makeTransaction(data);
        setLoading(false);
        Alert.alert('SUCCESS', 'Payment Successfull', [{
            text: 'OK',
            onPress: () => { navigation.navigate(routeNames.Rating) }

        }])

    } catch (error) {
        setLoading(false)
        console.log(error)
    }


}


const Payment = ({ navigation, requestData, tripData, paymentData, paymentStatus, actions, userId, user }) => {
    let data = [];
    let tripId = ''
    console.log(tripData)
    data = paymentData ? paymentData[0].payments : [];
    tripId = tripData ? tripData.tripId : '';
    console.log(actions)
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        handleGetUserCards(actions, userId, setLoading)

    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Payment Method</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.itemContainer}>
                    <View style={styles.cashContainer}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.imageIcon} source={dollarIcon} />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate(routeNames.PaymentMessage, { requestData: requestData, tripData: tripData })} style={styles.textContainer}>
                            <Text style={styles.cashHeaderText}>Cash</Text>
                            <Text style={styles.cashHeaderDetails}>Default Payment Method</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <Text style={styles.cardContainerText}>Credit Card</Text>
                    {data.length > 0 ? data.map((item, index) => <PaymentItem key={index} navigation={navigation} actions={actions} setLoading={setLoading} tripId={tripId} user={user} item={item} />) :
                        <Text style={styles.disabledText}>No Credit Card Added</Text>
                    }
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate(routeNames.AddPayment)} >
                        {loading ?
                            <ActivityIndicator size="large" color="white" />
                            :
                            <Text style={styles.buttonText}>Add New Method</Text>
                        }
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
};

export default Payment;