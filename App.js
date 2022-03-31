import {useState} from "react"
import { StyleSheet,ImageBackground,SafeAreaView } from 'react-native';
import {LinearGradient} from "expo-linear-gradient"
import StartGame from './components/screens/StartGame';
import GameScreen from './components/screens/GameScreen';
import Colors from "./components/constants/Colors";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();

  const submitHandlerNumber = (pickNumber) => {
    setSelectedNumber(pickNumber);
  }

  let screen = <StartGame onPickNum={submitHandlerNumber} />;

  if (selectedNumber) {
    screen = <GameScreen selectedNumber={selectedNumber} />;
  }


  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
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
