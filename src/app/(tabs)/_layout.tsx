import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopColor: "#222",
          height: 60,
        },
        tabBarActiveTintColor: "#32CD32",
        tabBarInactiveTintColor: "#ccc",
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "index") iconName = focused ? "home" : "home-outline";
          else if (route.name === "search-result") iconName = focused ? "search" : "search-outline";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="search-result"
        options={{
          title: "Search",
        }}
      />
    </Tabs>
  );
}
