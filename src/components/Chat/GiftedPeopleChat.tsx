import { Pressable, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import HeaderBar from '../HeaderBar';
import { useCallback, useEffect, useState } from 'react';
import renderInputToolbar from './renderInputToolbar';
import renderBubble from './renderBubble';
import ioClient from "socket.io-client";
import { ActivityIndicator, Avatar } from 'react-native-paper';
import { COLORS } from '../../constants/AppConstant';
import renderTime from './renderTime';
import { useAppContext } from '../../context/AppContext';
import createMessage from '../../api/Messages/createMessage';
import createData from '../../api/Data/createData';
import updateMessageStatus from '../../api/Messages/updateMessageStatus';

export function GiftedPeopleChatScreen({ navigation, route }: any) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const socket = ioClient("http://172.20.10.2:3000", {
    transports: ['websocket'],
  });
  const [joinedRoom, setJoinedRoom] = useState('');

  const {
    AuthUser,
  } = useAppContext();

  const Data = route.params.data;
  useEffect(() => {
    const sortedMessages: any = [...Data.messagesArray].sort((a, b) => b.createdAt - a.createdAt);
    setMessages(sortedMessages);
  }, [Data.messagesArray]);
  const setData = route.params.setData;
  
  function connectSocket() {
    console.log("Connecting....");
    setLoading(true);
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    const data = {
      seen: true,
      sendByUserName: Data.sender.userName,
      receivedByUserName: AuthUser.userName,
    }

    

    updateMessageStatus(data).then((response) => {
      if(response.status === true){
        setData((previousData: any) => {
          const newData = [...previousData]; 
          const index = newData.findIndex(data => data.room === Data.room); 
          console.log("Index: ", index);
          if (index !== -1) {
            newData[index].messagesArray.forEach((message: any) => {
              if (message.user._id != AuthUser.userName && !message.seen) {
                message.seen = true;
              }
            });
          }
          return newData;
        });
      }
    }).catch((error) => {
      console.log("Error: ", error);
    }).finally(() => {
      setLoading(false);
    });
    
    socket.on('receive-message', (message) => {
      setMessages((previousMessages: any) => GiftedChat.append(previousMessages, message));
    });

    setLoading(false);

  }

  useEffect(() => {
    connectSocket();
    socket.emit('join-room', Data.room, (resp: any) => {
      console.log(resp.message);
      setJoinedRoom(resp.room);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  console.log("sender",Data.sender);

  const onSend = useCallback((messageArr = []) => {

    setData((previousData: any) => {
      const newData = [...previousData];
      const index = newData.findIndex((data: any) => data.room === Data.room);
      console.log("Index: ", index);
      newData[index].messagesArray = [...newData[index].messagesArray, messageArr[0]];
      return newData;
    });
    socket.emit('send-message', messageArr[0], Data.room);
    console.log("Message: ", messageArr);

    const messageObj: any = {
      _idMessage: (messageArr[0] as any)?._id,
      text: (messageArr[0] as any)?.text,
      createdAt: (messageArr[0] as any)?.createdAt,
      sendByUserName: (messageArr[0] as any)?.user._id,
      receivedByUserName: Data.sender.userName,
      nameOfSender: (messageArr[0] as any)?.user.name,
      imageOfSender: AuthUser.avatar.image,
      iconOfSender: AuthUser.avatar.icon,
      seen: false,
    }

    const DataObj: any = {
      room: Data.room,
      isStoryAvailable: Data.isStoryAvailable,
      senderUserName: AuthUser.userName,
      firstName: AuthUser.firstName,
      lastName: AuthUser.lastName,
      userName: Data.sender.userName,
      profilePicture: AuthUser.avatar.image,
      authUser: Data.sender.userName,
    };

    createData(DataObj).then((response) => {
      console.log("Data Created: ", response);
    }).catch((error) => {
      console.log("Error: ", error);
    });

    createMessage(messageObj).then((response) => {
      console.log("Message Created: ", response?.data);
    }).catch((error) => {
      console.log("Error: ", error);
    }).finally(() => {
      setLoading(false);
    });

    setMessages((previousMessages: any) => GiftedChat.append(previousMessages, messageArr));
  }, []);

  const headerIcons = [
    {
      icon: 'phone',
      onPress: () => {
        console.log("roooooom",Data.room)
        navigation.navigate('AudioCall', { callId: joinedRoom });
      },
    },
    {
      icon: 'video',
      onPress: () => {
        navigation.navigate('VideoCall', { callId: joinedRoom });
      },
    }
  ];

  if(loading){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.light }}>
      <HeaderBar
        showBackBtn={true}
        navigation={navigation}
        userData={Data.sender}
        title={Data.sender.firstName + ' ' + Data.sender.lastName}
        icons={headerIcons}
      />
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{ _id: AuthUser.userName, name: AuthUser.name}}
        renderInputToolbar={renderInputToolbar}
        alwaysShowSend={true}
        minInputToolbarHeight={60}
        scrollToBottomComponent={() => (
          <Ionicons name="chevron-down" size={24} color="black" />
        )}
        renderBubble={(props) => renderBubble({ ...props, loading, })}
        renderUsernameOnMessage={true} 
        showUserAvatar={false}   
        renderAvatar={() => {
          return (
            <>
              {Data.sender.avatar.image ? (
                <Pressable
                onLongPress={() => console.log("Long Pressed")}
                onPress={() => navigation.navigate('AboutUser', { userData: Data.sender })}>
                <Avatar.Image size={40} source={{ uri: Data.sender.avatar.image }} />
                </Pressable>
              ) : (
                <Pressable
                onLongPress={() => console.log("Long Pressed")}
                onPress={() => navigation.navigate('AboutUser', { userData: Data.sender })}>
                <Avatar.Text size={40} label={Data.sender.avatar.icon} />
                </Pressable>
              )}
            </>
          )
        }}
        parsePatterns={linkStyle => [
          { type: 'phone', style: linkStyle, onPress: () => console.log("Phone Number") },
          { pattern: /@(\w+)/, style: styles.hashtag, onPress: () => console.log("At Mention") },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  hashtag: {
    color: 'blue',
    fontWeight: 'bold',
  },
});