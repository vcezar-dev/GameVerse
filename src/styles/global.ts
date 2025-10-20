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

    header: {
      width: '100%',
      paddingVertical: 16,
      paddingHorizontal: 24,
      backgroundColor: theme.background, 
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between', 
    },

    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.text,
    },
  });
};
