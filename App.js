import { StyleSheet } from 'react-native';
import {LinearGradient} from "expo-linear-gradient"
import StartGame from './components/screens/StartGame';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.rootScreen}>
      <StartGame />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }
});
