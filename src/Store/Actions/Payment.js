import actions from '../../api'
export const ADD_CARD = 'ADD_CARD';
export const MAKE_TRANSACTION = 'MAKE_TRANSACTION';
export const GET_TRANSACTION = 'GET_TRANSACTION';
export const GET_CARD = 'GET_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const CLEAR_PAYMENT_ERROR = 'CLEAR_PAYMENT_ERROR';


export const actionAddCard = (data) => {
    return async dispatch => {
        const response = await actions.createNetworkRequest('POST', 'addCard', data);
        console.log(response);
        dispatch({ 
            type: ADD_CARD,
            error:response.message,
            success:response.success 
        })
    }
}
export const actionMakeTransaction = (data) => {
    return async dispatch => {
        const response = await actions.createNetworkRequest('POST', 'makeTransaction', data);
        console.log(response);
        dispatch({ 
            type: MAKE_TRANSACTION,
            data:response.data,
            error:response.message,
            success:response.success 
        })
    }
}
export const actionGetTransaction = (data) => {
    return async dispatch => {
        const response = await actions.createNetworkRequest('POST', 'getTransaction', data);
        dispatch({ 
            type: GET_TRANSACTION,
            data:response.data,
            error:response.message,
            success:response.success 
        })
    }
}
export const actionGetCard = (data) => {
    return async dispatch => {
        const response = await actions.createNetworkRequest('POST', 'getCard', data);
        console.log(response.data.payments);
        dispatch({ 
            type: GET_CARD,
            data:response.data,
            error:response.message,
            success:response.success 
        })
    }
}
export const actionDeleteCard = (data) => {
    return async dispatch => {
        const response = await actions.createNetworkRequest('POST', 'deletePaymetCard', data);
        console.log(response);
        dispatch({ 
            type: DELETE_CARD,
            data:response.data,
            error:response.message,
            success:response.success 
        })
    }
}
export const actionLogout = () => {
    return async dispatch => {
        dispatch({ 
            type: LOGOUT,
        })
    }
}

export const ActionClearPaymentError = () => {
    return async dispatch => {
        dispatch({ 
            type: CLEAR_PAYMENT_ERROR,
        })
    }
}


