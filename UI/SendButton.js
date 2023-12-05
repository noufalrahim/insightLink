import { Pressable, View, StyleSheet, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
function Button({ title, onPress, backgroundColor, color }) {
    return (
        <Pressable onPress={onPress} style={[{ backgroundColor: `${backgroundColor}` }, styles.button]}>
            <View>
                <Text style={{ color: `${color}` }}>
                    <Ionicons name="send" size={20} color="white" />
                </Text>
            </View>
        </Pressable>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
})