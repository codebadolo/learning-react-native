import { StyleSheet, Text,  SafeAreaView , View , ScrollView  } from 'react-native';

import Hello from '../components/Hello';
import Home from '../screens/Home';
import { HomeStack } from  '../navigation/Stack';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer independent={true}>
        <HomeStack /> 
    </NavigationContainer>
    
  ) ;
};


