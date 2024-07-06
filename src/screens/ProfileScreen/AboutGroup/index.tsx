import { View, Text, ScrollView, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { Avatar, Divider, TouchableRipple } from 'react-native-paper'
import HeaderBar from '../../../components/HeaderBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserBox from '../../../components/Inbox/UserBox';


export default function AboutGroup({ navigation, route }: any) {

    const { width, height } = Dimensions.get('window');
    const heightOfProfileBox = height * 0.45;
    const heightOfAvatar = heightOfProfileBox * 0.4;
    const heightOfTile = height / 13;
    const groupData = route.params.groupData;
    console.log('groupData', groupData);

    const tiles = [
        {
            title: 'Block Group',
            icon: 'block-helper',
            onPress: () => console.log('Block')
        },
        {
            title: 'Report Group',
            icon: 'alert-circle',
            onPress: () => console.log('Report')
        },
        {
            title: 'Share Group Link',
            icon: 'share',
            onPress: () => console.log('Share')
        },
        {
            title: 'Mute Notifications',
            icon: 'bell-off',
            onPress: () => console.log('Mute Notifications')
        },
        {
            title: 'Delete Group',
            icon: 'delete',
            onPress: () => console.log('Delete Chat')
        },
        {
            title: 'Leave Group',
            icon: 'exit-to-app',
            onPress: () => console.log('Leave Group')
        }
    ]

    const communicationTiles = [
        {
            title: 'Audio',
            icon: 'phone',
            onPress: () => console.log('Audio')
        },
        {
            title: 'Video',
            icon: 'video',
            onPress: () => console.log('Video')
        },
    ]

    return (
        <>
            <HeaderBar showBackBtn={true} title={groupData.groupName} navigation={navigation} />
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                }}
            >
                <View
                    style={{
                        width: width,
                        height: heightOfProfileBox,
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}
                >
                    {
                        groupData.groupAvatar.image ?
                            <Avatar.Image
                                size={heightOfAvatar}
                                source={{ uri: groupData.groupAvatar.image }}
                            />
                            :
                            <Avatar.Text
                                size={heightOfAvatar}
                                label={groupData.groupAvatar.icon}
                            />
                    }

                    <View
                        style={{
                            marginTop: 10
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                color: 'black'
                            }}
                        >{
                                groupData.groupName
                            }</Text>
                    </View>

                    <View
                        style={{
                            width: width,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            marginTop: 15
                        }}
                    >
                        {
                            communicationTiles.map((tile, index) => (
                                <Pressable
                                    key={index}
                                    style={{
                                        padding: 10,
                                        borderWidth: 1,
                                        borderColor: 'lightgray',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        borderRadius: 10,
                                        width: width / 3
                                    }}
                                    onPress={tile.onPress}
                                >
                                    <Icon name={tile.icon} size={24} color="black" />
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            color: 'black',
                                            marginLeft: 10
                                        }}
                                    >{tile.title}</Text>
                                </Pressable>
                            ))
                        }
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: 'black',
                            marginLeft: 10,
                            marginTop: 10,
                            paddingHorizontal: 1
                        }}
                    >Group Members</Text>
                    {
                        groupData.groupMembers.map((member: any, index: number) => (
                            <>
                                <View
                                    key={index}
                                >
                                    <UserBox
                                        data={{
                                            room: groupData.room,
                                            sender: member,
                                            messagesArray: [],
                                        }}
                                        navigation={navigation}
                                        styles={
                                            {
                                                fontWeight: 'normal'
                                            }
                                        }
                                        navigationDestination='AboutUser'
                                        userData={member}
                                    />
                                    <Divider />
                                </View>
                            </>
                        ))
                    }
                </View>
                <View
                    style={{
                        width: width,
                        marginTop: 30,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: 'black',
                            marginLeft: 10,
                            marginTop: 10,
                            paddingHorizontal: 1,
                            marginHorizontal: 10
                        }}
                    >Group Settings</Text>
                    {
                        tiles.map((tile, index) => (
                            <TouchableRipple
                                key={index}
                                rippleColor={'rgba(0, 0, 0, .32)'}
                                onPress={tile.onPress}
                            >
                                <View
                                    style={{
                                        padding: 10,
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'lightgray',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        height: height / 13,
                                        paddingHorizontal: 20
                                    }}
                                >
                                    <Icon name={tile.icon} size={24} color="black" />
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            color: 'black',
                                            marginLeft: 10
                                        }}
                                    >{tile.title}</Text>
                                </View>
                            </TouchableRipple>
                        ))
                    }
                </View>
            </ScrollView>
        </>
    )
}