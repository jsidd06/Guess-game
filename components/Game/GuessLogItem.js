import {View,Text,StyleSheet} from "react-native"
import Colors from "../constants/Colors"
function GuessLogItem ({selectedNumber,guess}) {
    return (
      <View style={styles.listItem}>
        <Text style={styles.itemText}>#{selectedNumber}</Text>
        <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
      </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem:{
        borderColor:Colors.primary800,
        borderWidth:1,
        padding:12,
        borderRadius:10,
        marginVertical:8,
        backgroundColor:Colors.accent500,
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        elevation:4,
        shadowColor:"black",
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:0},
        shadowRadius:3,
    },
    itemText:{
        fontFamily:"open-sans-bold",
    }
})