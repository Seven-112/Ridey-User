import React from 'react';
import PaymentMessage from '../Components/PaymentMessage';
import { useSelector } from 'react-redux';
import * as userSelectors from '../Store/Selectors/';


const PaymentMessageScreen = (props) => {

    const tripData = useSelector(userSelectors.getTripData);
    const enhancedProps = {
        tripData,
        navigation: props.navigation
    }
    return <PaymentMessage
        {...enhancedProps}
    />
}

export default PaymentMessageScreen;