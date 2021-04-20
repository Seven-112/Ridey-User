import React from 'react';
import Rating from '../Components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../Store/Selectors/';
import STORE from '../Store'



const RatingScreen = (props) => {
    const requestId = {};
    const tripData ={
        driver:{
            name:'usman'
        },
        vehicle:{}
    };
    // const requestId = props.route.params.requestId;
    // const tripData = props.route.params.tripData;
    const dispatch = useDispatch();
    const completeTrip = (data) => dispatch(STORE.actions.actionCompleteTrip(data));
    const clearTripError = () => dispatch(STORE.actions.clearTripError())
    const tripError = useSelector(userSelectors.getTripErrors);
    const tripStatus = useSelector(userSelectors.getTripStatus);

    const enhancedProps = {
        ...props,
        actions: {
            user: {
                completeTrip,
                clearTripError
            }
        },
        tripError,
        tripStatus,
        tripData,
        requestId,
        navigation: props.navigation
    }

    return <Rating {...enhancedProps}/>
}

export default RatingScreen