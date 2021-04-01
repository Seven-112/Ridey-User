import {
    GET_ALL_REQUEST,
    GET_REQUEST,
    CREATE_REQUEST,
    CLEAR_REQUEST_ERROR,
    GET_NEARBY_DRIVERS
} from '../Actions/Request'

const initialState = {
    requestData: null,
    error: null,
    success: false,
    driverData:null
};


export default (state = initialState, action) => {

    switch (action.type) {

        case CREATE_REQUEST:
            return {
                ...state,
                error: action.error,
                success: action.success
            }
        case GET_REQUEST:
            return {
                ...state,
                requestData: action.requestData,
                error: action.error,
                success: action.success
            }
        case GET_ALL_REQUEST:
            return {
                ...state,
                requestData: action.requestData,
                error: action.error,
                success: action.success
            }
        case GET_NEARBY_DRIVERS:
            return {
                ...state,
                driverData: action.driverData,
                error: action.error,
                success: action.success
            }
        case CLEAR_REQUEST_ERROR:
            return {
                ...state,
                error: null

            }
        default:
            return state;
    }
}