import { StyleSheet } from "react-native";

import { colors } from "@/src/constants/colors";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
    marginTop: 34,
    marginBottom: 6,
    paddingHorizontal: 18,
  },

  content: {
    flex: 1, 
    backgroundColor: colors.inputBackground,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 6,
    marginRight: 12, 
  },

  input: {
    flex: 1,
    color: "#818181",
    fontFamily: "sans-serif",
    fontSize: 18,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 23,
    borderWidth: 2,
    borderColor: "#fff",
  },
});
