import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Exercise() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3C3A3A"
      }}
    >
      <Text style={styles.Text}>Exercise</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  Text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40
  }
})