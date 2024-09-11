import { StyleSheet, Text,  SafeAreaView , View , ScrollView  } from 'react-native';

import Hello from '../components/Hello';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from '../navigation/Stack';

export default function App() {
  return (
    <NavigationContainer>
        <HomeStack /> 
    </NavigationContainer>
    
  ) ;
};


