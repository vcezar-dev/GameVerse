import Colors from "@/src/constants/colors";
import { useColorScheme } from "react-native";

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  return { theme };
};
