import { View, StyleSheet, Text, Alert } from "react-native";
import NumberContainer from "../Game/NumberContainer";
import { useState, useEffect  } from "react";
import Title from "../Title";
import PrimaryButton from "../PrimaryButton";
import Card from "../Card";
import InstructionText from "../InstructionText";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minNumBoundary = 1;
let maxNumBoundary = 100;

function GameScreen({ selectedNumber, isGameOver }) {
  const initialGuess = generateRandomBetween(
    1,
    100,
    selectedNumber
  );
  const [userGuess, setUserGuess] = useState(initialGuess);

  useEffect(() => {
    if(userGuess === selectedNumber){
      isGameOver();
    }
  }, [userGuess, isGameOver, selectedNumber]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && userGuess < selectedNumber) ||
      (direction === "greater" && userGuess > selectedNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxNumBoundary = userGuess;
    } else {
      minNumBoundary = userGuess + 1;
    }
    console.log(minNumBoundary, maxNumBoundary);
    const nextGuess = generateRandomBetween(
      minNumBoundary,
      maxNumBoundary,
      userGuess
    );
    setUserGuess(nextGuess);
  }
  return (
    <View style={styles.screenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{userGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View>
          <PrimaryButton onClick={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onClick={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </Card>
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
