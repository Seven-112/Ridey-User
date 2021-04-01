import React from 'react';
import Tracking from '../Components/Tracking';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../Store/Selectors/';
import STORE from '../Store';




const TrackingScreen = (props) => {
    const requestData = props.route.params.requestData;
    const tripData = props.route.params.tripData;
    const requestError = useSelector(userSelectors.getRequestErrors);
    const requestStatus = useSelector(userSelectors.getRequestStatus);
    const nearByDrivers = useSelector(userSelectors.getNearByDriverData);
    const user = useSelector(userSelectors.getLoginData);
    const enhancedProps = {
        ...props,
        requestError,
        requestStatus,
        requestData,
        tripData,
        user,
        navigation: props.navigation,
        nearByDrivers
    }
    return <Tracking {...enhancedProps} />
}

export default TrackingScreen