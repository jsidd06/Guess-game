import { useState } from "react";
import { View, StyleSheet, TextInput,Alert } from "react-native";
import PrimaryButton from "../PrimaryButton";

function StartGame({onPickNum}) {
  const [pleaseEnterNum, setPleaseEnterNum] = useState("");

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

  return (
    <View style={styles.inputContainer}>
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
          <PrimaryButton onClick={confirmSubmitHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#3b021f",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    textAlign: "center",
    color: "#ddb52f",
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
