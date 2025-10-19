import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* As tabs ficam dentro da pasta (tabs) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* Tela que não aparece nas tabs */}
      <Stack.Screen name="game-detail" options={{ headerShown: false }} />
    </Stack>
  );
}
