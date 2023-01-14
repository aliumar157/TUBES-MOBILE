import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Pesanan from './Pesanan';
import Lainnya from './Lainnya';
import StackNavigasi from './StackNavigasi';

const Tab = createBottomTabNavigator();

export const TabNavigasi = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Beranda') {
            iconName = focused
            ? 'fast-food'
            : 'fast-food-outline';
          }
          else if (route.name === 'Pesanan') {
            iconName = focused
            ? 'reader'
            : 'reader-outline';
          }
          else if (route.name === 'Lainnya') {
            iconName = focused
            ? 'list'
            : 'list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Beranda" component={StackNavigasi} />
      <Tab.Screen name="Pesanan" component={Pesanan} />
      <Tab.Screen name="Lainnya" component={Lainnya} />
    </Tab.Navigator>
  )
}
export default TabNavigasi
