import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity,ScrollView } from "react-native";
import styles from "./Chat.styles";
import { socket } from "../../Store/store";

const handleMessageSend = (message,user,driver,chat,setChat,setMessage)=>{
    const messageData = {
        from: { ...user },
        to: { ...driver },
        message: message,
      };
      setChat([...chat,message]);
      setMessage('');
      socket.emit("message", messageData);
}

const Chat = ({ navigation, user, driver }) => {
  const [message, setMessage] = useState("");
  const [chat,setChat] = useState([]);
  useEffect(() => {
    const data = {
      user: user,
      message: "user has joined chat",
    };
    socket.emit("joinRoom", data);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <TouchableOpacity onPress={()=>handleMessageSend(message,user,driver,chat,setChat,setMessage)}>
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Chat;
