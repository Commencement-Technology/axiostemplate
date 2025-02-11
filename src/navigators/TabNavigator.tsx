import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
}
