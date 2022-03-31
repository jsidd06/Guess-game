import {useState} from "react"
import { StyleSheet,ImageBackground,SafeAreaView } from 'react-native';
import {LinearGradient} from "expo-linear-gradient"
import StartGame from './components/screens/StartGame';
import GameScreen from './components/screens/GameScreen';

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();

  const submitHandlerNumber = (pickNumber) => {
    setSelectedNumber(pickNumber);
  }

  let screen = <StartGame onPickNum={submitHandlerNumber} />;

  if (selectedNumber) {
    screen = <GameScreen />
  }


  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/Images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImg}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImg:{
    opacity:0.15,
  }
});
