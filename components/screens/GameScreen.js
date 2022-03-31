import { View, StyleSheet ,Text} from "react-native";
import NumberContainer from "../Game/NumberContainer";
import {useState} from "react";
import Title from "../Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}


function GameScreen({userChoice}) {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
const [userGuess,setUserGuess] = useState(initialGuess)


  return (
    <View style={styles.screenContainer}>
      
        <Title>Opponent's Guess</Title>
      <NumberContainer>{userGuess}</NumberContainer>
      {/* GUESS */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* + - */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
  },
});
