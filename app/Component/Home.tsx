import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Image
        blurRadius={5}
        source={require("../../assets/images/bgimage2.jpeg")}
        style={mystyles.imagesbg}
      />
      <SafeAreaView style={mystyles.myinputmain}>
        <View style={mystyles.scon}>
          <View style={mystyles.smain}>
            <TextInput
              placeholder="Search City"
              placeholderTextColor="#fff"
              style={mystyles.input}
            />
            <TouchableOpacity style={mystyles.iconContainer}>
              <FontAwesome name="search" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const mystyles = StyleSheet.create({
  imagesbg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  myinputmain: {
    display: "flex",
    flex: 1,
  },
  scon: {
    paddingHorizontal: 2,
  },
  smain: {
    borderRadius: 30,
    padding: 17,
    elevation: 0,
    marginTop: 20,
    shadowColor: "transparent",
  },
  input: {
    height: 50,
    color: "white",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
    fontSize: 14,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    letterSpacing: 3,
  },
  iconInside: {
    position: "absolute",
    right: 15,
    top: 12,
    height: 26,
    width: 26,
    justifyContent: "center",
    alignItems: "center",
  },
});
