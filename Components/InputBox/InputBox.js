import { TextInput, View, StyleSheet } from "react-native";
import Button from "../../UI/SendButton";
import { useState } from "react";
import { MessageArray } from "../../Constants/MessageArray";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../Constants/color";
function InputBox(props) {
    const [enteredMessage, setEnteredMessage] = useState('');
    const sendHandler = () => {
        if (enteredMessage !== '') {
            const message = {
                id: Math.random().toString(),
                sender: props.chat.reciever,
                reciever: props.chat.sender,
                message: enteredMessage,
                time: '12:00',
                date: '12/12/2021'
            }
            MessageArray.push(message);
            props.onSetMessage(message);
            setEnteredMessage('');
        }
    }
    const messageChangeHandler = (text) => {
        setEnteredMessage(text);
    }
    return (
        <View style={styles.footer}>
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    placeholder="Type a message"
                    multiline={true}
                    onChangeText={messageChangeHandler}
                    value={enteredMessage}
                />
                <View>
                    <Button onPress={sendHandler} title="Send" backgroundColor={PRIMARY_COLOR} color={"white"} />
                </View>
            </View>

        </View>
    )
}

export default InputBox;

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
        backgroundColor: SECONDARY_COLOR,
        maxHeight: 100,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        flex: 1,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 5,
        padding: 10,
        marginRight: 5,
        borderRadius: 25,
    }
})