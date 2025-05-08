import BodyP from "@/ComponentsTwo/BodyP";
import FitSlider from "@/ComponentsTwo/Fitslider";
import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import "react-native-gesture-handler";

export default function Home() {
  return (
    <SafeAreaView style={homestyle.homemaincon}>
      <StatusBar
        backgroundColor="#000000"
        barStyle="light-content"
        translucent={false}
      />

      <View style={homestyle.punchmain}>
        <View style={homestyle.punchdown}>
          <Text style={homestyle.headingTop}>Get Fit</Text>
          <Text style={homestyle.headingBottom}>Stay Strong</Text>
        </View>

        <View style={homestyle.rightRow}>
          <View style={homestyle.imageWrapper}>
            <Image
              source={require("../assets/images/homel.avif")}
              style={homestyle.imagecon}
              resizeMode="cover"
            />
          </View>
          {/* <View style={homestyle.bellWrapper}>
            <Ionicons name="notifications" size={24} color="#fff" />
          </View> */}
        </View>
      </View>
      {/* image Slider */}
      <FitSlider />
      {/* next part */}
      <View style={{ flex: 1 }}>
        <BodyP />
      </View>
    </SafeAreaView>
  );
}

const homestyle = StyleSheet.create({
  homemaincon: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingHorizontal: 16,
  },
  punchmain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  punchdown: {
    flex: 1,
    marginTop: 20,
  },
  headingTop: {
    fontSize: 34,
    position: "relative",
    left: 10,
    fontWeight: "bold",
    color: "#facc15",
    letterSpacing: 3,
  },
  headingBottom: {
    position: "relative",
    left: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "#3b82f6",
    letterSpacing: 2,
  },
  rightRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  bellWrapper: {
    width: 45,
    height: 45,
    backgroundColor: "#1f2937",
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
  },
  imageWrapper: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#fff",
  },
  imagecon: {
    width: "100%",
    height: "100%",
  },
});
