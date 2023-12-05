import ChatBox from "../Components/ChatBox/ChatBox";
import { ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { MessageArray } from "../Constants/MessageArray";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../Constants/color";
function Personal() {
    const [messages, setMessages] = useState(MessageArray);
    return (
        <>
            <ScrollView style={styles.container}>
                {messages.map((message) => {
                    if (message.reciever === "noufal__rahim") {
                        return (
                            <ChatBox mode={"chat"} id={message.id} data={message} key={message.id} name={message.senderName} time={message.time} lastMsg={message.message} image={message.image} />
                        )
                    }
                })}

            </ScrollView>
            <TouchableOpacity style={styles.button}>
                <Ionicons name="add" style={styles.addIcon} size={24} color="white" />
            </TouchableOpacity>
        </>
    )
}

export default Personal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: SECONDARY_COLOR
    },
    button: {
        position: 'absolute',
        bottom: 20, // Adjust this value to change the vertical position
        right: 20, // Adjust this value to change the horizontal position
        backgroundColor: PRIMARY_COLOR,
        padding: 10,
        borderRadius: 15,
        width: 50,
        height: 50,
    },
    addIcon: {
        alignSelf: 'center',
    }
})