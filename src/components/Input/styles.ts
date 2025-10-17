import { StyleSheet, useColorScheme } from "react-native";
import Colors from "@/src/constants/Colors";

export const useInputStyles = () => {
    const colorScheme = useColorScheme();
    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

    return StyleSheet.create({

        container: {
            marginBottom: 16,
        },

        label: {
            color: theme.label,
            marginBottom: 8,
            fontSize: 14
        },

        input: {
            backgroundColor: theme.inputBackground,
            color: theme.inputText,
            fontSize: 18,
            fontWeight: 'bold',
            padding: 12,
            borderRadius: 8
        }
    })
}