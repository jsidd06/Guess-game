import { View, StyleSheet, Text, Alert,FlatList } from "react-native";
import NumberContainer from "../Game/NumberContainer";
import {Ionicons} from "@expo/vector-icons";
import { useState, useEffect  } from "react";
import Title from "../Title";
import PrimaryButton from "../PrimaryButton";
import Card from "../Card";
import InstructionText from "../InstructionText";
import GuessLogItem from "../Game/GuessLogItem";

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
  const [roundGuess, setRoundGuess] = useState([initialGuess]);

  useEffect(() => {
    if(userGuess === selectedNumber){
      isGameOver(roundGuess.length);
    }
  }, [userGuess, isGameOver, selectedNumber]);

  useEffect(() => {
    minNumBoundary = 1;
    maxNumBoundary = 100;
  },[])

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
    setRoundGuess((PrevGuessRound) => [nextGuess, ...PrevGuessRound]);
  }

  const guessRoundListLength = roundGuess.length;


  return (
    <View style={styles.screenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{userGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onClick={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onClick={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {roundGuess.map(round =>
          <Text key={round}>{round}</Text>
        )} */}
        <FlatList data={roundGuess}
        keyExtractor={(item) => item}
        renderItem={(itemData) => <GuessLogItem selectedNumber={guessRoundListLength - itemData.index} guess={itemData.item} />}
         />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  }
});
