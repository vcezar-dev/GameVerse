import { useTheme } from "@/src/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const { theme } = useTheme();

  return (
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: theme.background,
            borderTopColor: theme.background,
            height: 50,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            paddingBottom: 5,
            paddingTop: 3
          },
          tabBarLabelStyle: {
            fontWeight: "bold",
            marginTop: 3,
            fontSize: 12
          },
          tabBarActiveTintColor: theme.tabIconSelected,
          tabBarInactiveTintColor: theme.tabIconDefault,

          // Mudar ícone quando não selecionado
          tabBarIcon: ({ color, size, focused }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "home-outline";

            if (route.name === "index")
              iconName = focused ? "home" : "home-outline";
            else if (route.name === "search-result")
              iconName = focused ? "search" : "search-outline";
            else if (route.name === "settings")
              iconName = focused ? "settings" : "settings-outline";

            return <Ionicons name={iconName} size={22} color={color} />;
          }
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
        <Tabs.Screen
          name="settings"
          options={{
            title: "Config",
          }}
        />
      </Tabs>
  );
}
