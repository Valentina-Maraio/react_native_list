import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function FavScreen() {
  const favorites = useSelector((state) => state.user?.favs ?? []); // Use nullish coalescing operator

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Users</Text>
      <View style={styles.listContainer}>
        {favorites.map((favorite) => (
          <Text key={favorite.userId} style={styles.item}>
            {favorite.title}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
});
