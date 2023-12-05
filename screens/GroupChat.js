import { View, Image, ScrollView, StyleSheet } from 'react-native';
import MessageBox from '../Components/MessageBox/MessageBox';
import { GroupMessageArray } from '../Constants/MessageArray';
import { useState } from 'react';

function GroupChat() {
    const [messageArray, setMessageArray] = useState(GroupMessageArray);
    return (
        <ScrollView>
            {
                GroupMessageArray.map((message) => {
                    if (message.sender === 'noufal__rahim') {
                        return (
                            <View style={[styles.msgboxContainer, {justifyContent: 'flex-end'}]}>
                                <MessageBox
                                    mode={'group'}
                                    key={message.id}
                                    message={message.message}
                                    senderName={message.senderName}
                                    time={message.time}
                                    flexposition={'flex-end'}
                                    color={'#27374D'}
                                    LeftRadius={0}
                                    RightRadius={10}
                                    textColor={{ color: 'white' }}
                                />
                                <View style={styles.imageContainer}>
                                    <Image style={styles.image} source={{ uri: message.senderImage }} />
                                </View>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={styles.msgboxContainer}>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.image} source={{ uri: message.senderImage }} />
                                </View>
                                <MessageBox
                                    mode={'group'}
                                    key={message.id}
                                    message={message.message}
                                    senderName={message.senderName}
                                    time={message.time}
                                    flexposition={'flex-start'}
                                    color={'#E5E5EA'}
                                    LeftRadius={10}
                                    RightRadius={0}
                                    textColor={{ color: 'black' }}
                                />
                            </View>
                        )
                    }
                })
            }
        </ScrollView>
    )
}

export default GroupChat;

const styles = StyleSheet.create({
    msgboxContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginBottom: 10
    },
    imageContainer: {
        width: 40,
        height: 40,
        borderRadius: 25,
        overflow: 'hidden',
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 5
    },
    image: {
        width: '100%',
        height: '100%'
    }
})