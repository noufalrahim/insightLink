import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { speaking, useCallStateHooks } from '@stream-io/video-react-native-sdk';
import HeaderBar from '../../components/HeaderBar';
import { COLORS } from '../../constants/AppConstant';
import { Avatar } from 'react-native-paper';

export const AudioRoomDescription = ({ navigation }: any) => {
    const { useCallCustomData, useParticipants, useIsCallLive } = useCallStateHooks();
    const custom = useCallCustomData();
    const participants = useParticipants({ sortBy: speaking });
    const isLive = useIsCallLive();
    const imagePresent = participants[0].image ? true : false;

    const { height, width } = Dimensions.get('window');

    const callContainerHeight = height * 0.3;

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.primary
        }}>
            <HeaderBar
                title='Audio Call'
                navigation={navigation}
                elevated
                color={COLORS.primary}
                inverted
            />
            <View
                style={{
                    alignItems: 'center',
                    height: callContainerHeight,
                    backgroundColor: COLORS.primary,
                    justifyContent: 'center',
                }}
            >
                
                {
                    imagePresent ? (
                        <Avatar.Text size={callContainerHeight * 0.5} label={participants[0].name[0].charAt(0)} />
                    ) : (
                        <Avatar.Image size={callContainerHeight * 0.5} source={{ uri: participants[0].image }} />
                    )
                }

                
                <Text style={{
                    color: COLORS.white,
                    paddingVertical: 8,
                    fontSize: 20,
                }}>{participants[0].name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: COLORS.white
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    subtitle: {
        paddingVertical: 4,
        fontSize: 14,
        color: 'black',
    },
    count: {
        fontSize: 12,
        color: 'black',
    },
});
