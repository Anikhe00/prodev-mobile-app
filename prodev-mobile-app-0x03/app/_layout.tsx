import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // prettier-ignore
    <Stack screenOptions={{
        headerShown: false,
      }}
    />
  );
}
