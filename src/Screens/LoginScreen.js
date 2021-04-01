import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../Store/Selectors/';
import Login from '../Components/Login';
import STORE from '../Store'


const LoginScreen = (props) => {
    const dispatch = useDispatch();

    const login = (data) => dispatch(STORE.actions.actionlogin(data));
    const clearError = ()=>dispatch(STORE.actions.clearError())
    const userError = useSelector(userSelectors.getErrors);
    const userStatus = useSelector(userSelectors.getStatus);
    const enhancedProps = {
        ...props,
        actions: {
            user: {
                login,
                clearError
            }
        },
        userError,
        userStatus,
        navigation: props.navigation
    }

    return <Login {...enhancedProps} />
}
export default LoginScreen;