import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Input } from "@/src/components/Input";

import { Game } from "@/src/types";
import { colors } from "@/src/constants/colors";
import { fetchGamesBySearch } from "@/src/services/api";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

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
        <KeyboardAvoidingView style={styles.container}>

            <Input value={searchInput} onChangeText={setSearchInput} onSubmitEditing={fetchGames}></Input>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.content}>
                    {result && result.map(game => (
                        <TouchableOpacity key={game.id} activeOpacity={0.8} style={styles.card} onPress={() => goToGameDetail(game.id)}>
                            <Image
                                source={{ uri: game.background_image }}
                                style={styles.image}
                            />
                            <View style={styles.gameInfo}>
                                <Text style={styles.gameTitle}>{game.name}</Text>

                                <View style={styles.platformIcon}>

                                    {game.parent_platforms && game.parent_platforms.map((p) => {
                                        let icon = null;

                                        switch (p.platform.name.toLowerCase()) {
                                            case "pc":
                                                icon = <FontAwesome name="windows" size={12} color="#FFF" />;
                                                break;
                                            case "linux":
                                                icon = <FontAwesome name="linux" size={12} color="#FFF" />;
                                                break;
                                            case "apple macintosh":
                                                icon = <FontAwesome name="apple" size={12} color="#FFF" />;
                                                break;
                                            case "playstation":
                                                icon = <FontAwesome5 name="playstation" size={12} color="#FFF" />;
                                                break;
                                            case "xbox":
                                                icon = <FontAwesome5 name="xbox" size={12} color="#FFF" />;
                                                break;
                                            case "nintendo":
                                                icon = <FontAwesome name="gamepad" size={12} color="#FFF" />;
                                                break;
                                            case "ios":
                                                icon = <MaterialCommunityIcons name="apple-ios" size={12} color="#FFF" />;
                                                break;
                                            case "android":
                                                icon = <FontAwesome name="android" size={12} color="#FFF" />
                                                break;
                                            default:
                                                icon = <Text style={{ color: "#FFF" }}>{p.platform.name}</Text>
                                                break;
                                        }

                                        return (
                                            <View key={p.platform.id} style={styles.icon}>
                                                {icon}
                                            </View>
                                        );
                                    })}
                                </View>

                                {game.genres && <View style={styles.genresContainer}>
                                    {game.genres.map((g, index) => (
                                        <View key={index} style={styles.genreBadge}>
                                            <Text style={styles.genreText}>{g.name}</Text>
                                        </View>
                                    ))}
                                </View>}

                                <View style={styles.gameDetails}>
                                    <View style={styles.ratingRow}>
                                        <Ionicons name="star" size={12} color="#FFD700" />
                                        <Text style={styles.rating}>{game.rating.toFixed(1)}</Text>
                                        {game.metacritic ? (
                                            <View
                                                style={[
                                                    {
                                                        backgroundColor:
                                                            game.metacritic >= 75
                                                                ? "#4CAF50" 
                                                                : game.metacritic >= 50
                                                                    ? "#FFC107" 
                                                                    : "#F44336", 
                                                    }, styles.metacriticBadge
                                                ]}
                                            >
                                                <Text style={styles.metacriticText}>
                                                    {game.metacritic}
                                                </Text>
                                            </View>
                                        ) : (<View style={{ width: 50 }} />)}
                                    </View>

                                    <View>
                                        <Text style={styles.releaseDate}>{game.released}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        gap: 12,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 80,
    },
    card: {
        flexDirection: "row",
        backgroundColor: colors.cardBackground,
        borderRadius: 12,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    image: {
        width: 128,
        height: 128,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 0,
    },
    gameInfo: {
        flex: 1,
        padding: 10,
        gap: 12,
        justifyContent: 'space-between',
    },
    gameTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffffff",
        flexWrap: 'wrap',
        flexShrink: 1,
        width: '100%',
    },

    platformIcon: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    icon: {
        marginRight: 12
    },

    // GENRES & RATING

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

    gameDetails: {
        width: 220,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    rating: {
        color: "#FFD700",
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 4,
    },
    metacriticBadge: {
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


    releaseDate: {
        color: "#c4c4c4ff",
        fontSize: 12,
    },
});
