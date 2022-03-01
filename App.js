
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import NotificationScreen from './screens/NotificationScreen';
import MessageScreen from './screens/MessageScreen';
import HomeIcon from './src/Icons/HomeIcon';
import SearchIcon from './src/Icons/SearchIcon';
import NotificationIcon from './src/Icons/NotificationIcon';
import MessageIcon from './src/Icons/MessageIcon';
import { Platform,SafeAreaView,StatusBar } from 'react-native';


export default function App() {

  const Tab = createBottomTabNavigator();

   return(

     
     <NavigationContainer>
      
      <SafeAreaView
      style={{ flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,}}
      >
     
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel:false,
      headerShown:false
    }}
    >
      <Tab.Screen
      options={{
        tabBarIcon: () => <HomeIcon />
      }}
      name="Home" component={HomeScreen} />
      <Tab.Screen
      options={{
        tabBarIcon: () => <SearchIcon />
      }}
      name="Search" component={SearchScreen} />
      <Tab.Screen
      options={{
        tabBarIcon: () => <NotificationIcon />
      }}
      name="Notification" component={NotificationScreen} />
      <Tab.Screen
      options={{
        tabBarIcon: () => <MessageIcon />
      }}
      name="Message" component={MessageScreen} />
    </Tab.Navigator>
      

     
      </SafeAreaView>
  </NavigationContainer>
  );
} 

