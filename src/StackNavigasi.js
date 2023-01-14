import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Beranda from './Beranda';
import Menu from './Menu/Menu';

const Stack = createNativeStackNavigator();

export const StackNavigasi = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false,}}>
          <Stack.Screen name="Beranda1"  component={Beranda}/>
          <Stack.Screen name="Menu"  component={Menu}/>
      </Stack.Navigator>
  )
}

export default StackNavigasi