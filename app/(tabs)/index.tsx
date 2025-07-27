import { useAuth } from "@clerk/clerk-expo";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";

export default function index() {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Optional: navigate to login screen or show a message
      console.log("Signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut} activeOpacity={0.7}>
        <Text style={{ color: "white", fontSize: 16 }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
