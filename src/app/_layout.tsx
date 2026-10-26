import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      // headerTitle: "MacroZone", // To set a custom title for the header
      headerShown: false // To hide the header for all screens in the stack
    }} />
  );
}
