// app/Exercises.tsx
import { useRouter } from "expo-router"; // Import useRouter
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Exercises() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: { fontSize: 24, fontWeight: "bold" },
  backButton: {
    width: 90,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#333",
    borderRadius: 10,
  },
  backText: { color: "#fff", fontSize: 16 },
});
