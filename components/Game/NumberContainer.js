import { View, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

function NumberContainer({ children }) {
  return (
      <View style={styles.container}>
    <Text style={styles.numText}>{children}</Text>
  </View>
  )
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    borderRadius: 8,
  },
  numText: {
    color: Colors.accent500,
    fontSize: 36,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
