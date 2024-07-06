import { View, Text, ScrollView, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { Avatar, TouchableRipple } from 'react-native-paper';
import HeaderBar from '../../components/HeaderBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthUser } from '../../constants/AppConstant';
import Modal from '../../components/Modal';

interface SettingsScreenProps {
  navigation: any;
}

export default function SettingsScreen({ navigation }: SettingsScreenProps) {

  const { width, height } = Dimensions.get('window');
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState('');
  const [content, setContent] = React.useState('');
  const Data = {
    name: AuthUser.firstName + ' ' + AuthUser.lastName,
    userName: AuthUser.userName,
    avatarImg: AuthUser.avatar.image,
    avatarIcon: AuthUser.avatar.icon,
    bio: AuthUser.bio
  }

  const tiles = [
    {
      title: 'Notifications',
      icon: 'bell',
      onPress: () => {
        setVisible(true);
        setText('Notifications');
        setContent('Notifications settings will be available soon');
      }
    },
    {
      title: 'Privacy',
      icon: 'lock',
      onPress: () => {
        setVisible(true);
        setText('Privacy');
        setContent('Privacy settings will be available soon');
      }
    },
    {
      title: 'Help',
      icon: 'help-circle',
      onPress: () => {
        setVisible(true);
        setText('Help');
        setContent('Help settings will be available soon');
      }
    },
    {
      title: 'Invite a Friend',
      icon: 'account-plus',
      onPress: () => {
        setVisible(true);
        setText('Invite a Friend');
        setContent('Invite a friend settings will be available soon');
      }
    },
    {
      title: 'About',
      icon: 'information',
      onPress: () => {
        setVisible(true);
        setText('About');
        setContent('About settings will be available soon');
      }
    }
  ]

  const heightOfAbout = height / 5;
  const heightOfAvatar = heightOfAbout * 0.7;

  return (
    <>
    <Modal visible={visible} setVisible={setVisible} heading={text} content={content} />
      <HeaderBar title="Settings" navigation={navigation} showBackBtn={false} />
      <ScrollView
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}
      >
        <TouchableRipple
          rippleColor={'rgba(0, 0, 0, .32)'}
          onPress={() => navigation.navigate('AboutSelf')}
        >
          <View
            style={{
              height: heightOfAbout,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginHorizontal: 20,
            }}
          >
            {
              Data.avatarImg ? (
                <Avatar.Image size={heightOfAvatar} source={{ uri: Data.avatarImg }} />
              ) : (
                <Avatar.Text size={heightOfAvatar} label={Data.avatarIcon} />
              )
            }
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}
            >
              <Text style={{ fontSize: 25, color: 'black' }}>{Data.name}</Text>
              <Text style={{ fontSize: 15, color: 'black' }}>{Data.bio}</Text>
            </View>
          </View>
        </TouchableRipple>
        <View>
          {
            tiles.map((tile, index) => (
              <TouchableRipple
                key={index}
                rippleColor={'rgba(0, 0, 0, .32)'}
                onPress={tile.onPress}
              >
                <View
                  style={{
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightgray',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    height: height / 12,
                    paddingHorizontal: 20
                  }}
                >
                  <Icon name={tile.icon} size={24} color="black" />
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                      marginLeft: 10
                    }}
                  >{tile.title}</Text>
                </View>
              </TouchableRipple>
            ))
          }
        </View>
      </ScrollView>
    </>
  )
}