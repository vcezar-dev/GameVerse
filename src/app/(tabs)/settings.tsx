import { View, Text, StyleSheet } from "react-native"

export default function SettingsScreen() {

  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Hello, World!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    // justifyContent: "center",
    gap: 16
  },

  title: {
    color: "#453467", 
    fontSize: 24,
    fontWeight: "bold",
  }
})