import { Text,View,Image, StyleSheet } from "react-native"
import Title from "../Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../PrimaryButton";

function GameOver({roundIsOver,selectedNumber,onStartNewGame}) {
  return (
    <View style={styles.rootScreen}>
      <Title>Game Over!</Title>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={require("../../assets/Images/success.png")} />
      </View>
      <View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{roundIsOver}</Text> rounds to guess the number <Text style={styles.highlightText}>{selectedNumber}</Text>.</Text>
      </View>
      <PrimaryButton onClick={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  containerImage:{
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image:{
    width: "100%",
    height: "100%",
  },
  summaryText:{
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText:{
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  }
});
