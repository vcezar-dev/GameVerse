import { StyleSheet, useColorScheme } from "react-native";
import Colors from "@/src/constants/Colors";

export const useGlobalStyles = () => {
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
      paddingBottom: 16,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: theme.text,
        marginBottom: 8
    },

    subtitle: {
        fontSize: 24,
        fontWeight: '600',
        color: theme.text,
        marginBottom: 10
    },

    text: {
      color: theme.text,
      fontSize: 18,
      fontWeight: 'bold'
    },

    body: {
      flex: 1,
      alignItems: 'center',
      marginBottom: 40
    },

    card: {
      marginHorizontal: 20,
      borderRadius: 16,
      marginBottom: 20
    }
  });
};
