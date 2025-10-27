import { TextInput, View } from "react-native";
import { s } from "./styles";
import { colors } from "@/src/constants/colors";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
    value: string;
    onChangeText: (text: string) => void;
    onSubmitEditing?: () => void;
}

export function Input({ value, onChangeText, onSubmitEditing}: Props) {
    return(
        <View style={s.container}>
            <FontAwesome style={{ left: 10 }} name="search" size={18} color={colors.inputText} /> 
            <TextInput 
                style={s.input}
                placeholder='Search Pc, Console or Mobile Game'
                placeholderTextColor={colors.inputText}
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
            >
            </TextInput>
        </View>
    )
} 