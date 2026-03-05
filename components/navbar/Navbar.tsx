import { View, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { LayoutDashboard, Notebook, Plus, Dumbbell, SquareUserRound } from 'lucide-react-native';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Pressable onPress={() => router.push("/")}>
        <LayoutDashboard strokeWidth={1.5} size={50} color="#B0B0B0"/>
      </Pressable>

      <Pressable onPress={() => router.push("/diary")}>
        <Notebook strokeWidth={1.5} size={50} color="#B0B0B0"/>
      </Pressable>

      {/* Raised Add Button */}
      <Pressable onPress={() => router.push("/add")} style={styles.addButton}>
        <Plus strokeWidth={1.5} size={50} color="#B0B0B0"/>
      </Pressable>

      <Pressable onPress={() => router.push("/exercise")}>
        <Dumbbell strokeWidth={1.5} size={50} color="#B0B0B0"/>
      </Pressable>

      <Pressable onPress={() => router.push("/profile")}>
        <SquareUserRound strokeWidth={1.5} size={50} color="#B0B0B0"/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 73,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: "#404040",
    paddingBottom: 10,
    borderTopWidth: 1, 
    borderColor: "#ffffff"
  },
  addButton: {
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: "#404040",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, // lifts it above the other icons
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 50,
    borderWidth: 1,
    borderColor: "#FFFCFC",
  }
});