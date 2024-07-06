import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { CallScreen } from './CallScreen';
import {
  StreamVideo,
  StreamVideoClient,
} from '@stream-io/video-react-native-sdk';
import { AuthUser } from '../../constants/AppConstant';
import { useAppContext } from '../../context/AppContext';
import generateToken from '../../api/Token/generateToken';
import { StreamChat } from 'stream-chat';

const apiKey = 'mmhfdzb5evj2';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiS2l0X0Zpc3RvIiwiaXNzIjoiaHR0cHM6Ly9wcm9udG8uZ2V0c3RyZWFtLmlvIiwic3ViIjoidXNlci9LaXRfRmlzdG8iLCJpYXQiOjE3MTUwNDQ3MTcsImV4cCI6MTcxNTY0OTUyMn0.FeEME0cCFwqSW7d91QyE9OEu5DupnQXoDlCyBjOGYQw';
// const callId = 'CG521NsJhoQi';



export default function AudioCall({route, navigation}: any) {

  const {
    AuthUser
  } = useAppContext();

  console.log("AuthUser: ", AuthUser);

  const userId = AuthUser.userName;

  const streamChat = StreamChat;

  const data = {
    userId: userId,
    streamChat: streamChat,
  }

  React.useEffect(() => {
    generateToken(data).then((response) => {
      console.log("Token: ", response);
    });

  }, []);

  const user = {
    id: userId,
    name: AuthUser.firstName + ' ' + AuthUser.lastName,
    image: AuthUser.avatar.image,
  };

  const client = new StreamVideoClient({ apiKey, user, token });

  const callId = route.params.callId;
  
  return (
    <StreamVideo client={client}>
      <SafeAreaView style={styles.container}>
          <CallScreen callId={callId} navigation={navigation}/>        
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