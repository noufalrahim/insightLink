import React from 'react'
import { Appbar, Avatar } from 'react-native-paper';

interface HeaderBarProps {
    navigation: any;
    title: string;
    showBackBtn?: boolean;
    icons?: 
    {
        icon: string;
        onPress: () => void;
    }[],
    userData?: {
        firstName: string;
        lastName: string;
        avatar: {
            image: string;
            icon: string;
        }
    },
    groupData?: {
        room: string,
        groupName: string;
        groupAvatar: {
            image: string;
            icon: string;
        },
        groupMembers: {
            _id: string;
            firstName: string;
            lastName: string;
            userName: string;
            avatar: {
                image: string;
                icon: string;
            }
        }[],
    },
    elevated?: boolean;
    inverted?: boolean;
    color?: string;
}

export default function HeaderBar({navigation, title, showBackBtn, icons, userData, groupData, elevated, inverted, color}: HeaderBarProps) {
    const _goBack = () => navigation.goBack();

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header
        dark={false}
        style={{
            backgroundColor: color ? color : inverted ? 'black' : 'white',
            shadowColor: "transparent",
        }}
        elevated={elevated}
        >
            {
                showBackBtn && <Appbar.BackAction onPress={_goBack} color={inverted ? 'white' : 'black'} />
            }
            <Appbar.Content 
            onPress={() => {
               {
                userData && navigation.navigate('AboutUser', {userData: userData})
               }
                {
                 groupData && navigation.navigate('AboutGroup', {groupData: groupData})
                }
            }} color={inverted ? 'white' : 'black'}
            title={title}/>
            
            {
                icons && icons.map((item, index) => (
                    <Appbar.Action key={index} icon={item.icon} onPress={item.onPress} color={inverted ? 'white' : 'black'} />
                ))
            }
        </Appbar.Header>
    );
}