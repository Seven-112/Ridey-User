import actions from '../../api'
export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const LOGOUT = 'LOGOUT';
export const FORGET_PASSWORD = 'FORGET_PASSWORD';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const FILE_UPLOAD = 'FILE_UPLAOD';

export const actionlogin = (data) => {
    return async dispatch => {
        const response = await actions.createNetworkRequest('POST', 'login', data);
        console.log(response);
        dispatch({ 
            type: LOGIN,
            data:response.data[0],
            error:response.message,
            success:response.success 
        })
    }
}
export const actionFileUpload = (data) => {
    return async dispatch => {
        const response = await actions.createFileUploadNetworkRequest('POST', 'fileUpload', data);
        console.log(response);
        dispatch({ 
            type: FILE_UPLOAD,
            data:response.data,
            error:response.message,
            success:response.success 
        })
        return response;
    }
}
export const actionSignUp = (data) => {
    return async dispatch => {
        const response = await actions.createNetworkRequest('POST', 'signup', data);
        console.log(response);
        dispatch({ 
            type: SIGNUP,
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

export const clearError = () => {
    return async dispatch => {
        dispatch({ 
            type: CLEAR_ERROR,
        })
    }
}


