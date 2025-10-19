import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }} edges={["bottom"]}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: "#121212",
            borderTopColor: "#222",
            height: 50,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            paddingBottom: 5,
          },
          tabBarActiveTintColor: "#32CD32",
          tabBarInactiveTintColor: "#ccc",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="search-result"
          options={{
            title: "Search",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
