import { Image, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { s } from './styles';

async function goToUserSettings() {
  router.navigate({ pathname: '/(tabs)/settings' });
}

export function Header() {
  return (
    <LinearGradient
      colors={['#7972fd', '#4B45D3']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={s.gradient}
    >
      <View style={s.container}>
        <Text style={s.title}>
          Game<Text style={s.titleAccent}>Verse</Text>
        </Text>

        <TouchableOpacity activeOpacity={0.7} onPress={goToUserSettings}>
          <Image
            style={s.image}
            source={{
              uri: 'https://imgs.search.brave.com/Aw8gZDy7tcqfy1ui4zsatH6oNHQx9EqZFBF7sAQnfCo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODVlNGJmM2NiMTFi/MjI3NDkxYzMzOWEu/cG5n',
            }}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
