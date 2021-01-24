import React, { useCallback, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "./firebase";
import * as firebase from "firebase";
import { useFocusEffect } from "@react-navigation/native";

const Message = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  useFocusEffect(
    useCallback(() => {
      const unsubscribe = db
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
      return () => {
        unsubscribe();
      };
    }, [])
  );

  const sendMessage = () => {
    console.log("Sent a msg ", input);
    db.collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={messages}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => alert(item.data.message)}>
            <Text>{item.data.message}</Text>
          </TouchableOpacity>
        )}
      />

      <Text>Message screen</Text>
      <TextInput
        value={input}
        onSubmitEditing={sendMessage}
        onChangeText={(text) => setInput(text)}
        placeholder="Type a message"
      />
      <Button
        style={styles.sendButton}
        title="Send Message"
        onPress={sendMessage}
      />
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({});
