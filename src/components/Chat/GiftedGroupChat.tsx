import { Pressable, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import HeaderBar from '../HeaderBar';
import { useCallback, useEffect, useState } from 'react';
import renderInputToolbar from './renderInputToolbar';
import renderBubble from './renderBubble';
import ioClient from "socket.io-client";
import { Avatar } from 'react-native-paper';
import { AuthUser, COLORS } from '../../constants/AppConstant';

export function GiftedGroupChatScreen({ navigation, route }: any) {
    const [messages, setMessages] = useState([]);
    const socket = ioClient("http://192.168.41.109:3000", {
        transports: ['websocket'],
    });

    const Data = route.params.data;
    const setData = route.params.setData;
    useEffect(() => {
        const sortedMessages: any = [...Data.messagesArray].sort((a, b) => b.createdAt - a.createdAt);
        setMessages(sortedMessages);
    }, [Data.messagesArray]);


    function connectSocket() {
        console.log("Connecting....");
        socket.on("connect", () => {
            console.log("Connected to server");
        });

        socket.on('receive-message', (message) => {
            setMessages((previousMessages: any) => GiftedChat.append(previousMessages, message));
        });
    }

    useEffect(() => {
        connectSocket();
        socket.emit('join-room', Data.room, (room: any) => {
            console.log(room);
        });
        return () => {
            socket.disconnect();
        };
    }, []);

    const onSend = useCallback((messageArr = []) => {

        setData((previousData: any) => {
            const newData = [...previousData];
            const index = newData.findIndex((data: any) => data.room === Data.room);
            // newData[index].messagesArray = [...newData[index].messagesArray, messageArr[0]];
            // return newData;
            return;
        });
        socket.emit('send-message', messageArr[0], Data.room);
        setMessages((previousMessages: any) => GiftedChat.append(previousMessages, messageArr));
    }, []);

    const avatarTextGenerator = (name: any) => {
        for (let i = 0; i < name.length; i++) {
            if (name[i] === " ") {
                return name[0] + name[i + 1];
            }
        }

        return name[0];
    };

    const headerIcons = [
        {
            icon: 'magnify',
            onPress: () => console.log('Search'),
        },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.light }}>
            <HeaderBar
                showBackBtn={true}
                navigation={navigation}
                groupData={
                    {
                        room: Data.room,
                        groupName: Data.groupName,
                        groupAvatar: {
                            image: Data.groupAvatar.image,
                            icon: Data.groupAvatar.icon,
                        },
                        groupMembers: Data.groupMembers,
                    }
                }
                title={Data.groupName}
                icons={headerIcons}
            />
            <GiftedChat
                messages={messages}
                onSend={onSend}
                user={{ _id: AuthUser._id, name: AuthUser.name }}
                renderInputToolbar={renderInputToolbar}
                alwaysShowSend={true}
                minInputToolbarHeight={60}
                scrollToBottomComponent={() => (
                    <Ionicons name="chevron-down" size={24} color="black" />
                )}
                renderBubble={renderBubble}
                renderUsernameOnMessage={true}
                renderAvatar={(prop: any) => {
                    return (
                        <>
                            {prop.currentMessage.user.avatar ? (
                                <Pressable
                                    onLongPress={() => console.log("Long Pressed")}
                                    onPress={() => navigation.navigate('AboutUser', {
                                        userData: Data.groupMembers.find((member: any) => member._id === prop.currentMessage.user._id)

                                    })}>
                                    <Avatar.Image size={40} source={{ uri: Data.sender.avatar.image }} />
                                </Pressable>
                            ) : (
                                <Pressable
                                    onLongPress={() => console.log("Long Pressed")}
                                    onPress={() => navigation.navigate('AboutUser', {
                                        userData: Data.groupMembers.find((member: any) => member._id === prop.currentMessage.user._id)
                                    })}>
                                    <Avatar.Text size={40} label={avatarTextGenerator(prop.currentMessage.user.name)} />
                                </Pressable>
                            )}
                        </>
                    )
                }}
                parsePatterns={linkStyle => [
                    { type: 'phone', style: linkStyle, onPress: () => console.log("Phone Number") },
                    { pattern: /@(\w+)/, style: styles.hashtag, onPress: () => console.log("At Mention") },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    hashtag: {
        color: 'blue',
        fontWeight: 'bold',
    },
});