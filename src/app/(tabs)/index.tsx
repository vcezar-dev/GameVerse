import { fetchPopularGames, fetchUpcomingGames } from "@/src/services/api";
import { useGlobalStyles } from "@/src/styles/global";
import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Game } from "@/src/types";

import { useTheme } from "@/src/hooks/useTheme";

const { theme } = useTheme();

export default function HomeScreen() {
    const globalStyles = useGlobalStyles();

    const [popularGames, setPopularGames] = useState<Game[]>([]);
    const [upcomingGames, setUpcomingGames] = useState<Game[]>([]);

    useEffect(() => {
        async function loadGames() {
            try {
                const upcomingData = await fetchUpcomingGames();
                const popularGameData = await fetchPopularGames();

                setUpcomingGames(upcomingData.results);
                setPopularGames(popularGameData.results);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        }

        loadGames();
    }, []);

    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.headerTitle}>GameVerse</Text>
            </View>

            <ScrollView style={globalStyles.ScrollView}>
                <View style={styles.body}>
                    <View>
                        <Text style={styles.subtitle}>🎮 Jogos em Lançamento</Text>

                        <FlatList
                            data={upcomingGames}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.card}>
                                    <Text style={styles.text}>{item.name}</Text>
                                    <Image
                                        source={{ uri: item.background_image }}
                                        style={styles.image}
                                    />
                                </TouchableOpacity>
                            )}
                            horizontal 
                            showsHorizontalScrollIndicator={false}
                            scrollEnabled={false}                         
                        />
                    </View>

                    <Text style={styles.subtitle}>🎮 Jogos em Lançamento</Text>
                    {upcomingGames.map(game => (
                        <TouchableOpacity style={styles.card} key={game.id}>
                            <Text style={styles.text}>{game.name}</Text>
                            <Image
                                source={{ uri: game.background_image }}
                                style={styles.image}
                            />
                        </TouchableOpacity>
                    ))}

                    <Text style={styles.subtitle}>🔥 Populares Agora</Text>
                    <View style={styles.card}>
                        <Image
                            source={{ uri: 'https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg' }}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.subtitle}>Notícias</Text>
                        <Image
                            source={{ uri: 'https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg' }}
                            style={styles.image}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
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
        color: theme.text,
    },
    subtitle: {
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 10,
        color: theme.text,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 8,
        color: theme.text,
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
        backgroundColor: theme.inputBackground,
        padding: 10,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
});
