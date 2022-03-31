import { Text,View,Image, StyleSheet } from "react-native"
import Title from "../Title";
import Colors from "../constants/Colors";

function GameOver() {
  return (
    <View style={styles.rootScreen}>
      <Title>Game Over!</Title>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={require("../../assets/Images/success.png")} />
      </View>
      <View>
        <Text>Your phone needed x rounds to guess the number Y.</Text>
      </View>
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
  }
});
