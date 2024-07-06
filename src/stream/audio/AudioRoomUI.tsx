import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AudioRoomControlsPanel } from './AudioRoomsControlsPanel';
import { AudioRoomDescription } from './AudioRoomDescription';
import { COLORS } from '../../constants/AppConstant';
import { Button } from 'react-native-paper';

export const AudioRoomUI = ({ navigation }: any) => {

    return (
        <View style={styles.container}>
            <AudioRoomDescription navigation={navigation}/>
            <AudioRoomControlsPanel navigation={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.primary
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});