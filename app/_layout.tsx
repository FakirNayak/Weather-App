import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";

const StackNavigator = createNativeStackNavigator();

const RootLayout = () => {
  return (
    // this is the weather app router
    // <StackNavigator.Navigator initialRouteName="Home">
    //   <StackNavigator.Screen
    //     name="Home"
    //     component={Home}
    //     options={{ headerShown: false }}
    //   />
    // </StackNavigator.Navigator>

    // this is Fitness app router

    <View style={indexsty.mainview}>
      <StatusBar barStyle={"light-content"} />
      <Image
        source={require("../assets/images/fit1.jpg")}
        style={indexsty.imagecon}
      />
    </View>
  );
};

export default RootLayout;

const indexsty = StyleSheet.create({
  mainview: {
    flex: 1,
    display: "flex",
    // justifyContent: "flex-end",
  },
  imagecon: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
