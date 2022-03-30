import {View,StyleSheet,TextInput} from "react-native"
import PrimaryButton from "../PrimaryButton"

function StartGame () {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton >Reset</PrimaryButton>
            <PrimaryButton >Confirm</PrimaryButton>
        </View>
    )
}

export default StartGame

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#72063c",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
});