import { Href, router, usePathname } from "expo-router";
import { Dumbbell, LayoutDashboard, Notebook, Plus, SquareUserRound } from 'lucide-react-native';
import { Pressable, StyleSheet, View } from "react-native";



export default function Navbar() {
  const pathname = usePathname();

  let inactiveColor = "#B0B0B0";
  
  function changePage(pageString: Href) {
    if (pathname !== pageString) {
      router.push(pageString);
    }
  }
  
  return (
    <View style={styles.navbar}>
      <Pressable onPress={() => changePage("/")}>
        <LayoutDashboard strokeWidth={1.5} size={50} color={pathname === "/" ? "#FF6B6B" : inactiveColor}/>
      </Pressable>

      <Pressable onPress={() => changePage("/diary")}>
        <Notebook strokeWidth={1.5} size={50} color={pathname === "/diary" ? "#8CEB65" : inactiveColor}/>
      </Pressable>

      {/* Raised Add Button */}
      <Pressable onPress={() => changePage("/add")} style={styles.addButton}>
        <Plus strokeWidth={1.5} size={50} color={pathname === "/add" ? "#1ABC9C" : inactiveColor}/>
      </Pressable>

      <Pressable onPress={() => changePage("/exercise")}>
        <Dumbbell strokeWidth={1.5} size={50} color={pathname === "/exercise" ? "#2196F3" : inactiveColor}/>
      </Pressable>

      <Pressable onPress={() => changePage("/profile")}>
        <SquareUserRound strokeWidth={1.5} size={50} color={pathname === "/profile" ? "#B085F5" : inactiveColor}/>
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