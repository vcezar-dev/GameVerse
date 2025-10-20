import { useGlobalStyles } from "@/src/styles/global";
import { Image, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
    const styles = useGlobalStyles();
    const [featuredsGames, setFeaturedsGames] = useState<Game[]>([])

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

    return (
        <View style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <View style={styles.content}>
                    <Text style={styles.title}>Bem-vindo ao GameVerse!</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.card}>
                        <Text style={styles.subtitle}>Lançamento</Text>
                        <Image
                            source={{ uri: 'https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg' }}
                            style={{ width: 300, height: 400 }}
                        />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.subtitle}>Populares</Text>
                        <Image
                            source={{ uri: 'https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg' }}
                            style={{ width: 300, height: 400 }}
                        />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.subtitle}>Notícias</Text>
                        <Image
                            source={{ uri: 'https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg' }}
                            style={{ width: 300, height: 400 }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}