import { fetchPopularGames, fetchUpcomingGames } from "@/src/services/api";
import { useEffect, useState } from "react";
import {
    FlatList,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { Header } from "@/src/components/Header";
import { Game } from "@/src/types";
import { colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
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
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />

                <Ionicons name="game-controller" size={40} color="#555" />

                <View style={styles.section}>
                    <Text style={styles.title}>🎮 Jogos em Lançamento</Text>

                    <FlatList
                        data={upcomingGames}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={0.8} style={styles.card}>
                                <ImageBackground
                                    source={{ uri: item.background_image }}
                                    style={styles.image}
                                    imageStyle={styles.imageRadius}
                                >
                                    <View style={styles.overlay} />
                                    <Text style={styles.gameTitle}>{item.name}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.content}
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>🔥 Populares Agora</Text>

                    <FlatList
                        data={popularGames}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={0.8} style={styles.card}>

                                <ImageBackground
                                    source={{ uri: item.background_image }}
                                    style={styles.image}
                                    imageStyle={styles.imageRadius}
                                >
                                </ImageBackground>
                                <View style={styles.gameInfoPopular}>
                                    <Text style={styles.gameTitlePopular}>{item.name}</Text>
                                    <View style={styles.ratingRow}>
                                        <Ionicons name="star" size={16} color="#FFD700" />
                                        <Text style={styles.rating}>{item.rating.toFixed(1)}</Text>
                                        {item.metacritic && (
                                            <View style={styles.metacriticBadge}>
                                                <Text style={styles.metacriticText}>
                                                    {item.metacritic}
                                                </Text>
                                            </View>
                                        )}
                                    </View>
                                    {item.genres && <View style={styles.genresContainer}>
                                        {item.genres.map((g, index) => (
                                            <View key={index} style={styles.genreBadge}>
                                                <Text style={styles.genreText}>{g.name}</Text>
                                            </View>
                                        ))}
                                    </View>}
                                </View>
                            </TouchableOpacity>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.content}
                    />
                </View>

                <View style={[styles.section, { paddingBottom: 60 }]}>
                    <Text style={styles.title}>📰 Notícias</Text>
                    <Text style={styles.newsPlaceholder}>
                        Em breve, atualizações sobre o mundo dos games!
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    // Sessões
    section: {
        width: "100%",
        gap: 12,
        paddingBottom: 20,
    },
    title: {
        fontSize: 22,
        fontFamily: "Inter-SemiBold",
        color: colors.text,
        marginLeft: 20,
        marginTop: 4,
    },
    content: {
        paddingHorizontal: 20,
    },
    card: {
        width: 280,
        marginRight: 16,
        backgroundColor: colors.tint,
        borderRadius: 16,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    image: {
        width: "100%",
        height: 180,
        backgroundColor: "#2a2a3e",
    },
    imageRadius: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.35)",
    },
    gameTitle: {
        fontFamily: "Inter-Bold",
        fontSize: 18,
        color: "#fff",
        padding: 12,
    },

    // ================= POPULAR GAMES ==================================================================
    gameInfoPopular: {
        padding: 12,
    },
    overlayPopular: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.4)",
    },
    gameTitlePopular: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },
    rating: {
        color: "#FFD700",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 4,
    },
    metacriticBadge: {
        backgroundColor: "#4CAF50",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        marginLeft: 8,
    },
    metacriticText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
    genresContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 6,
    },
    genreBadge: {
        backgroundColor: "#8b85ff",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    genreText: {
        color: "#fff",
        fontSize: 10,
        fontFamily: "Inter-SemiBold",
    },

    // Notícias
    newsPlaceholder: {
        fontFamily: "Inter-Regular",
        color: colors.label,
        fontSize: 16,
        marginLeft: 20,
        opacity: 0.7,
    },
});
