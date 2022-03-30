import { View, StyleSheet,Text } from "react-native";

function PrimaryButton({ children }) {
  return <View style={style}>
      <Text>{children}</Text>
  </View>;
}

export default PrimaryButton;

const style = StyleSheet.create({});
