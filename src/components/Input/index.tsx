import { Text, TextInput, View } from "react-native";
import { s } from "./styles";
import EvilIcons from '@expo/vector-icons/EvilIcons';

export function Input({ value, onChangeText, label, onSubmitEditing}) {
    return(
        <View style={s.container}>
            <Text style={s.label}>{label}</Text>
            {/* <EvilIcons name="search" size={24} color="black" /> */}
            <TextInput 
                style={s.input}
                placeholder='Search Pc, Console or Mobile Game'
                placeholderTextColor="#c5c3c3"
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
            >
            </TextInput>
        </View>
    )
} 