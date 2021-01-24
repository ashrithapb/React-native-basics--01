import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      console.log("mounted");
      return () => {
        console.log("unmounted");
      };
    })
  );
  return (
    <View>
      <Text>Home screen</Text>
      <Button
        title="Go to my messages"
        onPress={() => navigation.navigate("Messages")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
