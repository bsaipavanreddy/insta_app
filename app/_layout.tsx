// app/_layout.tsx

import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function RootLayout() {
  return (
  <ClerkAndConvexProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <Slot />
          </SafeAreaView>
        </SafeAreaProvider>
      </ClerkAndConvexProvider>
     
  );
}
