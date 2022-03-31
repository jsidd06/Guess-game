import { View, StyleSheet, Text,Pressable } from "react-native";

function PrimaryButton({ children , onClick }) {
   
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) => pressed ? [styles.buttonInnerContainer,pressed] : styles.buttonInnerContainer}
        onPress={onClick}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        backgroundColor: "#72063c",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        margin:9,
        borderRadius: 28,
    },
    buttonInnerContainer:{ 
        borderRadius: 28,
        margin:4,
        overflow: "hidden",
    },
    buttonText: {
        color: "#ddb52f",
        textAlign: "center",
    },
    pressed:{
        opacity: 0.75,
    }
});
