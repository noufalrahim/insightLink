import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HomeScreen } from './HomeScreen';
import { CallScreen } from './CallScreen';
import { StreamVideo, StreamVideoClient } from '@stream-io/video-react-native-sdk';

const apiKey = 'mmhfdzb5evj2'; 
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiS2lyX0thbm9zIiwiaXNzIjoiaHR0cHM6Ly9wcm9udG8uZ2V0c3RyZWFtLmlvIiwic3ViIjoidXNlci9LaXJfS2Fub3MiLCJpYXQiOjE3MTUxMDYxNjgsImV4cCI6MTcxNTcxMDk3M30.Kj1Bl6G-KhqqUsY20f2fhbYllcahrHHED_ULZVc6gz4';
const userId = 'Kir_Kanos'; 
const callId = 'rudjVAVjBpi6'; 

const user = {
    id: userId,
    name: 'John Malkovich',
    image: `https://getstream.io/random_png/?id=${userId}&name=John+Malkovich`,
};
const client = new StreamVideoClient({ apiKey, user, token });


export default function VideoCall({navigation, route}: any) {

    const callId = route.params?.callId;

    return (
        <StreamVideo client={client}>
            <SafeAreaView style={styles.container}>
                    <CallScreen navigation={navigation} callId={callId} />
            </SafeAreaView>
        </StreamVideo>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
    },
});
