import { fetchGameById } from "@/src/services/api";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Game } from "@/src/types";

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

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 32 }}>
            <ScrollView>
                <View>
                    {gameDetails && (
                        <View>
                            <Text>{gameDetails.name}</Text>
                            <Image
                                source={{ uri: gameDetails.background_image }}
                                style={{ width: 300, height: 300, borderRadius: 16 }}
                            />
                            <Text>{gameDetails.description_raw}</Text>
                            <Text>Lançado em: {gameDetails.released}</Text>
                            <Text>
                                Avaliação: {gameDetails.rating}/{gameDetails.rating_top}
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
