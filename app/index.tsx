import Speedometer from "@/components/Dashboard/Speedometer";
import { shadowStyle } from "@/components/ShadowStyle";
import { Droplet, EggFried, Flame, Wheat, Zap } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#3C3A3A"
      }}
    >
      {/* Header */}
      <View style={styles.header}>

        <Text style={styles.dateText}>05/03/2026</Text>

        <View style={[styles.streak, shadowStyle]}>
          <Flame style={styles.streakIcon} size={30} color="#FF6B6B"></Flame>
          <Text style={styles.streakText}>9999</Text>
        </View>
      </View>

      {/* Cards */}
      <View style={[styles.Card, shadowStyle]}>
        <Text style={styles.CardTitle}>Calories</Text>
        <Speedometer percentage={50} color="#5FA8D9" IconComponent={Zap} iconSize={80} strokeWidth={1.4} size={130} meterStrokeWidth={5.5}></Speedometer>
        <Text style={styles.Cardtext}>1500 Kcal Left</Text>
      </View>

      <View style={styles.Card}>
        <Text style={styles.CardTitle}>Macronutrients</Text>
          <View style={styles.container}>
            <View>
              <Speedometer percentage={50} color="#C95A5A" IconComponent={EggFried} iconSize={65} strokeWidth={1.4} size={110} meterStrokeWidth={5.5}></Speedometer>
              <Text style={styles.Cardtext}>100g Left</Text>
            </View>

            <View > 
              <Speedometer percentage={50} color="#7CD962" IconComponent={Wheat} iconSize={60} strokeWidth={1.4} size={110} meterStrokeWidth={5.5}></Speedometer>
              <Text style={styles.Cardtext}>100g Left</Text>
            </View>

            <View >
              <Speedometer percentage={50} color="#D9C968" IconComponent={Droplet} iconSize={65} strokeWidth={1.4} size={110} meterStrokeWidth={5.5}></Speedometer>
              <Text style={styles.Cardtext}>100g Left</Text>
            </View>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: "white"
  },
  Card: {
    width: "95%",
    height: "27.5%",
    borderRadius: 12,
    backgroundColor: "#545050",
    alignItems: "center",
    marginBottom: 7,
  },
  CardTitle: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 7,
    marginBottom: 7,
  },
  Cardtext: {
    color: "white",
    alignSelf: "center",
    marginTop: 7,
    marginBottom: 7,
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
  container: {
    paddingRight: 5,
    paddingLeft: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 15,
  },
  header: {
    backgroundColor: "#313030",
    width: "100%",
    height: 60,
    padding: 10,
    paddingTop: 0,
    flexDirection: "row",
    marginBottom: 10,
    
  },
  streak: {
    backgroundColor: "#545050",
    width: "30%",
    height: "100%",
    alignSelf: "flex-end",
    borderRadius: 100,
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 15,
    flexDirection: "row"
    
  },
  streakText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  streakIcon: {
    marginRight: 5,
  },
  dateText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    justifyContent: "center",
    alignContent: "center",
    width: "70%",
  },
});