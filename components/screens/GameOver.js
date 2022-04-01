import { Text,View,Image, StyleSheet,useWindowDimensions,ScrollView } from "react-native"
import Title from "../Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../PrimaryButton";

function GameOver({roundIsOver,selectedNumber,onStartNewGame}) {

  const { width,height } = useWindowDimensions();

  let imageSize = 300;

  if(width < 380){
    imageSize = 150;
  }

  if(height < 400){
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize/2,
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootScreen}>
        <Title>Game Over!</Title>
        <View style={[styles.containerImage, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../../assets/Images/success.png")}
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your phone needed{" "}
            <Text style={styles.highlightText}>{roundIsOver}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlightText}>{selectedNumber}</Text>.
          </Text>
        </View>
        <PrimaryButton onClick={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOver;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen : {
    flex: 1,
  },
  rootScreen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  containerImage: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 75 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
