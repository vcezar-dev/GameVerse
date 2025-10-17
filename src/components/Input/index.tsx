import { Text, TextInput, View } from "react-native";
import { useInputStyles } from "./styles";
import EvilIcons from '@expo/vector-icons/EvilIcons';

export function Input({ value, onChangeText, label, onSubmitEditing}) {
    const styles = useInputStyles();

    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {/* <EvilIcons name="search" size={24} color="black" /> */}
            <TextInput 
                style={styles.input}
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