import * as React from 'react';
import { FAB, Portal, PaperProvider } from 'react-native-paper';

export default function FabIcon({navigation, icon, onPress}: {navigation: any, icon: string, onPress: any}) {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }: any) => setState({ open });

  const { open } = state;

  return (
    <>
      {/* <FAB.Group
          open={open}
          visible
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            { icon: 'plus', onPress: () => console.log('Pressed add') },
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        /> */}
      <FAB
        icon={icon}
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
        }}
        onPress={onPress}
      />
    </>
  );
};

