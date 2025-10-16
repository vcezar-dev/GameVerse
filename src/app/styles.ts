import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";
import { useColorScheme } from "react-native";

export const useHomeStyles = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },

    ScrollView: {
      flexGrow: 1,
    },

    content: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 80,
      paddingBottom: 24,
    },

    text: {
      color: theme.text,
      fontSize: 18,
      fontWeight: "bold",
    },
  });
};
