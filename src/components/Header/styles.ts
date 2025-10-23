import { StyleSheet } from "react-native";
import { useTheme } from "@/src/hooks/useTheme";

const { theme } = useTheme();

export const s = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 7, 
        alignItems: "center",
        padding: 16
    },
    title: {
        color: theme.text,
        fontSize: 16,
        flex: 1
    }
})