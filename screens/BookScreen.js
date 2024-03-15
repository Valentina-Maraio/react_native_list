import { React, useEffect } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { fetchUsers, addToFavorites } from "../app/slices/bookSlice";
import { useSelector, useDispatch } from "react-redux";

export default function BookScreen() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddToFavorites = (id) => {
    dispatch(addToFavorites(id));
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.buttons}>
      <Text>{item.id}</Text>
      <Button onPress={() => handleAddToFavorites(item.id)} title="+" />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20, // Add horizontal padding for spacing
    paddingTop: 20, // Add padding top for spacing
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between", // Add space between items
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Background color for each item
    paddingVertical: 15, // Vertical padding for each item
    paddingHorizontal: 20, // Horizontal padding for each item
    marginBottom: 10, // Margin bottom to separate items
    borderRadius: 10, // Rounded corners for each item
    width: 300, // Make each item occupy the entire width
  },
  buttonText: {
    marginLeft: 10, // Spacing between text and button
  },
});
