import { View, StyleSheet } from "react-native";
import Svg, { Circle, NumberProp } from "react-native-svg";
import { shadowStyle } from "../ShadowStyle";

type SpeedometerProps = {
  percentage?: number;
  color?: string;                  // progress color
  IconComponent: React.ElementType;
  iconSize?: number;
  strokeWidth?: NumberProp;        // for the icon
  size?: number;                   // new prop: overall size of the speedometer
  meterStrokeWidth?: number;       // width of the progress stroke
};

export default function Speedometer({
  percentage = 0,
  color = "#ff6347",
  IconComponent,
  iconSize = 32,
  strokeWidth = 2,
  size = 120,             // default size
  meterStrokeWidth = 10,
}: SpeedometerProps) {
  const radius = (size - meterStrokeWidth) / 2;      // make radius fit inside size
  const center = size / 2;                           // center of SVG
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <View style={{
    width: size,
    height: size,
    borderRadius: 60, // half of width/height → perfect circle
    backgroundColor: "transparent", // needed for iOS shadow to appear
    justifyContent: "center",
    alignItems: "center",
    // shadow props
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8, // Android shadow
  }}>
      <Svg width={size} height={size}>
        {/* White background circle */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#484C4E"
          strokeWidth={meterStrokeWidth}
          fill="white"
        />
        {/* Progress circle */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={color}
          strokeWidth={meterStrokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          transform={`rotate(-90 ${center} ${center})`}
        />
      </Svg>

      {/* Icon in the center */}
      <View style={styles.iconContainer}>
        <IconComponent color={color} size={iconSize} strokeWidth={strokeWidth} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});