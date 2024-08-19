import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Alert, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { G, Path, Defs, LinearGradient as SvgLinearGradient, Stop, ClipPath } from "react-native-svg";
import Button from '../components/Button.js';

const { width } = Dimensions.get('window');

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      // Simulación del acceso
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula un retraso de 2 segundos

      const simulatedResponse = {
        ok: true, // Cambia esto a false para simular un error
        name: 'usuario'
      };

      if (!simulatedResponse.ok) {
        throw new Error('Credenciales incorrectas');
      }

      Alert.alert('Welcome', `Bienvenido/a ${simulatedResponse.name}`);
      navigation.navigate('carruselHome'); // Cambia 'carruselHome' si tu pantalla tiene otro nombre
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', error.message || 'Hubo un problema con la conexión. Inténtalo de nuevo más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#F9A761" />
      </SafeAreaView>
    );
  }

  function SvgComponent(props) {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={395}
        height={268}
        fill="none"
        {...props}
      >
        <G clipPath="url(#a)">
          <Path
            fill="url(#b)"
            d="M484 73c0 107.696-128.718 195-287.5 195S-91 180.696-91 73 37.718-122 196.5-122 484-34.696 484 73Z"
          />
        </G>
        <Defs>
          <SvgLinearGradient
            id="b"
            x1={196.5}
            x2={196.5}
            y1={-122}
            y2={268}
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset={0.5} stopColor="#F09ED5" />
            <Stop offset={1} stopColor="#E89F56" />
            <Stop offset={1} stopColor="#CD567C" stopOpacity={0.9} />
          </SvgLinearGradient>
          <ClipPath id="a">
            <Path fill="#fff" d="M0 0h393v268H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgComponent />
      </View>
      <View style={styles.container}>
        <Image
          source={require('../assets/adaptive-icon.png')}
          style={styles.logo}
        />
        <Text style={styles.titulo}>BIENVENIDO</Text>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#888" style={styles.iconInput} />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#888" style={styles.iconInput} />
          <TextInput
            style={styles.textInput}
            placeholder="Contraseña"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Button title="Login" onPress={handleLogin} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  containerSVG: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 45,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subTitulo: {
    fontSize: 15,
    color: 'gray',
    paddingTop: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '80%',
    height: 50,
  },
  iconInput: {
    padding: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 0,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 30,
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#F9A761',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
