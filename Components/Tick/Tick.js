import { View, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"
function TickMark(props) {
    return (
        <View style={styles.container}>
        <Ionicons name="checkmark-done-outline" size={20} color={props.color} style={styles.tickmark} />
        </View>
    )
}

export default TickMark;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})