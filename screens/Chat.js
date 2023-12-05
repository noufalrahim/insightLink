import { Text, View, StyleSheet, ScrollView, ImageBackground, Pressable } from 'react-native';
import MessageBox from '../Components/MessageBox/MessageBox';
import { MessageArray } from '../Constants/MessageArray';
import InputBox from '../Components/InputBox/InputBox';
import { useState, useRef, useEffect } from 'react';
import { PAGE_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, SENT_MESSAGE_COLOR } from '../Constants/color';
import Button from '../UI/SendButton';
function Chat({route}) {
    const [messageArray, setMessageArray] = useState(MessageArray);
    const data = route.params.data;
    const setMessageHandler = (message) => {
        setMessageArray([...messageArray, message])
    }
    // const fetchUser = async () => {
    //     const resp = await fetch('https://randomuser.me/api/?results=5',{
    //                     method: 'GET',
    //                     headers: {
    //                         'Content-Type': 'application/json'
    //                     }
    //                 });
    //     const data = await resp.json();
    //     console.log(data);
    // }
    return (
        <>
                <ScrollView
                    style={styles.scrollContainer}
                    ref={ref => { this.ScrollView = ref }}
                    onContentSizeChange={() => {
                        this.ScrollView.scrollToEnd({ animated: true });
                    }}>
                    <View style={styles.space}>
                    {MessageArray.map((message) => {
                        if((message.reciever === data.reciever && message.sender === data.sender || message.reciever === data.sender && message.sender === data.reciever)){
                            return (
                            <>
                                <MessageBox
                                    key={message.id}
                                    message={message.message}
                                    time={message.time} 
                                    flexposition={message.sender === 'noufal__rahim' ? 'flex-end' : 'flex-start'}
                                    color={message.sender === 'noufal__rahim' ? '#27374D' : '#c2c2c2'}
                                    LeftRadius={message.sender === "noufal__rahim" ? 0 : 10}
                                    RightRadius={message.sender === "noufal__rahim" ? 10 : 0}
                                    textColor={message.sender === 'noufal__rahim' ? {color: 'white'} : {color: 'black'}}
                                    />
                            </>
                        );

                        }
                    })}
                    </View>
                </ScrollView>
                <View style={styles.inputView}>
                    <InputBox onSetMessage={setMessageHandler} chat={data}/>
                </View>
            {/* </ImageBackground> */}
        </>
    )
}

export default Chat;

const styles = StyleSheet.create({
    inputView: {
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: PRIMARY_COLOR,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: "#DBE2EF",
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    space: {
        backgroundColor: "#DBE2EF",
        paddingBottom: 10,
    }
})