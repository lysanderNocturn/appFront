import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioScreen from '../screens/InicioScreen';
import NotiScreen from '../screens/NotiScreen';
import BuscarScreen from '../screens/BuscarScreen';
import FavoritoScreen from '../screens/FavoritoScreen';
import PerfilScreen from '../screens/PerfilScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function MainTabs() {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      const icons = {
        Inicio: 'home',
        Mensajes: 'envelope', 
        Buscar: 'search',
        Favorito: 'heart',
        Perfil: 'user',
      };
      return <Icon name={icons[route.name]} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#ff8306',
    tabBarInactiveTintColor: '#8e8e93',
    tabBarStyle: {
      backgroundColor: '#ffffff',
      position: 'absolute',
      bottom: 15,
      left: 10,
      right: 10,
      borderRadius: 20,
      height: 60,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
      paddingBottom: 5,
      paddingTop: 5,
    },
    tabBarIconStyle: {
      size: 24,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    headerShown: false,
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Inicio" component={InicioScreen} />
      <Tab.Screen name="Buscar" component={BuscarScreen} />
      <Tab.Screen name="Mensajes" component={NotiScreen} />
      <Tab.Screen name="Favorito" component={FavoritoScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

export default MainTabs;
