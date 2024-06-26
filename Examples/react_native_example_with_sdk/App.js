import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={false} />
      <Stack.Navigator>
        <Stack.Screen
          name="CT WebView Tester"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
