import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BienvenidoMod from '../screens/screensModerador/BienvenidoMod';
import AnuncioMod from '../screens/screensModerador/AnuncioMod';
import DescripcionCasa from '../screens/screensModerador/DescripcionCasa';
import DetallesCasa from '../screens/screensModerador/DetallesCasa';
import ServiciosCasa from '../screens/screensModerador/ServiciosCasa';
import TituloCasa from '../screens/screensModerador/TituloCasa';
import EsperaAd from '../screens/screensModerador/EsperaAd';
import Paso2 from '../screens/screensModerador/AnuncioMod1';
import Paso3 from '../screens/screensModerador/AnuncioMod3';

import { Ionicons } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function MainTabs() {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      const icons = {
        Inicio: 'home',
        Anuncio: 'info',
        Descripcion: 'info',
        Detalles: 'info',
        Espera: 'info',
        Titulo: 'info',
        Servicios: 'info',
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
      <Tab.Screen name="Inicio" component={BienvenidoMod} />
      <Tab.Screen name="Anuncio" component={AnuncioMod} />
      <Tab.Screen name="Descripcion" component={DescripcionCasa}/>
      <Tab.Screen name="Servicios" component={ServiciosCasa}/>
      <Tab.Screen name="Titulo" component={TituloCasa}/>
      <Tab.Screen name="Espera" component={EsperaAd}/>
      <Tab.Screen name="SegundoA" component={Paso2} />
      <Tab.Screen name="FinalA" component={Paso3} />
      <Tab.Screen name="Detalles" component={DetallesCasa} />
    </Tab.Navigator>
  );
}

export default MainTabs;
