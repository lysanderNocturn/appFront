import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Alert, Dimensions, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { G, Path, Defs, LinearGradient as SvgLinearGradient, Stop, ClipPath } from "react-native-svg";
import { LinearGradient } from 'expo-linear-gradient';
import FlashMessage, { showMessage } from 'react-native-flash-message';


const { width } = Dimensions.get('window');

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

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !pass) {
      Alert.alert('Error', 'Por favor, ingresa tu email y contraseña.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://api-7ix3.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pass }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Éxito', 'Has iniciado sesión correctamente');
        navigation.navigate('InicioCarrucel');
      } else {
        Alert.alert('Error', data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al conectar con el servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="lock" size={20} color="#888" style={styles.iconInput} />
              <TextInput
                style={styles.textInput}
                placeholder="Contraseña"
                placeholderTextColor="#888"
                secureTextEntry
                value={pass}
                onChangeText={setPass}
              />
            </View>

            {loading ? (
              <ActivityIndicator size="large" color="#F9A761" />
            ) : (
              <TouchableOpacity style={styles.button} onPress={handleLogin}>

                  <Text style={styles.text}>Iniciar Sesión</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.subTitulo}>¿No tienes una cuenta? Regístrate</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
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
    marginBottom: 20
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
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
},
button: {
  marginTop:30,
    width: '50%',
    height: 50,
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#CD567C"
},
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
});
