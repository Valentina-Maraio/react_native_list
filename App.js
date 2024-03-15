import React from "react";
import store from "./src/app/store";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import FavScreen from "./src/screens/FavScreen";
import { StyleSheet, Text, View } from "react-native";
import { Feather, AntDesign, Fontisto } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "Home",
                tabBarIcon: ({ color, size }) => (
                  <Feather name="home" size={24} color="black" />
                ),
              }}
            />
            <Tab.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              option={{
                title: "Profile",
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="profile" size={24} color="black" />
                ),
              }}
            />
            <Tab.Screen
              name="FavScreen"
              component={FavScreen}
              option={{
                title: "Favs",
                tabBarIcon: ({ color, size }) => (
                  <Fontisto name="favorite" size={24} color="black" />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
