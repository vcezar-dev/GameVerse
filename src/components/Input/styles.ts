import { StyleSheet, useColorScheme } from "react-native";

import { colors } from "@/src/constants/colors";

export const s = StyleSheet.create({

    container: {
        marginBottom: 16,
    },

    label: {
        color: colors.label,
        marginBottom: 8,
        fontSize: 14
    },

    input: {
        backgroundColor: colors.inputBackground,
        color: colors.inputText,
        fontSize: 18,
        fontWeight: 'bold',
        padding: 12,
        borderRadius: 8
    }
})
