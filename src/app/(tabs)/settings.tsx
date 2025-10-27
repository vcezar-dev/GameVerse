import { Header } from "@/src/components/Header"
import { colors } from "@/src/constants/colors"
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native"

export default function SettingsScreen() {

  function toAppInfo() {
  const url = "https://github.com/vcezar-dev/gameverse";

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

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.settings}>

        <View style={styles.settingsInfo}>
          <Ionicons name="game-controller" size={90} color={colors.tint} />
          <Text style={styles.title}>Game Info</Text>
          <Text style={styles.settingText}>Discover and explore your favorite games</Text>
        </View>

        
        <Text style={styles.subtitle}>Settings</Text>

        <View style={styles.content}>

          <TouchableOpacity activeOpacity={0.8} style={styles.options} onPress={toAppInfo}>
            <View style={styles.optionsLeft}>

              <View style={styles.optionsIcon}>
                <MaterialCommunityIcons name="information-outline" size={24} color="#FFF"/>
              </View>

              <View>
                <Text style={styles.optionsTitle}>About</Text>
                <Text style={styles.optionsText}>learn more about this app</Text>
              </View>

            </View>
            <Feather name="chevron-right" size={20} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.options}>
            <View style={styles.optionsLeft}>

              <View style={styles.optionsIcon}>
                <MaterialCommunityIcons name="information-outline" size={24} color="#FFF" />
              </View>

              <View>
                <Text style={styles.optionsTitle}>Version</Text>
                <Text style={styles.optionsText}>1.0.0</Text>
              </View>

            </View>
            <Feather name="chevron-right" size={20} color="#FFF" />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  settings: {
    padding: 20,
  },

  settingsInfo: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50
  },

  title: {
    fontSize: 34,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: colors.title,
  },

  settingText: {
    fontFamily: "sans-serif"
  },

  subtitle: {
    fontSize: 22,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: colors.title,
    paddingBottom: 10
  },

  content: {
    gap: 10
  },

  options: {
    backgroundColor: colors.tint,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 12,
    gap: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  optionsLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 12
  },

  optionsIcon: {
    backgroundColor: '#a09bff8e',
    margin: 4,
    padding: 9,
    borderRadius: 9999,
  },

  optionsTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  },

  optionsText: {
    color: "#ffffffa6",
    fontSize: 14,
    fontFamily: "sans-serif-medium"
  }
})