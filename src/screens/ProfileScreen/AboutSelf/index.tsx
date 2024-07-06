import { View, Text, ScrollView, Dimensions, Pressable } from 'react-native'
import { Avatar, TouchableRipple } from 'react-native-paper'
import HeaderBar from '../../../components/HeaderBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { AuthUser, COLORS } from '../../../constants/AppConstant';


export default function AboutSelf({ navigation }: any) {

    const { width, height } = Dimensions.get('window');
    const heightOfProfileBox = height * 0.45;
    const heightOfAvatar = heightOfProfileBox * 0.4;
    const heightOfTile = height / 13;

    const Data = {
        name: AuthUser.firstName + ' ' + AuthUser.lastName,
        userName: AuthUser.userName,
        bio: AuthUser.bio,
        avatarImg: AuthUser.avatar.image,
        avatarIcon: AuthUser.avatar.icon
    }

    const tiles = [
        {
            title: 'Name',
            icon: 'account',
            content: Data.name,
        },
        {
            title: 'Username',
            icon: 'account',
            content: Data.userName,
        },
        {
            title: 'Bio',
            icon: 'information',
            content: '',
        },
    ]


    return (
        <>
            <HeaderBar showBackBtn={true} navigation={navigation} title='' />
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
                        Data.avatarImg ? (
                            <Pressable
                                onPress={() => { console.log('Pressed') }}
                            >
                                <Avatar.Image size={heightOfAvatar} source={{ uri: Data.avatarImg }} />
                            </Pressable>
                        ) : (
                            <Pressable
                                onPress={() => { console.log('Pressed') }}
                            >
                                <Avatar.Text size={heightOfAvatar} label={Data.avatarIcon} />
                            </Pressable>
                        )
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
                        >{Data.name}</Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 16,
                                color: 'gray'
                            }}
                        >@{Data.userName}</Text>
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

                                <View
                                    style={{
                                        padding: 10,
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'lightgray',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        height: height / 9,
                                        paddingHorizontal: 20
                                    }}
                                    key={index}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Icon name={tile.icon} size={24} color="black" />
                                        <View>
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    color: 'gray',
                                                    marginLeft: 10
                                                }}  
                                            >{tile.title}</Text>
                                            {
                                                tile.title === 'Bio' && (tile.content === undefined || tile.content === '') ? (
                                                    <Text style={{
                                                        fontStyle: 'italic',
                                                        color: 'gray',
                                                        fontSize: 16,
                                                        marginLeft: 10
                                                    }}>
                                                        Add a Bio
                                                    </Text> ) : (
                                                    <Text
                                                        style={{
                                                            fontSize: 16,
                                                            color: COLORS.black,
                                                            marginLeft: 10
                                                        }}
                                                    >{tile.content}</Text>
                                                )  
                                            }
                                        </View>
                                    </View>
                                    <TouchableRipple
                                        onPress={() => { console.log('Pressed') }}
                                        rippleColor={'rgba(0, 0, 0, .32)'}
                                        style={{
                                            borderRadius: 1,
                                            width: 40,
                                            height: 40,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <Icon name='pencil' size={24} color="black" />
                                    </TouchableRipple>
                                </View>
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
        </>
    )
}