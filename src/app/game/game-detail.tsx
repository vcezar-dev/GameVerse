import { fetchGameById } from "@/src/services/api";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Game } from "@/src/types";
import { StyleSheet } from "react-native";
import { colors } from "@/src/constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { formatDateToGameDetails } from "@/src/utils/formatDate";

export default function Index() {
    const { gameId } = useLocalSearchParams<{ gameId?: string }>();
    const [gameDetails, setGameDetails] = useState<Game | null>(null)

    useEffect(() => {
        async function fetchData() {
            if (!gameId) {
                router.replace("/");
                return;
            }

            try {
                const data = await fetchGameById(gameId);
                setGameDetails(data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        }

        if (gameId) {
            fetchData();
        }
    }, [gameId]);

    function toGameWebsite(website: string) {
        const url = website;

        Linking.canOpenURL(url)
            .then((supported) => {
                if (supported) {
                    Linking.openURL(url);
                } else {
                    console.log("Não é possível abrir o link:", url);
                }
            })
            .catch((err) => console.error("Erro ao abrir link:", err));
    }

    function back(){
        router.back()
    }

    return (
        <SafeAreaView style={styles.container} edges={['bottom']}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.6} style={styles.headerContent} onPress={back}>
                    <Ionicons name="arrow-back" size={22} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Back</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    {gameDetails && (
                        <View>
                            <Image
                                source={{ uri: gameDetails.background_image }}
                                style={styles.image}
                            />

                            <View style={styles.card}>
                                <Text style={styles.title}>{gameDetails.name}</Text>

                                <View style={styles.mainDetails}>

                                    <View style={styles.ratingWrapper}>
                                        <Ionicons name="star" size={20} color="#ffffffff" />
                                        <Text style={styles.ratingText}>{gameDetails.rating.toFixed(1)}</Text>
                                        <Text style={styles.mainDetailsText}>Rating</Text>
                                    </View>

                                    <View style={styles.metacriticWrapper}>
                                        <Ionicons name="trophy" size={20} color="#FFF" />
                                        {gameDetails.metacritic ? (
                                            <View>
                                                <Text style={[
                                                    {
                                                        color:
                                                            gameDetails.metacritic >= 75
                                                                ? "#4CAF50"
                                                                : gameDetails.metacritic >= 50
                                                                    ? "#FFC107"
                                                                    : "#F44336",
                                                    }, styles.metacriticText
                                                ]}>
                                                    {gameDetails.metacritic}
                                                </Text>
                                            </View>
                                        ) : (
                                        <View>
                                            <Text style={styles.metacriticText}>?</Text>
                                        </View>)}
                                        <Text style={styles.mainDetailsText}>Metacritic</Text>
                                    </View>
                                    <View style={styles.releaseWrapper}>
                                        <Ionicons name="calendar-sharp" size={20} color="#FFF" />
                                        <Text style={styles.releaseText}>{formatDateToGameDetails(gameDetails.released)}</Text>
                                        <Text style={styles.mainDetailsText}>Release</Text>
                                    </View>

                                </View>

                                <View style={styles.description}>
                                    <Text style={styles.subtitle}>About</Text>
                                    <Text style={styles.descriptionText}>{gameDetails.description_raw}</Text>
                                </View>

                                <View>
                                    <Text style={styles.subtitle}>Genres</Text>
                                    {gameDetails.genres && <View style={styles.genresContainer}>
                                        {gameDetails.genres.map((g, index) => (
                                            <View key={index} style={styles.genreBadge}>
                                                <Text style={styles.genreText}>{g.name}</Text>
                                            </View>
                                        ))}
                                    </View>}
                                </View>

                                <View>
                                    <Text style={styles.subtitle}>Platforms</Text>
                                    {gameDetails.parent_platforms && <View style={styles.platformsContainer}>
                                        {gameDetails.parent_platforms.map((p) => (
                                            <View key={p.platform.id} style={styles.genreBadge}>
                                                <Text style={styles.platformText}>{p.platform.name}</Text>
                                            </View>
                                        ))}</View>}
                                </View>

                                <View>
                                    <Text style={styles.subtitle}>Developers</Text>
                                    {gameDetails.developers && gameDetails.developers.map(p => (
                                        <Text key={p.id} style={styles.text}>
                                            {p.name}
                                        </Text>
                                    ))}
                                </View>

                                <View>
                                    <Text style={styles.subtitle}>Publisher</Text>
                                    {gameDetails.publishers && gameDetails.publishers.map(p => (
                                        <Text key={p.id} style={styles.text}>
                                            {p.name}
                                        </Text>
                                    ))}
                                </View>

                                <TouchableOpacity activeOpacity={0.6} style={styles.website} onPress={() => toGameWebsite(gameDetails.website)}>
                                    <View style={styles.wrapperWebsite}>
                                        <Fontisto name="world-o" size={20} color="#FFF" />

                                        <Text style={styles.textWebsite}>Visit Website</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )}
                </View>
            </ScrollView >
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },

    header: {
        backgroundColor: '#1E1F21',
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 34,
        padding: 14,
        borderBottomWidth: 2,
        borderColor: "#504f4fff",
        gap: 12
    },

    headerContent: {
        
    },

    headerText: {
        color: colors.title,
        fontSize: 20,
        fontWeight: "bold"
    },

    content: {
        backgroundColor: colors.background,
        paddingBottom: 20
    },
    image: {
        width: "100%",
        height: 400
    },
    card: {
        padding: 16,
        gap: 16
    },
    title: {
        fontSize: 26,
        color: colors.title,
        fontFamily: "sans-serif-medium",
        fontWeight: "bold",
    },

    // ====================== RATING / METACRITIC / RELEASED

    mainDetails: {
        backgroundColor: colors.cardBackground,
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    mainDetailsText: {
        color: "#ffffffb9",
        fontSize: 10
    },

    ratingWrapper: {
        alignItems: "center",
        gap: 3
    },

    ratingText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },

    metacriticWrapper: {
        alignItems: "center",
        gap: 3
    },

    releaseWrapper: {
        alignItems: "center",
        gap: 3
    },

    releaseText: {
        color: colors.text,
        fontSize: 18,
        fontWeight: "bold",
    },

    metacriticText: {
        color: colors.text,
        fontSize: 18,
        fontWeight: "bold",
    },

    description: {

    },
    subtitle: {
        fontSize: 18,
        color: colors.title,
        fontFamily: "sans-serif-medium",
        fontWeight: "bold"
    },
    descriptionText: {
        fontSize: 12,
        color: colors.text,
        fontFamily: "sans-serif",
        textAlign: "justify"
    },
    text: {
        fontSize: 12,
        color: '#8b8b8bff'
    },

    genresContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        flexShrink: 1,
        gap: 6,
    },
    genreBadge: {
        backgroundColor: colors.tint,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    genreText: {
        color: "#e7e6e6ff",
        fontSize: 10,
        fontFamily: "Inter-SemiBold",
    },

    platformsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        flexShrink: 1,
        gap: 6,
    },
    platformBadge: {
        backgroundColor: colors.tint,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    platformText: {
        color: "#fff",
        fontSize: 10,
        fontFamily: "Inter-SemiBold",
    },

    website: {
        flex: 1,
        backgroundColor: colors.tint,
        padding: 16,
        borderRadius: 16,
    },

    wrapperWebsite: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },

    textWebsite: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold"
    }

});