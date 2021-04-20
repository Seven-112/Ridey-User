import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./Chat.styles";
import backIcon from "../../assets/images/backBlack.png";
import { socket } from "../../Store/store";
import { GiftedChat, InputToolbar } from "react-native-gifted-chat";
import SendIcon from "../../assets/images/up-arrow.png";
import profileImage from "../../assets/images/dummyUser.jpg";
import COLORS from "../../Constants/Theme/Color";

const handleMessageSend = (
  message,
  user,
  driver,
  chat,
  setChat,
  setMessage
) => {
  const m = {
    _id: new Date(),
    createdAt: new Date(),
    text: message,
    user: {
      ...user,
    },
  };
  const messageData = {
    _id: new Date(),
    createdAt: new Date(),
    text: message,
    from: { ...user },
    to: { ...driver },
  };

  //  setChat([...chat, m]);
  // setMessages([...message,m]);
  socket.emit("message", messageData);
};

const Chat = ({ navigation, user, driver }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    const data = {
      user: user,
      message: "user has joined chat",
    };
    socket.emit("chat", data);
  }, []);
  useEffect(() => {
    socket.on("message", (messageIncomingdata) => {
      console.log("data", messageIncomingdata);
    });
    socket.on("Incomingmessage", (incomingMessage) => {
      console.log("incomingMessage from", incomingMessage.from);
      console.log("incoming", incomingMessage);
      const message = {
        _id: incomingMessage._id,
        text: incomingMessage.text,
        createdAt: incomingMessage.createdAt,
        user: incomingMessage.from,
      };
      console.log("message receving", message);
      onReceive(message);
    });
  });
  const onReceive = (messageData) => {
    setChat((prevMessages) => GiftedChat.append(prevMessages, messageData));
  };

  const onSend = useCallback((message) => {
    if (message.text.length > 0) {
      console.log("message", message);
      handleMessageSend(message.text, user, driver, chat, setChat, setMessage);
      setChat((prevMessages) => GiftedChat.append(prevMessages, message));
    }
  }, []);
  const renderSendIcon = (props) => (
    <TouchableOpacity
      onPress={() => props.onSend({ text: props.text }, true)}
      style={styles.sendButton}
    >
      <Image style={{}} source={SendIcon} />
    </TouchableOpacity>
  );
  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={styles.input}
        placeholder="Enter Message"
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.menuContainer}
        >
          <Image resizeMode="contain" source={backIcon} style={styles.menu} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Ali</Text>
      </View>
      <GiftedChat
        messages={chat}
        onSend={(message) => onSend(message[0])}
        renderSend={renderSendIcon}
        renderInputToolbar={renderInputToolbar}
        alwaysShowSend={true}
        showUserAvatar={true}
        showAvatarForEveryMessage={true}
        user={user}
      />
      {/* <TextInput
        style={styles.input}
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <TouchableOpacity
        onPress={() =>
          handleMessageSend(message, user, driver, chat, setChat, setMessage)
        }
      >
        <Text>Send</Text>
      </TouchableOpacity> */}
    </View>
  );
};
export default Chat;
