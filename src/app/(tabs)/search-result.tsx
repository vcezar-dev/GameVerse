import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native";

import { Input } from "@/src/components/Input";
import { Header } from "@/src/components/Header";

import { Game } from "@/src/types";
import { colors } from "@/src/constants/colors";
import { fetchGamesBySearch } from "@/src/services/api";

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
        <KeyboardAvoidingView style={{ flex: 1}}>

            <Header />

            <ScrollView>
                <View>
                    <Input label="Search Game" value={searchInput} onChangeText={setSearchInput} onSubmitEditing={fetchGames}></Input>
                </View>
                <View style={styles.body}>
                    {result && result.map(game => (
                        <View key={game.id} style={styles.card}>

                            <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]} onPress={() => goToGameDetail(game.id)}>
                                <Text style={styles.subtitle}>{game.name}</Text>
                                <Image
                                    source={{ uri: game.background_image }}
                                    style={{ width: 300, height: 300, borderRadius: 16 }}
                                />
                            </Pressable>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingBottom: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 8,
        color: colors.text,
    },
    subtitle: {
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 10,
        color: colors.text,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 8,
        color: colors.text,
    },
    body: {
        flex: 1,
        alignItems: "center",
        marginBottom: 40,
    },
    card: {
        marginBottom: 20,
        borderRadius: 12,
        overflow: "hidden",
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
