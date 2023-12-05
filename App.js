import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Personal from './screens/Personal';
import Groups from './screens/Groups';
import Favourites from './screens/Favourites';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './screens/Chat';
import HeaderBox from './Components/HeaderBox/HeaderBox';
import Info from './screens/Info';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"
import { PRIMARY_COLOR } from './Constants/color';
import Settings from './screens/Settings';
import GroupChat from './screens/GroupChat';
import Profile from './screens/Profile';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function Overview() {
  return (
    <><View style={styles.container}>
      <BottomTab.Navigator backBehavior='order' screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarIndicatorStyle: {
          backgroundColor: 'white',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: PRIMARY_COLOR,
        },
        headerShown: true,
        headerTitle: "insightLink",
        headerStyle: {
          backgroundColor: PRIMARY_COLOR,
          height: 120,
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold',
        },
      }}>
        <BottomTab.Screen name="Personal" component={Personal}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
            headerShown: true,
            headerRight: () => (
              <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginRight: 20,
                  marginTop: 50
                }}>Recent Chats</Text>
                <Ionicons name="search" color="white" size={20} style={{ marginRight: 20 }} />
              </View>

            )
          }}
        />
        <BottomTab.Screen name="Groups" component={Groups}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people" color={color} size={size} />
            ),
            headerShown: true,
            headerRight: () => (
              <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginRight: 20,
                  marginTop: 50
                }}>Groups</Text>
                <Ionicons name="search" color="white" size={20} style={{ marginRight: 20 }} />
              </View>

            )
          }}
        />
        <BottomTab.Screen name="Pinned Chats" component={Favourites}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='pricetags-outline' color={color} size={size} />
            ),
            headerRight: () => (
              <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginRight: 20,
                  marginTop: 50
                }}>Pinned Chats</Text>
                <Ionicons name="search" color="white" size={20} style={{ marginRight: 20 }} />
              </View>

            )
          }}
        />
        <BottomTab.Screen name="Settings" component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cog-outline" color={color} size={size} />
            ),
            headerRight: () => (
              <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginRight: 20,
                  marginTop: 50
                }}>Settings</Text>
                <Ionicons name="search" color="white" size={20} style={{ marginRight: 20 }} />
              </View>

            )
          }}
        />
      </BottomTab.Navigator>
      <View style={styles.bottomContainer}></View>
    </View>
    </>
  )
}

function About({ route }) {
  const data = route.params.data;
  return (
    <>
     <Stack.Navigator screenOptions={{
      headerShown: false}}>
        <Stack.Screen name="About" component={Info}
          initialParams={{ data: data }}/>
      </Stack.Navigator>
      <View style={styles.bottomContainer}></View>
    </>
  )
}

function ProfileScreen({ route }) {
  const data = route.params.image;
  return (
    <>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Profile" component={Profile}
          initialParams={{ data: data }} />
      </Stack.Navigator>
    </>
  )
}

function ImageScreen({ route }) {
  const data = route.params.image;
  const name = route.params.name;
  return (
    <>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: 'white',
        
        headerTitle: () => (
          <Text style={{color: "white", fontSize: 20}}>{name}</Text>
        ),
      }}>
        <Stack.Screen name="Image" component={Profile}
          initialParams={{ data: data }} />
      </Stack.Navigator>
    </>
  )
}


export default function App() {
  return (
    <><StatusBar style="light" />
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: PRIMARY_COLOR },
            headerTintColor: "white",
          }}>
            <Stack.Screen name="Overview" component={Overview} options={{
              headerShown: false,
            }} />
            <Stack.Screen name="Chat" component={Chat} options={({ route }) => {
              return {
                headerTitle: () => (
                  <HeaderBox data={route.params.data} />
                ),
                headerStyle: {
                  backgroundColor: PRIMARY_COLOR,
                },
                headerTintColor: 'white',
              }
            }} />
            <Stack.Screen name="GroupChat" component={GroupChat} options={({ route }) => {
              return {
                headerTitle: () => (
                  <>
                  <HeaderBox mode="group" data={route.params.data} />
                  </>
                ),
                headerStyle: {
                  backgroundColor: PRIMARY_COLOR,
                },
                headerTintColor: 'white',
              }
             }}/>
            <Stack.Screen name="Profile photo" component={ProfileScreen} options={{
              headerStyle: {
                backgroundColor: "black",
              },
              headerRight: () => (
                <Ionicons name="pencil" color="white" size={25} style={{ marginRight: 20 }} />
              ),
            }}/>
            <Stack.Screen name="Image" component={ImageScreen} options={{
              headerShown: false,
            }}/>
            <Stack.Screen name="Info" component={About} options={{
              headerShown: true,
            }}/>
          </Stack.Navigator>
        </View>
      </NavigationContainer></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR
  },
  bottomContainer: {
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    paddingLeft: 25,
    paddingTop: 10
  },

});
