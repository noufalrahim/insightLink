import * as React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';

export default function Modal({visible, setVisible, heading, content}: {visible: boolean, setVisible: any, heading: string, content: string}) {

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>
                {heading}
            </Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">
                {content}
              </Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
  );
};

