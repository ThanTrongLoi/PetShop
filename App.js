import React from 'react';
import { Button } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/splashscreen'
import LoginScreens from './src/screens/LoginScreen';
import MainScreen from './src';



const Stack = createStackNavigator();
console.disableYellowBox = true
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'SplashScreen'} headerMode='none'>
        <Stack.Screen name='SplashScreen'
          component={SplashScreen}
        // options = {{
        //   headerShown: false
        // }}
        />
        <Stack.Screen name='LoginScreens'
          component={LoginScreens}
        // options = {{
        //   headerShown: false
        // }}
        />
        <Stack.Screen name='MainScreen'
          component={MainScreen}
        // options = {{
        //   title: 'main',
        //   headerTintColor: '#fff',
        //   headerStyle: {
        //     backgroundColor: '#4db6ac'
        //   }
        // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}