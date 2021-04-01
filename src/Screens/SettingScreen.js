import React from 'react';
import Setting from '../Components/Setting';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../Store/Selectors/';
import STORE from '../Store'

const SettingScreen = (props) => {
    const dispatch = useDispatch()

   const logout = () => dispatch(STORE.actions.actionLogout());

        const enhancedProps = {
        ...props,
        actions: {
            user: {
                logout,
            }
        },
        navigation: props.navigation
    }
    return <Setting {...enhancedProps} />
}

export default SettingScreen;

