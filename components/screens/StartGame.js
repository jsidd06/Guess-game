import { useState } from "react";
import { View, StyleSheet, TextInput,Alert,useWindowDimensions,KeyboardAvoidingView,ScrollView } from "react-native";
import PrimaryButton from "../PrimaryButton";
import Colors from "../constants/Colors";
import Title from "../Title";
import Card from "../Card";
import InstructionText from "../InstructionText";

function StartGame({onPickNum}) {
  const [pleaseEnterNum, setPleaseEnterNum] = useState("");

  const { width,height } = useWindowDimensions();

  const submitHandlerPleaseEnterNum = (enterNum) => {
    setPleaseEnterNum(enterNum);
  }



  const resetInputHandler = () => {
    setPleaseEnterNum("");
  }

  const confirmSubmitHandler = () => {
    const choseNumber = parseInt(pleaseEnterNum)

    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNum(choseNumber);
  }

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.guessMyNumber, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              keyboardType="number-pad"
              autoCorrect={false}
              autoCapitalize="none"
              maxLength={2}
              onChangeText={submitHandlerPleaseEnterNum}
              value={pleaseEnterNum}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onClick={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onClick={confirmSubmitHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGame;



const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  guessMyNumber:{
    flex:1,
    marginTop:100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    textAlign: "center",
    color: Colors.accent500,
    fontWeight: "bold",
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
