import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Index() {
  const router = useRouter();

  return (
    <View style={indexsty.container}>
      <StatusBar
        backgroundColor="#000000"
        barStyle="light-content"
        translucent={false}
      />

      <Image
        style={indexsty.imagecon}
        source={require("../assets/images/fit1.jpg")}
      />

      <LinearGradient
        colors={["transparent", "#18181b"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.9 }}
        style={indexsty.gradient}
      >
        {/* Animated heading */}
        <Animated.View
          entering={FadeInDown.duration(1000).springify().damping(15)}
          style={indexsty.lineartextcon}
        >
          <Text style={{ fontSize: 29, fontWeight: "bold" }}>
            <Text style={{ color: "#3B82F6" }}>Most </Text>
            <Text style={{ color: "#F97316" }}>effective workout </Text>
          </Text>
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "#fff" }}>
            for your goals
          </Text>
        </Animated.View>

        {/* ✅ Animated button with slide-up effect */}
        <Animated.View
          entering={FadeInUp.duration(1000).delay(400).springify().damping(14)}
          style={indexsty.btncon}
        >
          <TouchableOpacity
            style={indexsty.button}
            onPress={() => router.push("/Home")}
          >
            <Text style={indexsty.buttonText}>Explore Now</Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}

const indexsty = StyleSheet.create({
  btncon: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  imagecon: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  gradient: {
    width: wp(100),
    height: hp(100),
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: 60,
    gap: 32,
  },
  lineartextcon: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    width: 300,
    height: 48,
    backgroundColor: "#eab308",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 23,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 2,
  },
});
