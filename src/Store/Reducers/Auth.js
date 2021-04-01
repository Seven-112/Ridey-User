import {
    LOGIN,
    CLEAR_ERROR,
    SIGNUP,
    LOGOUT,
    FILE_UPLOAD
} from '../Actions/Auth';

const initialState = {
    loginData: null,
    uploadData:null,
    didTryAutoLogin: false,
    error: null,
    success: false,
    uploadStatus:false
};



export default (state = initialState, action) => {

    switch (action.type) {

        case LOGIN:
            return {
                ...state,
                loginData: action.data,
                didTryAutoLogin: true,
                error: action.error,
                success: action.success
            }
        case SIGNUP:
            return {
                ...state,
                didTryAutoLogin: false,
                error: action.error,
                success: action.success
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
                success: false
            }
        case LOGOUT:
            return {
                ...state,
                loginData:null,
                didTryAutoLogin: false,
               
            }
        case FILE_UPLOAD:
            return {
                ...state,
                error: action.error,
                uploadStatus:action.success,
                uploadData:action.data
            }
        default:
            return state;
    }
}