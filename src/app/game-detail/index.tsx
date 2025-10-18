import { fetchGameById } from "@/src/services/api";
import { useGlobalStyles } from "@/src/styles/global";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, Text, View } from "react-native";

export default function Index() {
    type Game = {
        id: number;
        name: string;
        released: string;
        background_image: string;
        description: string;
        rating: number;
        rating_top: number;
    }

    const { gameId } = useLocalSearchParams()
    const [searchInput, setSearchInput] = useState(gameId || '');
    const [result, setResult] = useState<Game[]>([])

    const styles = useGlobalStyles();

    useEffect(() => {
        async function fetchData() {
            if (!gameId) {
                router.replace("/");
                return;
            }

            try {
                const data = await fetchGameById(gameId);
                setResult(data.results);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        }

        if (gameId) {
            fetchData();
        }
    }, [gameId]);

    // async function fetchGames() {
    //     if (!searchInput) return;
    //     try {
    //         const data = await fetchGamesBySearch(searchInput);
    //         setResult(data.results);
    //         router.replace({ pathname: "/search-result", params: { searchGame: searchInput } });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {result && result.map(game => (
                            <View key={game.id} style={styles.card}>
                                <Text style={styles.subtitle}>{game.name}</Text>
                                <Image
                                    source={{ uri: game.background_image }}
                                    style={{ width: 300, height: 300, borderRadius: 16 }}
                                />
                                <Text style={styles.text}>{game.description}</Text>
                                <Text style={styles.text}>{game.released}</Text>
                                <Text style={styles.text}>{game.rating}/{game.rating_top}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
