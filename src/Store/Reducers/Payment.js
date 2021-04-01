import {
    ADD_CARD,
    GET_CARD,
    DELETE_CARD,
    CLEAR_PAYMENT_ERROR,
    MAKE_TRANSACTION,
    GET_TRANSACTION
} from '../Actions/Payment';

const initialState = {
    paymentData: null,
    error: null,
    success: false,
    transactionData: null,
    userTransactions:null,

};

// type: MAKE_TRANSACTION,
// data:response.data,
// error:response.message,
// success:response.success 



export default (state = initialState, action) => {

    switch (action.type) {

        case ADD_CARD:
            return {
                ...state,
                error: action.error,
                success: action.success
            }
        case GET_CARD:
            console.log(action)
            return {
                ...state,
                paymentData: action.data,
                error: action.error,
                success: action.success
            }
        case CLEAR_PAYMENT_ERROR:
            return {
                ...state,
                error: null,
                success: false
            }
        case DELETE_CARD:
            return {
                ...state,
                paymentData: action.data,
                error: action.error,
                success: action.success
            }
        case MAKE_TRANSACTION:
            return {
                ...state,
                error: action.error,
                success: action.success,
                transactionData: action.data
            }
        case GET_TRANSACTION:
            return {
                ...state,
                error: action.error,
                success: action.success,
                userTransactions: action.data
            }
        default:
            return state;
    }
}