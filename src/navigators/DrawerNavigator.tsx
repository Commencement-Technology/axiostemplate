import React from 'react';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import {wp} from '../utils/responsive';
import BottomNavigator from './BottomNavigator';
const Drawer = createDrawerNavigator();

// Define your DrawerContent outside of the DetailScreen component
const MyDrawerContent = (props: any) => <DrawerContent {...props} />;

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({}) => ({
        drawerType: 'front',
        drawerStyle: {width: wp(310)},
        headerBackTitle: '', // Hides the back title
      })}
      drawerContent={MyDrawerContent}>
      <Drawer.Screen name="Home" component={BottomNavigator} />
    </Drawer.Navigator>
  );
}
