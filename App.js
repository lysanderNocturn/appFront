import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SingUpScreen from './screens/SingUpScreen';
import MainTabs from './navigation/TabNavigator';
import InicioScreen from './screens/InicioScreen';
import InicioCarrucel from './screens/carrucelHome';
import CasasScreen from './screens/CasasScreen.js';
import AdminTabs from './navigation/TabNavigatorAdmin';
import TabModerador from './navigation/TabNavigatorModerador';
import BienvenidaMod from './screens/screensModerador/BienvenidoMod.js';
import AnuncioMod from './screens/screensModerador/AnuncioMod.js';
import DescripcionCasa from './screens/screensModerador/DescripcionCasa.js';
import DetallesCasa from './screens/screensModerador/DetallesCasa.js';
import ServiciosCasa from './screens/screensModerador/ServiciosCasa';
import TituloCasa from './screens/screensModerador/TituloCasa';
import EsperaAd from './screens/screensModerador/EsperaAd';
import Paso2 from './screens/screensModerador/AnuncioMod1';
import Paso3 from './screens/screensModerador/AnuncioMod3';
import Detailes from './screens/DetailsScreen.js';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SingUp" component={SingUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Inicio" component={InicioScreen} options={{ headerShown: false }} />
        <Stack.Screen name="InicioCarrucel" component={InicioCarrucel} options={{ headerShown: false }} />
        <Stack.Screen name="Casas" component={CasasScreen} />
        <Stack.Screen name="AdminTabs" component={AdminTabs} options={{ headerShown: false }} />
        <Stack.Screen name="TabModerador" component={TabModerador} options={{ headerShown: false }} />
        <Stack.Screen name="BienvenidaMod" component={BienvenidaMod} options={{ headerShown: false }} />
        <Stack.Screen name="Anuncio" component={AnuncioMod} options={{ headerShown: false }} />
        <Stack.Screen name='Descripcion' component={DescripcionCasa} options={{headerShown: false}}/>
        <Stack.Screen name="Servicios" component={ServiciosCasa} options={{headerShown: false}}/>
        <Stack.Screen name="Titulo" component={TituloCasa} options={{headerShown: false}} />
        <Stack.Screen name="Espera" component={EsperaAd} options={{headerShown: false}}/>
        <Stack.Screen name="SegundoA" component={Paso2} options={{headerShown: false}}/>
        <Stack.Screen name="FinalA" component={Paso3}options={{headerShown: false}} />
        <Stack.Screen name="Detalles" component={DetallesCasa} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={Detailes} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
