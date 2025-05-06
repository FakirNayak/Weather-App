import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);

  const formatTime = (dateTimeString) => {
    const timePart = dateTimeString.split(" ")[1];
    const [hour, minute] = timePart.split(":");
    const h = parseInt(hour, 10);
    const suffix = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    return `${hour12}:${minute} ${suffix}`;
  };

  const fetchWeather = async () => {
    if (!query.trim()) {
      Alert.alert("Please enter a city name");
      return;
    }

    try {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=e1d627c554a29fc8d83009c8bd38a8e8&query=${encodeURIComponent(
          query
        )}`
      );
      const data = await response.json();

      if (data.error) {
        Alert.alert("Invalid Location", "Please enter a valid city.");
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (error) {
      Alert.alert("Error", "Unable to fetch weather. Please try again.");
    }
  };

  return (
    <View style={styles.root}>
      <Image
        source={require("../../assets/images/night.webp")}
        style={styles.backgroundImage}
        blurRadius={8}
      />

      {/* Search Bar */}
      <View style={styles.container}>
        <TextInput
          placeholder="Search city "
          placeholderTextColor="#555"
          value={query}
          onChangeText={setQuery}
          style={styles.input}
          returnKeyType="search"
          onSubmitEditing={fetchWeather}
        />
        <TouchableOpacity style={styles.iconContainer} onPress={fetchWeather}>
          <FontAwesome name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Weather Info */}
      {weather && (
        <View style={styles.resultContainer}>
          <Text style={styles.locationName}>
            {weather.location.name}, {weather.location.country}
          </Text>

          {/* Weather Icon */}
          <Image
            source={{ uri: weather.current.weather_icons[0] }}
            style={styles.weatherIcon}
          />

          <Text style={styles.tempText}>{weather.current.temperature}°C</Text>
          <Text style={styles.weatherDesc}>
            {weather.current.weather_descriptions[0]}
          </Text>
          {/* Time with Icon */}
          <View style={styles.timeRow}>
            <FontAwesome
              name="clock-o"
              size={18}
              color="#ccc"
              style={{ marginRight: 6 }}
            />
            <Text style={styles.timeText}>
              {formatTime(weather.location.localtime)}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: "relative",
    backgroundColor: "#000",
  },
  backgroundImage: {
    position: "absolute",
    width: width,
    height: height,
    top: 0,
    left: 0,
    resizeMode: "cover",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 10,
    height: 50,
    margin: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.5,
    elevation: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  iconContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    padding: 8,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  locationName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 4,
  },
  weatherDesc: {
    color: "#ddd",
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 10,
  },
  weatherIcon: {
    width: 120, // Adjust to fit as per your design needs
    height: 120, // Adjust to fit as per your design needs
    resizeMode: "contain", // Ensures image is not stretched
    marginBottom: 10,
    shadowColor: "#000", // Adds shadow effect for a 3D look
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, // Android shadow
    backgroundColor: "transparent", // This removes any background color
  },

  tempText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 12,
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  timeText: {
    color: "#ccc",
    fontSize: 18,
  },
});
