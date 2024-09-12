import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { OnboardFlow } from 'react-native-onboard'; // Assuming you have this installed
import { HomeStack } from '../navigation/Stack';

export default function App() {
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  const handleOnboardingComplete = () => {
    // Set onboardingComplete to true once onboarding is finished
    setOnboardingComplete(true);
  };

  return (
    <NavigationContainer independent={true}>
      {onboardingComplete ? (
        <HomeStack /> 
      ) : (
        <OnboardFlow 
          pages={[
            {
              title: 'Welcome to our new ecommerce App',
              subtitle: 'This is page 1',
             
            },
            {
              title: 'Page 2 ',
              subtitle: 'This is page 2'
              
            },
          ]}
          type={'fullscreen'}
          onDone={handleOnboardingComplete} // Trigger this when onboarding is finished
        />
      )}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  textsize: {
      fontSize: 20,
     

  }

})