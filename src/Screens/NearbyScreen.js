import React from 'react';
import NearBy from '../Components/NearBy';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../Store/Selectors/';
import STORE from '../Store';

const NearByScreen = (props) => {
    const requestData = props.route.params.requestData

    const dispatch = useDispatch();
    const actionGetNearByDrivers = (data) => dispatch(STORE.actions.actionGetNearByDriversRequest(data));
    const actionCreateTrip = (data)=>dispatch(STORE.actions.actionCreateTrip(data));
    const actionGetUserRequest = (data)=>dispatch(STORE.actions.actionGetUserRequest(data));
    const clearRequestError = () => dispatch(STORE.actions.clearRequestError());
    const tripData = useSelector(userSelectors.getTripData);
    const requestError = useSelector(userSelectors.getRequestErrors);
    const requestStatus = useSelector(userSelectors.getRequestStatus);
    const nearByDrivers = useSelector(userSelectors.getNearByDriverData);
    const user = useSelector(userSelectors.getLoginData);
    console.log("nearbyDrivers",nearByDrivers,requestStatus,requestError)
    const enhancedProps = {
        ...props,
        actions: {
            request: {
                actionGetNearByDrivers,
                actionGetUserRequest,
                clearRequestError,
                actionCreateTrip
            }
        },
        requestError,
        requestStatus,
        requestData,
        tripData,
        user,
        navigation: props.navigation,
        nearByDrivers
    }

    return <NearBy {...enhancedProps} />
}

export default NearByScreen