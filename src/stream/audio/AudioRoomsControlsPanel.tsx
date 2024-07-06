import React from 'react';
import { Dimensions, Pressable, View } from 'react-native';
import { COLORS } from '../../constants/AppConstant';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { OwnCapability, useCall, useCallStateHooks, useConnectedUser} from '@stream-io/video-react-native-sdk';
import { PermissionRequestsPanel } from './permissionRequestPanel';

// const newUser: UserObjectRequest = {
//   id: 'userid',
//   role: 'user',
//   custom: {
//     color: 'red',
//   },
//   name: 'This is a test user',
//   image: 'link/to/profile/image',
// };
// await client.upsertUsers({
//   users: {
//     [newUser.id]: newUser,
//   },
// });

export const AudioRoomControlsPanel = ({navigation}: any) => {

  const goToHomeScreen = () => { }

  const { height, width } = Dimensions.get('window');

  const heightOfControlsPanel = height * 0.1;

  const [isAwaitingAudioApproval, setIsAwaitingAudioApproval] = React.useState(false);


  const [buttons, setButtons] = React.useState<any>([
    { id: 'mic', icon: 'microphone-off', color: COLORS.primary, changeToIcon: 'microphone-off', bgColor: '', enabled: true }, 
    { id: 'horn', icon: 'bullhorn', color: COLORS.white, changeToIcon: 'bullhorn-off', bgColor: COLORS.primary, enabled: true }
  ]);

  const call = useCall();
  const { useMicrophoneState } = useCallStateHooks();
  const { status } = useMicrophoneState();

  const hasPermission = call?.permissionsContext.hasPermission(OwnCapability.SEND_AUDIO);
  const canRequestSpeakingPermissions = call?.permissionsContext.canRequest(OwnCapability.SEND_AUDIO);

  const connectedUser = useConnectedUser();
  React.useEffect(() => {
    if (!(call && connectedUser)) {
      return;
    }
    const unsubscribe = call.on('call.permissions_updated', event => {
      if (event.type !== 'call.permissions_updated') {
        return;
      }
      if (connectedUser.id !== event.user.id) {
        return;
      }
      setIsAwaitingAudioApproval(false);
      // automatically publish/unpublish audio stream based on the new permissions
      if (event.own_capabilities.includes(OwnCapability.SEND_AUDIO)) {
        call.microphone.enable();
      } else {
        call.microphone.disable();
      }
    });

    return () => unsubscribe();
  }, [call, connectedUser]);

  const onhandleChange = ({id}: any) => {
    console.log('id', id);
    const newButtons = buttons.map((button: any) => {
      if (id === 'mic' && button.id === 'mic') {

        if (!hasPermission) {
          setIsAwaitingAudioApproval(true);
          return call?.requestPermissions({
            permissions: [OwnCapability.SEND_AUDIO],
          });
        }

        call?.microphone.toggle();

        return {
          ...button,
          icon: button.icon === 'microphone' ? 'microphone-off' : 'microphone'
        }
      }
      else if(id === 'horn' && button.id === 'horn') {
        return {
          ...button,
          icon: 'bullhorn',
          color: button.color === COLORS.primary ? COLORS.secondary : COLORS.primary,
          bgColor: button.color === COLORS.primary ? COLORS.primary : COLORS.secondary
        }
      }
      return button;
    });
    setButtons(newButtons);
  }

  console.log('buttons', status);

  const leaveCall = async () => {
    await call?.leave().then(() => {
      console.log('leave call success');
    }).catch((error) => {
      console.log('leave call error', error);
    });
    console.log('leave call');
    navigation.goBack();
  }

  return (
    <View style={{
      height: heightOfControlsPanel,
      backgroundColor: COLORS.primary,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginHorizontal: heightOfControlsPanel * 0.5,
      marginVertical: 10,
      borderRadius: 25
    }}>
      {/* <ToggleLiveButton />
       <ToggleMicButton />
       <Button style={{}} onPress={goToHomeScreen}>
          Leave Room
       </Button> */}
      {
        buttons.map((button: any, index: any) => {
          return (
            <Pressable key={index} style={{
              backgroundColor: button.bgColor || COLORS.white,
              padding: 10,
              borderRadius: 25
            }}
              onPress={() => onhandleChange({id: button.id})}
            >
              <Icon name={button.icon} size={30} color={button.color} />
            </Pressable>
          )
        })
      }
      
      <Pressable style={{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 25
      }}
        onPress={leaveCall}
      >
        <Icon name="phone-hangup" size={30} color={COLORS.white} />
      </Pressable>
      <PermissionRequestsPanel />
    </View>
  );
};
