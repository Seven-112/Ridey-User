import React from "react";
import Chat from "../Components/Chat";
import { useSelector } from "react-redux";
import * as Selectors from '../Store/Selectors';

const ChatScreen = (props) => {
    const user = useSelector(Selectors.getLoginData);
    const driver={
        name:'test'
    }
    const enhancedProps = {
    navigation: props.navigation,
    user,
    driver,
  };

  return <Chat {...enhancedProps} />;
};

export default ChatScreen;
