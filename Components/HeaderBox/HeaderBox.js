import { Pressable, View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
function HeaderBox(props) {
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate("Info", {
            data: props.data,
        });
    }
    return (
        <Pressable style={({pressed}) => pressed && styles.pressed} onPress={pressHandler}>
            <View style={styles.container}>
                <Image source={{uri: props.data.image}} style={styles.image} />
                <Text style={styles.text}>
                {props.mode === 'group' ? props.data.groupName : props.data.senderName}
                {/* {props.data.username} */}
                </Text>
            </View>
        </Pressable>
    )
}

export default HeaderBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.75,
    }

})