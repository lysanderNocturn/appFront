
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminHomeScreen from '../screens/screensAdmin/AdminScreen';
import AdminSettingsScreen from '../screens/screensAdmin/AdminScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigatorAdmin() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AdminHome" component={AdminHomeScreen} />
      <Tab.Screen name="AdminSettings" component={AdminSettingsScreen} />
    </Tab.Navigator>
  );
}