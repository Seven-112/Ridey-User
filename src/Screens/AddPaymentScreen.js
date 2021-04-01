import React from 'react';
import AddPayment from '../Components/AddPayment';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../Store/Selectors/';
import * as paymentSelectors from '../Store/Selectors/';
import STORE from '../Store'

const AddPaymentScreen = (props) => {

    const dispatch = useDispatch();
    const addCard = (data) => dispatch(STORE.actions.actionAddCard(data));
    const getCard = (data) => dispatch(STORE.actions.actionAddCard(data));
    const clearPaymentError = ()=>dispatch(STORE.actions.clearPaymentError())
    const userId = useSelector(userSelectors.getUserId);
    const paymentStatus = useSelector(paymentSelectors.getStatus);



    const enhancedProps = {
        ...props,
        actions:{
            user:{
                addCard,
                getCard,
                clearPaymentError
            }
        },
        navigation:props.navigation,
        userId,
        paymentStatus
    }
    return <AddPayment {...enhancedProps} />
}

export default AddPaymentScreen;



