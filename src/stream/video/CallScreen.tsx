import React from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import {
    Call,
    CallContent,
    StreamCall,
    useStreamVideoClient,
    CallControlProps,
    HangUpCallButton,
    ToggleAudioPublishingButton as ToggleMic,
    ToggleVideoPublishingButton as ToggleCamera,
    useCall,
} from '@stream-io/video-react-native-sdk';
import { Avatar } from 'react-native-paper';
import { COLORS } from '../../constants/AppConstant';
import LottieView from 'lottie-react-native';

type Props = {
    navigation: any;
    callId: string;
};
export const CallScreen = ({ navigation, callId }: Props) => {

    const [call, setCall] = React.useState<Call | null>(null);

    const client = useStreamVideoClient();

    React.useEffect(() => {
        const call = client?.call('default', callId);
        call?.join({ create: true })
            .then(() => setCall(call));
    }, [client]);

    if (!call) {
        return (
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
        );
    }

    return (
        <StreamCall call={call}>
            <View style={styles.container}>
                <CallContent
                    onHangupCallHandler={() => {
                        navigation.goBack();
                    }}
                />
            </View>
        </StreamCall>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    customCallControlsContainer: {
        position: 'absolute',
        bottom: 40,
        paddingVertical: 10,
        width: '80%',
        marginHorizontal: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'orange',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 5,
        zIndex: 5,
    },
});
