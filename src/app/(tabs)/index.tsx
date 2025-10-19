import { Input } from "@/src/components/Input";
import { useGlobalStyles } from "@/src/styles/global";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, Text, View } from "react-native";

export default function Index() {
    const styles = useGlobalStyles();
    const router = useRouter();
    const [searchGame, setSearchGame] = useState('')

    async function goToSearchPage() {
        router.push("/search-result")
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <View style={styles.content}>
                    <Text style={styles.title}>Bem-vindo ao GameVerse!</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.card}>
                        <Text style={styles.subtitle}>Jogos em destaque</Text>
                        <Image
                            source={{ uri: 'https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg' }}
                            style={{ width: 300, height: 400 }}
                        />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.subtitle}>Notícias</Text>
                        <Image
                            source={{ uri: 'https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg' }}
                            style={{ width: 300, height: 400 }}
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}