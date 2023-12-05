import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";



function ChatBox({data,id, name, lastMsg, time, image, mode, senderName}){
    const imageViewHandler = () => {
        navigation.navigate("Image", {
            image: image,
            name: name,
        });
    }
    const navigation = useNavigation();
    const pressHandler = () => {
        if(mode === "chat"){
            navigation.navigate("Chat", {
                id: id,
                name: name,
                image: image,
                data: data,
            }); 
        }
        else if(mode === "group"){
            navigation.navigate("GroupChat", {
                id: id,
                name: name,
                image: image,
                data: data,
            }); 
        }
        
    }
    return(
        <Pressable  android_ripple={{
            color: "#e6e6e6",
            borderless: false,
        }} onPress={pressHandler}>
        <View style={styles.container}>
            <Pressable onPress={imageViewHandler}>
            <Image style={styles.image}
            source={{uri: image}}
             />
            </Pressable>
            <View style={styles.textContainer}>
                <View>
                <Text style={styles.name}>{name}</Text>
                </View>
                <View style={styles.msgContainer}>
                <Text style={styles.lastMsg}>
                {
                    mode === "group" ? senderName + " : " + lastMsg.substring(0, 15) + "..." : lastMsg.substring(0, 30) + "..."
                }
                </Text>
                </View>
            </View>
            <View style={styles.timeView}>
                <Text style={styles.time}>{time}</Text>
            </View>
        </View>
        </Pressable>

    )
}

export default ChatBox;

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: "row",
        },
    pressed:{
        opacity: 0.5,
    },
    image:{
        height: 50,
        width: 50,
        borderRadius: 50,
        margin: 10,
    },
    textContainer:{
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: 10,
    },
    timeView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        marginRight: 15,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    lastMsg:{
        fontSize: 15,
        color: "grey",
    },
    time: {
        color: "grey",
    },
    msgContainer:{
        width: 200,
    }
})

