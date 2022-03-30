import {View,StyleSheet,TextInput} from "react-native"
import PrimaryButton from "../PrimaryButton"

function StartGame () {
    return (
        <View style={style}>
            <TextInput />
            <PrimaryButton >Reset</PrimaryButton>
            <PrimaryButton >Confirm</PrimaryButton>
        </View>
    )
}

export default StartGame

const style= StyleSheet.create({})