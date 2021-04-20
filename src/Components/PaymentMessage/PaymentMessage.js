import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import routeNames from '../../Navigation/routeNames';
import styles from './PaymentMessage.styles';

const PaymentMessage = ({ navigation,tripData,requestId }) => {


    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.headerText}>PAY AMOUNT</Text>
                <View style={styles.amountContainer}>
                    <Text style={styles.textAmount}>{tripData.fare} <Text style={{fontSize:20}}>RS</Text></Text>
                </View>
                <TouchableOpacity onPress={()=>{navigation.navigate(routeNames.Rating,{tripData:tripData,requestId:requestId})}} style={styles.buttonContainer}>
                    <Text>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PaymentMessage;