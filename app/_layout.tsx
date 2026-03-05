import Navbar from "@/components/navbar/Navbar";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function RootLayout() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Stack screenOptions={{ headerShown: false }} />
        <Navbar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#313030",
  },
  container: {
    flex: 1,
    backgroundColor: "#3C3A3A"
  },
});