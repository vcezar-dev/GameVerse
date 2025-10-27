import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native";

import { Input } from "@/src/components/Input";
import { Header } from "@/src/components/Header";

import { Game } from "@/src/types";
import { colors } from "@/src/constants/colors";
import { fetchGamesBySearch } from "@/src/services/api";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
    const { searchGame } = useLocalSearchParams<{ searchGame?: string }>();
    const [searchInput, setSearchInput] = useState(searchGame || '');
    const [result, setResult] = useState<Game[]>([])

    useEffect(() => {
        async function fetchData() {
            if (!searchGame) {
                router.replace("/");
                return;
            }

            try {
                const data = await fetchGamesBySearch(searchGame);
                setResult(data.results);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        }

        if (searchGame) {
            fetchData();
        }
    }, [searchGame]);


    async function fetchGames() {
        if (!searchInput) return;
        try {
            const data = await fetchGamesBySearch(searchInput);
            setResult(data.results);
            router.replace({ pathname: "/search-result", params: { searchGame: searchInput } });
        } catch (error) {
            console.log(error);
        }
    }

    async function goToGameDetail(gameId: number) {
        router.navigate({ pathname: "/game/game-detail", params: { gameId } });
    }

    return (
        <View style={styles.container}>

            <Input value={searchInput} onChangeText={setSearchInput} onSubmitEditing={fetchGames}></Input>
            
            <ScrollView showsVerticalScrollIndicator={false}>

                {result && result.map(game => (
                    <View key={game.id} style={styles.card}>
                        <TouchableOpacity onPress={() => goToGameDetail(game.id)}>
                            <Text style={styles.subtitle}>{game.name}</Text>
                            <Image
                                source={{ uri: game.background_image }}
                                style={{ width: 300, height: 300, borderRadius: 16 }}
                            />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    section: {
        width: "100%",
        gap: 12,
        paddingBottom: 10,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 8,
        color: colors.title,
    },
    subtitle: {
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 10,
        color: colors.title,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 8,
        color: colors.text,
    },
    card: {
        marginBottom: 20,
        borderRadius: 12,

        alignItems: "center",
        backgroundColor: colors.inputBackground,
        padding: 10,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
});
