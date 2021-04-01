import React from 'react';
import Wallet from '../Components/Wallet';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../Store/Selectors/';
import * as paymentSelectors from '../Store/Selectors/';
import STORE from '../Store'


const WalletScreen = (props) => {
    const dispatch = useDispatch();
    const getTransactions = (data) => dispatch(STORE.actions.actionGetTransaction(data));
    const clearPaymentError = () => dispatch(STORE.actions.clearPaymentError())
    const userId = useSelector(userSelectors.getUserId);
    const user = useSelector(userSelectors.getLoginData);
    const transactionData = useSelector(paymentSelectors.getUserTransactions);

    const enhancedProps = {
        ...props,
        actions: {
            user: {
                getTransactions,
                clearPaymentError
            }
        },
        transactionData,
        user,
        userId,
        navigation: props.navigation

    }
    return <Wallet {...enhancedProps} />
}

export default WalletScreen