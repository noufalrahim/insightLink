import React from 'react'
import { GiftedPeopleChatScreen } from '../../components/Chat/GiftedPeopleChat';
import { GiftedGroupChatScreen } from '../../components/Chat/GiftedGroupChat';
export default function ChatScreen({ navigation, route }: { navigation: any, route: any }) {
  const isGroup = route.params.isGroup;
  return (
    !isGroup ? (
      <GiftedPeopleChatScreen navigation={navigation} route={route} />
    ) : (
      <GiftedGroupChatScreen navigation={navigation} route={route} />
    )
  );
}
 