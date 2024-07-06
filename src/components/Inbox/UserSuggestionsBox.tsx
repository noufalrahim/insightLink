import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { Avatar, TouchableRipple } from 'react-native-paper'

interface UserSuggestionsBoxProps {
    navigation: any,
    data: {
        room: string;
        sender: {
            firstName: string;
            lastName: string;
            userName: string;
            avatar: {
                image: string;
                icon: string;
            }
        },
        messagesArray?:
        {
            _id: string;
            text: string;
            createdAt: Date;
            user: {
                _id: string;
                name: string;
                avatar: string;
            }
        }[]
    },
    setData?: (data: any) => void;
}

export default function UserSuggestionsBox({ navigation, data, setData }: UserSuggestionsBoxProps) {
    const { width, height } = Dimensions.get('window');
    
    const heightOfUserBox = height / 12;
    const heightOfAvatar = heightOfUserBox * 0.6;
    return (
        <TouchableRipple
            onPress={() => {
                navigation.navigate('Chat', {
                    isGroup: false,
                    data: data,
                    setData: setData
                })
            }}
            rippleColor={'rgba(0, 0, 0, .32)'}
        >
            <View style={{
                width: '90%',
                alignSelf: 'center',
                flexDirection: 'row',
                height: heightOfUserBox,
                borderBottomColor: 'rgba(0, 0, 0, .32)',
                borderBottomWidth: 1
            }}>
                <View
                    style={{
                        marginRight: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    {
                        data.sender.avatar.image !== '' ?
                            <Avatar.Image
                                size={heightOfAvatar}
                                source={{ uri: data.sender.avatar.image }}
                            />
                            :
                            <Avatar.Text
                                size={heightOfAvatar}
                                label={data.sender.avatar.icon}
                            />
                    }
                </View>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'flex-start'
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: 'black',
                            fontSize: 15
                        }}
                    >
                        {data.sender.firstName + ' ' + data.sender.lastName}
                    </Text>
                    <Text style={{
                        fontWeight: '400',
                        color: 'black',
                        fontSize: 12
                    }}>@{
                            data.sender.userName
                        }</Text>
                </View>
            </View>
        </TouchableRipple>
    )
}