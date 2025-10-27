import { StyleSheet} from "react-native";

import { colors } from "@/src/constants/colors";

export const s = StyleSheet.create({

    container: {
        backgroundColor: colors.inputBackground,
        borderRadius: 24,
        flexDirection: "row",
        alignItems: "center",  
        marginTop: 34,   
        marginHorizontal: 18,
        marginBottom: 6,
        gap: 6
    },

    input: {        
        color: colors.inputText,
        fontFamily: "Inter-SemiBold",
        fontSize: 18,
        padding: 12,
    },
})
