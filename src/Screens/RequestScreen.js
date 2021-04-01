import React from 'react';
import Request from '../Components/Request';
import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../Store/Selectors/';
import STORE from '../Store';

const RequestScreen = (props) => {
    let source = props.route.params.sourceCoords;
    let destination = props.route.params.destinationCoords;
    let address = props.route.params.address;
    const dispatch = useDispatch();
    const createRequest = (data) => dispatch(STORE.actions.actionCreateRequest(data));
    const actionGetNearByDrivers = (data) => dispatch(STORE.actions.actionGetNearByDriversRequest(data));
    const clearRequestError = ()=>dispatch(STORE.actions.clearRequestError())
    const requestError = useSelector(userSelectors.getRequestErrors);
    const requestStatus = useSelector(userSelectors.getRequestStatus);
    const user = useSelector(userSelectors.getLoginData);

    const enhancedProps = {
        ...props,
        actions: {
            request: {
                createRequest,
                actionGetNearByDrivers,
                clearRequestError
            }
        },
        requestError,
        requestStatus,
        source,
        destination,
        address,
        user,
        navigation: props.navigation
    }


    return <Request {...enhancedProps} />
}

export default RequestScreen