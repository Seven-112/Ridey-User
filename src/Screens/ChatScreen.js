import React from "react";
import Chat from "../Components/Chat";
import { useSelector } from "react-redux";
import * as Selectors from '../Store/Selectors';

const ChatScreen = (props) => {
    const userData = useSelector(Selectors.getLoginData);
    const user ={
      _id:userData._id,
      userId:userData.usserId,
      name:userData.name,
      avatar:userData.profileImg
    }
    const driverData = props.route.params.connectedDriver;
    const driver = {
      _id:driverData._id,
      driverId:driverData.driverId,
      name:driverData.name,
      avatar:driverData.profileImg
    }
    const enhancedProps = {
    navigation: props.navigation,
    user,
    driver,
  };

  return <Chat {...enhancedProps} />;
};

export default ChatScreen;
