import React from 'react';
import Profile from '../Components/Profile';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../Store/Selectors/';
import STORE from '../Store';

const ProfileScreen = (props) => {
    const user = useSelector(userSelectors.getLoginData);
    const enhancedProps = {
        user,
        navigation: props.navigation
    }
    return <Profile {...enhancedProps} />
}

export default ProfileScreen