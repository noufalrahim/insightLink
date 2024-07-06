import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import {
    Call, StreamCall,
    useStreamVideoClient,
} from '@stream-io/video-react-native-sdk';
import { AudioRoomUI } from './AudioRoomUI';
import LottieView from 'lottie-react-native';
import { COLORS } from '../../constants/AppConstant';

export const CallScreen = ({ callId, navigation }: any) => {
    const [call, setCall] = React.useState<Call | null>(null);

    const client = useStreamVideoClient();


    React.useEffect(() => {
        const call = client?.call('audio_room', callId);

        if (call) {
            call
                .join({
                    create: true,
                    data: {
                        members: [],
                        custom: {
                            title: 'React Native test',
                            description: 'We are doing a test of react native audio rooms',
                        },
                    },
                })
                .then(() => {
                    call.goLive();
                    console.log('Call is live');
                })
                .then(() => {
                    console.log('Setting call');
                    setCall(call)
                }).catch((e) => {
                    console.log('Error joining call: ', e);
                });
        }
    }, [client]);
    if (!call) {
        return (
            <>
                <View style={{
                    flex: 1,
                    backgroundColor: COLORS.primary,
                }}>
                    <LottieView
                        style={
                            {
                                width: Dimensions.get('window').width,
                                height: Dimensions.get('window').height,
                                backgroundColor: COLORS.primary,
                            }
                        }
                        source={require("../../assets/sound_wave.json")} autoPlay loop />
                    <Text style={{
                        color: COLORS.white,
                        fontSize: 20,
                        textAlign: 'center',
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        paddingTop: 200,
                    
                    }}>
                        Joining Call...
                    </Text>
                </View>
            </>
        )
    }

    return (
        <StreamCall call={call}>
            <View style={{
                flex: 1,
            }}>

                <AudioRoomUI navigation={navigation} />
            </View>
        </StreamCall>
    );
};
