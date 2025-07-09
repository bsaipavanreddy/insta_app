import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { styles } from "../../styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insta App DevStage</Text>
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: 300, height: 300, resizeMode: "contain" }}
        accessibilityLabel="React logo"
      />
      <Link href="/notifications">
        <Text style={{ color: "blue", marginTop: 20 }}>Go to Notifications</Text>
      </Link>
    </View>
  );
}
