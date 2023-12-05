import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
function SettingsBox(props) {
    const pressHandler = () => {
        console.log("Pressed");
    }

    return (
        <Pressable style={({pressed}) => pressed && styles.pressed} onPress={pressHandler}>
            <View style={styles.container}>
                <Ionicons style={styles.icon} name={props.icon} size={24} color="black" />
                <Text style={styles.text}>{props.title}</Text>
                <Ionicons style={styles.icon2} name="chevron-forward-outline" size={24} color="black" />
            </View>
        </Pressable>
    )
}

export default SettingsBox;

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {
        marginRight: 20,

    },
    icon2: {
        marginLeft: "auto",
        marginRight: 20,
    },
    pressed: {
        opacity: 0.5,
    }
})