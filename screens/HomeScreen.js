import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";
import BookScreen from "./BookScreen";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen page</Text>
      <View style={styles.books}>
        <Text>Books</Text>
        <BookScreen/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "start",
    justifyContent: "start",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  books: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
});
