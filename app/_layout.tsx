import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./Component/Home";

const StackNavigator = createNativeStackNavigator();

const RootLayout = () => {
  return (
    <StackNavigator.Navigator initialRouteName="Home">
      <StackNavigator.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </StackNavigator.Navigator>
  );
};

export default RootLayout;
