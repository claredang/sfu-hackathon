import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OpeningScreen from './assets/components/OpeningScreen';
import RollScreen from './assets/components/RollScreen';
import VictoryScreen from './assets/components/VictoryScreen';
import DefeatScreen from './assets/components/DefeatScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Opening Screen" 
                        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Opening Screen" component={OpeningScreen} />
        <Stack.Screen name="Roll Screen" component={RollScreen} />
        <Stack.Screen name="Victory Screen" component={VictoryScreen} />
        <Stack.Screen name="Defeat Screen" component={DefeatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appleButton: {
      height: 48,
      marginBottom: 16,
      width: 'auto'
  },
  facebookButton: {
      height: 48,
      width: 'auto',
      borderRadius: 24,
      borderWidth: 0,
      padding: 0,
      margin: 0,
      overflow: 'hidden',
      marginBottom: 16,
  },
  facebookButtonIcon: {
      padding: 0,
      marginLeft: 0,
      width: 20,
      height: 20
  },
  facebookButtonText: {
      fontSize: 18,
      marginLeft: 5,
      marginRight: 5
  },
  signUpButton: {
      width: '100%',
  },
  linkText: {
      textDecorationLine: 'underline',
  },
  checkboxContainer: {
      marginLeft: -6,
  },
});


export default App;
