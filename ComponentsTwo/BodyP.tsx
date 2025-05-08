import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { bodyparts } from "../Constants";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 90) / 2;

export default function BodyP() {
  const router = useRouter();

  const handlePress = (item) => {
    router.push("/Exercises");
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)} activeOpacity={0.8}>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
          style={styles.gradient}
        >
          <Text style={styles.itemName}>{item.name}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.bodypmain}>
      <Text style={styles.headerText}>Exercises</Text>
      <FlatList
        data={bodyparts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bodypmain: {
    marginTop: 30,
    paddingHorizontal: 10,
    flex: 1,
  },
  headerText: {
    color: "#ffffff",
    fontSize: 24,
    marginLeft: 10,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    width: CARD_WIDTH,
    height: 220,
    margin: 10,
    borderRadius: 15,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#111",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 12,
    alignItems: "center",
  },
  itemName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
