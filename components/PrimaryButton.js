import { View, StyleSheet,Text } from "react-native";

function PrimaryButton({ children }) {
  return <View style={styles}>
      <Text>{children}</Text>
  </View>;
}

export default PrimaryButton;

const styles = StyleSheet.create({
   
});
