import React from 'react';
import Payment from '../Components/Payment';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../Store/Selectors/';
import * as paymentSelectors from '../Store/Selectors/';
import STORE from '../Store'

const PaymentScreen = (props) => {
    const requestId = props.route.params.requestId;
    const tripData = props.route.params.tripData;
    console.log("requestId inside paymentScreen",requestId)
    const dispatch = useDispatch();
    const getCard = (data) => dispatch(STORE.actions.actionGetCard(data));
    const makeTransaction = (data) => dispatch(STORE.actions.actionMakeTransaction(data));
    const clearPaymentError = () => dispatch(STORE.actions.clearPaymentError())
    const userId = useSelector(userSelectors.getUserId);
    const user = useSelector(userSelectors.getLoginData);
    const paymentStatus = useSelector(paymentSelectors.getPaymentStatus);
    const paymentData = useSelector(paymentSelectors.getPaymentData);
    const enhancedProps = {
        ...props,
        actions: {
            user: {
                getCard,
                makeTransaction,
                clearPaymentError
            }
        },
        navigation: props.navigation,
        userId,
        user,
        paymentStatus,
        paymentData,
        requestId,
        tripData
    }

    return <Payment {...enhancedProps} />

}

export default PaymentScreen;