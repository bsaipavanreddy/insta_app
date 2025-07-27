import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  // Wait until Clerk has finished loading auth state
  if (!isLoaded) return null;

  // If user is signed in, redirect to tabs index
  if (isSignedIn) {
    return <Redirect href="/(tabs)/index" />;
  }

  // If user is signed out, show auth stack screens
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      {/* Add other screens if needed: */}
      {/* <Stack.Screen name="signup" /> */}
    </Stack>
  );
}
