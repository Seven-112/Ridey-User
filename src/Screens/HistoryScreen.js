import React from 'react';
import History from '../Components/History';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../Store/Selectors/';
import STORE from '../Store'


const HistoryScreen = (props) => {
    const dispatch = useDispatch();
    const getUserTrips = (data) => dispatch(STORE.actions.actionGetUserTrip(data));
    const clearTripError = () => dispatch(STORE.actions.clearTripError())
    const userTrips = useSelector(userSelectors.getTripData);
    console.log("inside screen",userTrips)
    const userId = useSelector(userSelectors.getUserId);
    const enhancedProps = {
        actions:{
            user:{
                getUserTrips,
                clearTripError
            }
        },
        userTrips,
        userId,
        navigation: props.navigation
    }
    return <History {...enhancedProps} />
}

export default HistoryScreen;