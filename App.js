import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigasi from './src/TabNavigasi';
import StackNavigasi from './src/StackNavigasi';


export default function App() {
  return (
    <NavigationContainer>
      <TabNavigasi/>
    </NavigationContainer>
  );
}


