import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, Divider, TouchableRipple } from 'react-native-paper'
import { Dimensions } from 'react-native'
import FabIcon from '../Buttons/FAB';

interface InboxScreenProps {
    navigation: any;
    data: {
        room: string;
        groupAvatar: {
            image: string;
            icon: string;
        }, 
        groupName: string;
        groupMembers: [
            {
                _id: string;
               firstName: string;
               lastName: string;
               userName: string;
                avatar: {
                    icon: string;
                    image: string;
                };
            }
        ]
        messagesArray: [
            {
                _id: string;
                text: string;
                createdAt: Date;
                user: {
                    _id: string;
                    name: string;
                    avatar: string;
                }
            }
        ]
    },
    setData: (data: any) => void;
}


export default function GroupBox({ navigation, data, setData }: any) {
    const { width, height } = Dimensions.get('window');
    const heightOfUserBox = height / 12;
    const heightOfAvatar = heightOfUserBox * 0.6;
    const lastMessageTime = data.messagesArray[data.messagesArray.length - 1].createdAt;
    const formattedTime = lastMessageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formattedMsg = data.messagesArray[data.messagesArray.length - 1].text.length > 30 ? data.messagesArray[data.messagesArray.length - 1].text.slice(0, 30) + '...' : data.messagesArray[data.messagesArray.length - 1].text;
    return (
        <>
            <TouchableRipple
                style={{
                    width: width,
                    height: heightOfUserBox,
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: 'white',

                }}
                onPress={() => {
                    navigation.navigate('Chat', { isGroup: true, data: data, setData: setData })
                }}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: width,
                        paddingHorizontal: 10,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Avatar.Text size={heightOfAvatar} label={data.groupAvatar.image === '' ? data.groupAvatar.icon : ''} />
                        <View
                            style={{
                                flexDirection: 'column',
                                marginLeft: 10
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    color: 'black'
                                }}
                            >{data.groupName}</Text>
                            <Text style={{
                                fontWeight: '400',
                                color: 'black'
                            }}>{formattedMsg}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            color: 'black'
                        }}>{formattedTime}</Text>
                    </View>
                </View>
            </TouchableRipple>
            <Divider />
        </>
    )
}