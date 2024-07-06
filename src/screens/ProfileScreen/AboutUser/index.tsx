import { View, Text, ScrollView, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { Avatar, TouchableRipple } from 'react-native-paper'
import HeaderBar from '../../../components/HeaderBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function AboutUser({ navigation, route }: any) {

    const { width, height } = Dimensions.get('window');
    const heightOfProfileBox = height * 0.45;
    const heightOfAvatar = heightOfProfileBox * 0.4;
    const heightOfTile = height / 13;
    const userData = route.params.userData;
    console.log(userData);

    const tiles = [
        {
            title: 'Block',
            icon: 'block-helper',
            onPress: () => console.log('Block')
        },
        {
            title: 'Report',
            icon: 'alert-circle',
            onPress: () => console.log('Report')
        },
        {
            title: 'Delete Chat',
            icon: 'delete',
            onPress: () => console.log('Delete Chat')
        },
        {
            title: 'Share',
            icon: 'share',
            onPress: () => console.log('Share')
        },
        {
            title: 'Mute Notifications',
            icon: 'bell-off',
            onPress: () => console.log('Mute Notifications')
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
            <HeaderBar showBackBtn={true} title={userData.firstName + ' ' + userData.lastName} navigation={navigation} />
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
                        userData.avatar.image ?
                            <Avatar.Image
                                size={heightOfAvatar}
                                source={{ uri: userData.avatar.image }}
                            />
                            :
                            <Avatar.Text
                                size={heightOfAvatar}
                                label={userData.avatar.icon}
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
                            userData.firstName + ' ' + userData.lastName
                        }</Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 16,
                                color: 'gray'
                            }}
                        >@{userData.userName}</Text>
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
                <View>
                    <View
                        style={{
                            width: width,

                        }}
                    >
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
                </View>
            </ScrollView>
        </>
    )
}