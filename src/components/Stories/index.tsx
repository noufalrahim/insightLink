import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Banner, TouchableRipple } from 'react-native-paper';
import { Dimensions } from 'react-native';

interface StoriesProps {
    navigation: any;
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
        };
        isStoryAvailable: boolean;
        stories: {
            _id: string;
            totalTime: number;
            storyObj: {
                _id: string;
                image: string;
                createdAt: Date;
            };
        }[];
        noOfStories: number;
        messagesArray: {
            _id: string;
            text: string;
            createdAt: Date;
            user: {
                _id: string;
                name: string;
                avatar: string;
            };
        }[];
    }[];
}

export default function Stories({ navigation, data }: StoriesProps) {
    const { width } = Dimensions.get('window');
    return (
        <ScrollView
            horizontal={true}
            style={{
                backgroundColor: 'white',
            }}
        >
            <View
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 12,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                borderRadius: 50,
                                borderWidth: 2,
                                borderColor: 'lightgrey',
                            }}

                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('StoryImage', {
                                    data: data,
                                    index: 0,
                                });
                            }}
                        >
                            <Avatar.Text size={width * 0.2} label={'NR'} style={{ margin: 4 }} />
                        </TouchableOpacity>
                        <Text style={{ color: 'black', marginTop: 5 }}>{
                            'Your Story'
                        }</Text>
                        
                    </View>
            {
                data.map((item, index) => (
                    item.isStoryAvailable && item.noOfStories > 0 &&
                    <View
                        key={index}
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 12,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                borderRadius: 50,
                                borderWidth: 2,
                                borderColor: 'lightgrey',
                            }}

                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('StoryImage', {
                                    data: data,
                                    index: index,
                                });
                            }}
                        >
                            <Avatar.Text key={index} size={width * 0.2} label={item.sender.avatar.icon} style={{ margin: 4 }} />
                        </TouchableOpacity>
                        <Text style={{ color: 'black', marginTop: 5 }}>{
                            item.sender.firstName + ' ' + item.sender.lastName
                        }</Text>
                    </View>
                ))
            }
        </ScrollView>
    )
}