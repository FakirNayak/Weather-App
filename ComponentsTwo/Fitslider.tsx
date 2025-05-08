import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { fitsliderimages } from "../Constants/";

const FitImageSlider = () => {
  const carouselWidth = wp(100) - 60;

  return (
    <View style={styles.sliderContainer}>
      <Carousel
        width={carouselWidth}
        height={hp(25)}
        data={fitsliderimages}
        scrollAnimationDuration={1000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 0,
        }}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        renderItem={({ item, index }) => (
          <AnimatedCard item={item} key={index} />
        )}
      />
    </View>
  );
};

const AnimatedCard = ({ item }) => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.95);

  React.useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 600,
      easing: Easing.out(Easing.exp),
    });
    scale.value = withTiming(1, {
      duration: 600,
      easing: Easing.out(Easing.exp),
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.imageCard, animatedStyle]}>
      <Image source={item} style={styles.image} resizeMode="cover" />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.4)"]}
        style={styles.gradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  imageCard: {
    width: wp(100) - 70,
    height: hp(25),
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#e0e0e0",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    position: "relative",
    marginHorizontal: 5,
  },

  image: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default FitImageSlider;
