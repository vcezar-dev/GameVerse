import { fetchGameById } from "@/src/services/api";
import { useGlobalStyles } from "@/src/styles/global";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    type Game = {
        id: string;
        name: string;
        released: string;
        background_image: string;
        description_raw: string;
        rating: number;
        rating_top: number;
    }

    const { gameId } = useLocalSearchParams<{ gameId?: string }>();
    const [gameDetails, setGameDetails] = useState<Game | null>(null)
    const styles = useGlobalStyles();

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

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <View style={styles.body}>
                    {gameDetails && (
                        <View style={styles.card}>
                            <Text style={styles.subtitle}>{gameDetails.name}</Text>
                            <Image
                                source={{ uri: gameDetails.background_image }}
                                style={{ width: 300, height: 300, borderRadius: 16 }}
                            />
                            <Text style={styles.text}>{gameDetails.description_raw}</Text>
                            <Text style={styles.text}>Lançado em: {gameDetails.released}</Text>
                            <Text style={styles.text}>
                                Avaliação: {gameDetails.rating}/{gameDetails.rating_top}
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
