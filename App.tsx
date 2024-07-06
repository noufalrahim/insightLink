import 'react-native-gesture-handler'
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { PaperProvider } from 'react-native-paper';

import ChatScreen from './src/screens/ChatScreen';
import InboxScreen from './src/screens/InboxScreen/PeopleScreen';
import AboutUser from './src/screens/ProfileScreen/AboutUser';
import AboutSelf from './src/screens/ProfileScreen/AboutSelf';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from './src/screens/SettingsScreen';
import { AppProvider } from './src/context/AppContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CommonActions } from '@react-navigation/native';
import PeopleScreen from './src/screens/InboxScreen/PeopleScreen';
import GroupsScreen from './src/screens/InboxScreen/GroupScreen';
import AboutGroup from './src/screens/ProfileScreen/AboutGroup';
import StoryImage from './src/screens/Stories/StoryImage';
import LoginScreen from './src/screens/Authentication/LoginScreen';
import RegisterScreen from './src/screens/Authentication/RegisterScreen';
import MoreInfo from './src/screens/Authentication/RegisterScreen/MoreInfo';
import SearchScreen from './src/screens/SearchScreen';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AudioCall from './src/stream/audio/App';
import { CallScreen } from './src/stream/audio/CallScreen';
import VideoCall from './src/stream/video/VideoCall';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


//Dark mode
// const isDarkMode = useColorScheme() === 'dark';
// backgroundColor: isDarkMode ? Colors.black : Colors.white,
// const backgroundStyle = {
//   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// };


function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          shifting={true}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }: any) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Inbox"
        component={PeopleScreen}
        options={{
          tabBarLabel: 'People',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="android-messages" size={size} color={color} />;
          },
        }}
      />
      {/* <Tab.Screen
        name="Group"
        component={GroupsScreen}
        options={{
          tabBarLabel: 'Group',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="account-group" size={size} color={color} />;
          },
        }}
      /> */}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  )
}

function App(): React.JSX.Element {

  return (
    <PaperProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <AppProvider>
          <StatusBar />
          <BottomSheetModalProvider>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{
                headerShown: false
              }}>
                {/*  */}
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="AudioCall" component={AudioCall} />
                <Stack.Screen name="VideoCall" component={VideoCall} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="MoreInfo" component={MoreInfo} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
                <Stack.Screen name="Home" component={BottomNavigator} />
                <Stack.Screen name="Chat" component={ChatScreen} />
                <Stack.Screen name="AboutUser" component={AboutUser} />
                <Stack.Screen name="AboutSelf" component={AboutSelf} />
                <Stack.Screen name="AboutGroup" component={AboutGroup} />
                <Stack.Screen name="StoryImage" component={StoryImage} />
              </Stack.Navigator>
            </NavigationContainer>
          </BottomSheetModalProvider>
        </AppProvider>
      </SafeAreaView>
      </GestureHandlerRootView>
    </PaperProvider>
  );
}



export default App;
