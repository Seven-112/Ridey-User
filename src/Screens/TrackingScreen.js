import React from "react";
import Tracking from "../Components/Tracking";
import { useDispatch, useSelector } from "react-redux";
import * as userSelectors from "../Store/Selectors/";
import STORE from "../Store";

const TrackingScreen = (props) => {
  const dispatch = useDispatch();
  console.log("props", props);
  const tripData = props.route.params.tripData;
  const requestError = useSelector(userSelectors.getRequestErrors);
  const requestStatus = useSelector(userSelectors.getRequestStatus);
  const nearByDrivers = useSelector(userSelectors.getNearByDriverData);
  const actionGetCurrentTrip = (data) =>
    dispatch(STORE.actions.actionGetCurrentTrip(data));
  const user = useSelector(userSelectors.getLoginData);
  const currentTrip = useSelector(userSelectors.getCurrentTrip);
  const requestData = useSelector(userSelectors.getRequestData);
  console.log("requestData", requestData);
  const enhancedProps = {
    ...props,
    actions: {
      actionGetCurrentTrip,
    },
    requestError,
    requestStatus,
    requestData,
    tripData,
    user,
    navigation: props.navigation,
    nearByDrivers,
  };
  return <Tracking {...enhancedProps} />;
};

export default TrackingScreen;
