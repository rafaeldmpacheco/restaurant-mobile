import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dishes from "./pages/Dishes";
import Detail from "./pages/Detail";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Dishes" component={Dishes}></AppStack.Screen>
        <AppStack.Screen name="Detail" component={Detail}></AppStack.Screen>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
