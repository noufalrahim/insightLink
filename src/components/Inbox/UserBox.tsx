import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator, Avatar, Badge, Divider, TouchableRipple } from 'react-native-paper'
import { Dimensions } from 'react-native'
import FabIcon from '../Buttons/FAB';
import { COLORS } from '../../constants/AppConstant';
import { useAppContext } from '../../context/AppContext';
import getMessagesStatusCount from '../../api/Messages/getMessagesStatusCount';

interface InboxScreenProps {
    navigation?: any;
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
            seen: boolean;
            createdAt: Date;
            user: {
                _id: string;
                name: string;
                avatar: string;
            }
        }[],
        notSeenMessages?: number;
    },
    navigationDestination: string;
    userData?: {
        firstName: string;
        lastName: string;
        avatar: {
            image: string;
            icon: string;
        }
    },
    setData?: (data: any) => void;
    styles?: any;
}

export default function UserBox({ navigation, data, setData, styles, navigationDestination, userData }: InboxScreenProps) {
    const { width, height } = Dimensions.get('window');
    const heightOfUserBox = height / 12;
    const heightOfAvatar = heightOfUserBox * 0.6;
    // const [notSeenCount, setNotSeenCount] = React.useState(0);
    const [loading, setLoading] = React.useState(false);

    let {
        AuthUser,
    } = useAppContext();

    let lastMessageTime;
    let formattedTime;
    let formattedMsg;
    let notSeenMessages = 0;
    let noOfUnseenMessages = 0;
    
    if (data.messagesArray && data.messagesArray.length > 0) {
        lastMessageTime = data.messagesArray[data.messagesArray.length - 1].createdAt;
        // formattedTime = lastMessageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const date = new Date(lastMessageTime);

        // Extract hours, minutes, and seconds from the Date object
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes(); // Ensure minutes are displayed with leading zero if less than 10
        const seconds = "0" + date.getSeconds(); // Ensure seconds are displayed with leading zero if less than 10
        const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine whether AM or PM
        // Format the time
        formattedTime = hours + ':' + minutes.substr(-2) + ' ' + ampm;
        
        // Display the formatted time
        formattedMsg = data.messagesArray[data.messagesArray.length - 1].text.length > 30 ? data.messagesArray[data.messagesArray.length - 1].text.slice(0, 30) + '...' : data.messagesArray[data.messagesArray.length - 1].text;
        noOfUnseenMessages = data.messagesArray.filter((msg) => (!msg.seen && msg.user._id !== AuthUser.userName)).length;
    }

    

    console.log('noOfUnseenMessages', noOfUnseenMessages);

    if(loading){
        return(
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size='large' color={COLORS.primary} />
            </View>
        )
    }


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
                    switch (navigationDestination) {
                        case 'Chat':
                            navigation.navigate('Chat', { isGroup: false, data: data, setData: setData });
                            break;
                        case 'AboutUser':
                            navigation.navigate('AboutUser', { userData: userData });
                            break;
                        default:
                            break;
                    }
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
                        <Avatar.Text size={heightOfAvatar} label={data.sender.avatar.image === '' ? data.sender.avatar.icon : ''} />
                        <View
                            style={{
                                flexDirection: 'column',
                                marginLeft: 10
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: styles ? styles.fontWeight : 'bold',
                                    color: 'black',
                                    fontSize: 16
                                }}
                            >{data.sender.firstName + ' ' + data.sender.lastName}</Text>
                            {
                                data.messagesArray && data.messagesArray.length > 0 ? (
                                    <Text style={{
                                        fontWeight: '400',
                                        color: 'black'
                                    }}>{formattedMsg}</Text>
                                ) : null
                            }

                        </View>
                    </View>
                    <View>
                        <View>
                        {
                            data.messagesArray && data.messagesArray.length > 0 ? (
                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: 12
                                    }}
                                >{formattedTime}</Text>
                            ) : null
                        }
                        </View>
                        {
                            noOfUnseenMessages ?? 0 > 0 ? (
                                <View>
                                    <Badge
                                        style={{
                                            backgroundColor: COLORS.primary,
                                            marginTop: 5,
                                            color: COLORS.white
                                        }}
                                        size={20}
                                    >
                                        {noOfUnseenMessages}
                                    </Badge>
                                </View>
                            ) : null
                        }
                    </View>
                </View>
            </TouchableRipple>
            <Divider />
        </>
    )
}