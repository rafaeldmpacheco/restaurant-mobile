import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Provider } from "react-redux";

import "./config/ReactotronConfig";

import Dishes from "./pages/Dishes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { store } from "./store";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name="Login" component={Login}></AppStack.Screen>
          <AppStack.Screen name="SignUp" component={SignUp}></AppStack.Screen>
          <AppStack.Screen name="Dishes" component={Dishes}></AppStack.Screen>
        </AppStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
