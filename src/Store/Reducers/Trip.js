import {
    CREATE_TRIP,
    GET_TRIP,
    CLEAR_TRIP_ERROR,
    TRIP_COMPLETE
} from '../Actions/Trip'

const initialState = {
    tripData: null,
    error: null,
    success: false,
};


export default (state = initialState, action) => {

    switch (action.type) {

        case CREATE_TRIP:
            return {
                tripData:action.tripData,
                error: action.error,
                success: action.success
            }
        case TRIP_COMPLETE:
            return {
                ...state,
                error:action.error,
                success:action.success
            }
        case GET_TRIP:
            return {
                tripData: action.data,
                error: action.error,
                success: action.success
            }
        case CLEAR_TRIP_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}