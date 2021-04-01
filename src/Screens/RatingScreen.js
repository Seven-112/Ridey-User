import React from 'react';
import Rating from '../Components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../Store/Selectors/';
import STORE from '../Store'



const RatingScreen = (props) => {
   
    const dispatch = useDispatch();
    const tripData =  useSelector(userSelectors.getTripData);
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
        navigation: props.navigation
    }

    return <Rating {...enhancedProps}/>
}

export default RatingScreen