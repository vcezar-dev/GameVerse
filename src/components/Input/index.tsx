import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { s } from "./styles";
import { colors } from "@/src/constants/colors";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

type Props = {
    value: string;
    onChangeText: (text: string) => void;
    onSubmitEditing?: () => void;
    onClear?: () => void;
}

async function goToUserSettings() {
    router.navigate({ pathname: '/(tabs)/settings' });
}

export function Input({ value, onChangeText, onSubmitEditing, onClear }: Props) {
    return (
        <View style={s.container}>
            <View style={s.content}>
                <FontAwesome name="search" size={18} color="#818181" />

                <TextInput
                    style={s.input}
                    placeholder='Search apps & Games'
                    placeholderTextColor="#818181"
                    value={value}
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmitEditing}
                >
                </TextInput>

                <TouchableOpacity onPress={onClear}>
                    {value != '' ? (<Feather name="x" size={20} color="#818181" />): null}
                </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.7} onPress={goToUserSettings}>
                <Image
                    style={s.avatar}
                    source={{
                        uri: 'https://imgs.search.brave.com/Aw8gZDy7tcqfy1ui4zsatH6oNHQx9EqZFBF7sAQnfCo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODVlNGJmM2NiMTFi/MjI3NDkxYzMzOWEu/cG5n',
                    }}
                />
            </TouchableOpacity>
        </View>
    )
} 