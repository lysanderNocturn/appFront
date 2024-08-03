import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ModeradorHomeScreen from '../screens/screensModerador/ModeradorScreen';
import ModeradorSettingsScreen from '../screens/screensModerador/ModeradorScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigatorModerador() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ModeradorHome" component={ModeradorHomeScreen} />
      <Tab.Screen name="ModeradorSettings" component={ModeradorSettingsScreen} />
    </Tab.Navigator>
  );
}