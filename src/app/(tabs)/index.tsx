import { useGlobalStyles } from "@/src/styles/global";
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet, useColorScheme } from "react-native";
import { fetchUpcomingGames, fetchPopularGames } from "@/src/services/api";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "@/src/constants/Colors";
import { Game } from "@/src/types";

export default function HomeScreen() {
    const globalStyles = useGlobalStyles();
    const colorScheme = useColorScheme();
    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

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
                <View style={styles(theme).body}>

                    <Text style={styles(theme).subtitle}>🎮 Jogos em Lançamento</Text>
                    {upcomingGames.map(game => (
                        <TouchableOpacity style={styles(theme).card} key={game.id}>
                            <Text style={styles(theme).text}>{game.name}</Text>
                            <Image
                                source={{ uri: game.background_image }}
                                style={styles(theme).image}
                            />
                        </TouchableOpacity>
                    ))}

                    <Text style={styles(theme).subtitle}>🔥 Populares Agora</Text>
                    <View style={styles(theme).card}>
                        <Image
                            source={{ uri: 'https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg' }}
                            style={styles(theme).image}
                        />
                    </View>
                    <View style={styles(theme).card}>
                        <Text style={styles(theme).subtitle}>Notícias</Text>
                        <Image
                            source={{ uri: 'https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg' }}
                            style={styles(theme).image}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = (theme: typeof Colors.light | typeof Colors.dark) =>
    StyleSheet.create({
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
