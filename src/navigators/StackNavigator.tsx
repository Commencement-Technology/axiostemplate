import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
import WebViewScreen from '../screens/WebViewScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Drawer" screenOptions={{}}>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen
        name="WebViewScreen"
        component={WebViewScreen}
        options={{
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
}
