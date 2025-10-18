import { Input } from "@/src/components/Input";
import { fetchGamesBySearch } from "@/src/services/api";
import { useGlobalStyles } from "@/src/styles/global";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, KeyboardAvoidingView, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    type Game = {
        id: string;
        name: string;
        background_image: string;
    }

    const { searchGame } = useLocalSearchParams<{ searchGame?: string }>();
    const [searchInput, setSearchInput] = useState(searchGame || '');
    const [result, setResult] = useState<Game[]>([])

    const styles = useGlobalStyles();

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

    async function goToGameDetail(gameId: string) {
        router.navigate({ pathname: "/game-detail", params: { gameId } });
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <View style={styles.content}>
                    <Input label="Search Game" value={searchInput} onChangeText={setSearchInput} onSubmitEditing={fetchGames}></Input>
                </View>
                <View style={styles.body}>
                    <View style={styles.card}>
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
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
