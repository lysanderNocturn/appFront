// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SingUpScreen from './screens/SingUpScreen';
import MainTabs from './navigation/TabNavigator';
import InicioScreen from './screens/InicioScreen';
import AdminTabs from './navigation/TabNavigatorAdmin';
import moderatorTabs from './navigation/TabNabigatorModerador';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SingUp" component={SingUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="AdminTabs" component={AdminTabs} options={{ headerShown: false }} />
        <Stack.Screen name="moderatorTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Inicio" component={InicioScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
