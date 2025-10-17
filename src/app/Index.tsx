import { useState } from "react";
import { Input } from "../components/Input";
import { rawgApi } from "../services/api";
import { useHomeStyles } from "./styles";
import { Image, KeyboardAvoidingView, ScrollView, Text, View } from "react-native";

export default function Index() {
    const styles = useHomeStyles();
    const [searchGame, setSearchGame] = useState('')

    async function fetchGame() {
        try {
            const data = await rawgApi(searchGame)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <View style={styles.content}> 
                    <Text style={styles.title}>Bem-vindo ao GameVerse!</Text>   
                    <Input label="Search Game" value={searchGame} onChangeText={setSearchGame} onSubmitEditing={() => fetchGame()}></Input>                 
                </View>                
                <View style={styles.body}>
                    <View style={styles.card}>
                        <Text style={styles.subtitle}>Jogos em destaque</Text>
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
        </KeyboardAvoidingView>
    )       
}