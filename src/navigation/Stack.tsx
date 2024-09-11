import { 
    StyleSheet, Text, View  } from 'react-native'
import React from 'react'
import { Home   } from '../screens/Home' ;
import { Notifications }  from  '../screens/Notifications' ;
import { Settings }  from  '../screens/Settings' ;

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
   
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}