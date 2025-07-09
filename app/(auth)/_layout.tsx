import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function Layout() {
    const { isSignedIn } = useAuth();
    return isSignedIn ? (
        <Redirect href="/(tabs)" />
    ) : (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
        </Stack>
    );
}