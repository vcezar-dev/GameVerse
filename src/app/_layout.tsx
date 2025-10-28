import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";

export default function RootLayout() {
    useEffect(() => {
    NavigationBar.setButtonStyleAsync("dark");
  }, []);

    return (
        <>
            <StatusBar style="light" />
            <Stack>
            {/* </Stack><Stack screenOptions={{ headerShown: false }}> */}
                {/* As tabs ficam dentro da pasta (tabs) */}
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                {/* Tela que não aparece nas tabs */}
                <Stack.Screen name="game/game-detail" options={{ headerShown: false }} />
            </Stack>
        </>
    );
}
