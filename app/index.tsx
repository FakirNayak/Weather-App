import { useRouter } from "expo-router";
import React from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={indexsty.mainview}>
      <StatusBar barStyle={"light-content"} />
      <Image
        source={require("../assets/images/fit1.jpg")}
        style={indexsty.imagecon}
      />
    </View>
  );
}

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
