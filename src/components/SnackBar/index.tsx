import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar, Text } from 'react-native-paper';

interface SnackBarProps {
    text: string
    visible: boolean
    setVisible: (visible: boolean) => void
}

export default function SnackBar({ text, visible, setVisible }: SnackBarProps) {

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    return (
        <Snackbar
            style={{
                backgroundColor: 'black',
                borderRadius: 10,
            }}
            visible={visible}
            duration={2000}
            onDismiss={onDismissSnackBar}>
            <Text
                style={{
                    color: 'white',
                    fontSize: 14,
                    justifyContent: 'center',
                }}
            >
                {text}
            </Text>
        </Snackbar>
    );
};


