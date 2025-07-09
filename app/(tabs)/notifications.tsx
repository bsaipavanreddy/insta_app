import { StyleSheet, Text, View } from "react-native";
import { styles as globalStyles } from "../../styles/auth.styles"; // renamed to avoid conflict

export default function Notifications() {
  return (
    <View style={globalStyles.container}>
      <Text style={localStyles.text}>Notifications</Text>
    </View>
  );
}

const localStyles = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
});
