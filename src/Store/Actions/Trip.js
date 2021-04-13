import actions from '../../api'
export const CREATE_TRIP = 'CREATE_TRIP';
export const GET_TRIP = 'GET_TRIP';
export const CLEAR_TRIP_ERROR = 'CLEAR_TRIP_ERROR';
export const TRIP_COMPLETE = 'TRIP_COMPLETE';
export const GET_CURRENT_TRIP = 'GET_CURRENT_TRIP';


export const actionCreateTrip = (data) => {
    return async dispatch => {
        const response = await actions.createNetworkRequest('POST', 'createTrip', data);
        dispatch({ 
            type: CREATE_TRIP,
            error:response.message,
            success:response.success,
            tripData:response.data 
        })
    }
}
export const actionGetCurrentTrip = (data) => {
    return async dispatch => {
        const response = await actions.createNetworkRequest('POST', 'getCurrentTrip', data);
        dispatch({ 
            type: GET_CURRENT_TRIP,
            data:response.data,
            error:response.message,
            success:response.success 
        })
    }
}


export const actionCompleteTrip = (data) => {
    return async dispatch => {
        const response = await actions.createNetworkRequest('POST', 'completeTrip', data);
        console.log(response);
        dispatch({ 
            type: TRIP_COMPLETE,
            error:response.message,
            success:response.success,
        })
    }
}


export const actionGetUserTrip = (data) => {
    return async dispatch => {
        const response = await actions.createNetworkRequest('POST', 'getTrip', data);
        dispatch({ 
            type: GET_TRIP,
            data:response.data,
            error:response.message,
            success:response.success 
        })
    }
}


export const clearTripError = () => {
    return async dispatch => {
        dispatch({ 
            type: CLEAR_TRIP_ERROR,
        })
    }
}


