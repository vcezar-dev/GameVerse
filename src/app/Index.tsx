import { useHomeStyles } from "./styles";
import { KeyboardAvoidingView, ScrollView, Text, useColorScheme, View } from "react-native";
import Colors from "@/src/constants/Colors";

export default function Index() {
    const styles = useHomeStyles();
    
    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <View style={styles.content}> 
                    <Text style={styles.text}>Bem-vindo ao GameVerse!</Text>
                </View>
            </ScrollView>           
        </KeyboardAvoidingView>
    )       
}