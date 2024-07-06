import * as React from 'react';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';


interface CustomModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export default function CustomModal({visible, setVisible}: CustomModalProps) {

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  return (
    <>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
    </>
  );
};

