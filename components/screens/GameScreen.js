import { View, StyleSheet ,Text} from "react-native";
import Title from "../Title";

function GameScreen() {
  return (
    <View style={styles.screenContainer}>
      
        <Title>Opponent's Guess</Title>
      
      {/* GUESS */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* + - */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
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
