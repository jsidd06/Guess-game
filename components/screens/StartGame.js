import {View,StyleSheet,TextInput} from "react-native"
import PrimaryButton from "../PrimaryButton"

function StartGame () {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} keyboardType="number-pad" autoCorrect={false}  autoCapitalize="none" maxLength={2} />
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
    backgroundColor: "#4e0329",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  numberInput:{
      height: 50,
        width: 50,
        fontSize:32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        textAlign: "center",
        color: "#ddb52f",
        fontWeight: "bold",
        marginVertical: 8,
  }
});