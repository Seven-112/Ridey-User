import React from 'react';
import PaymentMessage from '../Components/PaymentMessage';
import { useSelector } from 'react-redux';
import * as userSelectors from '../Store/Selectors/';


const PaymentMessageScreen = (props) => {
    const requestId = props.route.params.requestId;
    const tripData = props.route.params.tripData;
    console.log("tripData inside payment mesage Screen",tripData)
    const enhancedProps = {
        tripData,
        requestId,
        navigation: props.navigation
    }
    return <PaymentMessage
        {...enhancedProps}
    />
}

export default PaymentMessageScreen;