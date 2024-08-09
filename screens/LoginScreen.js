import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://tu-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert({username}, 'Bienvenido/a');
        navigation.navigate('InicioCarrucel');
      } else {
        Alert.alert('Error', data.message || 'Credenciales incorrectas');
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema con la conexión. Inténtalo de nuevo más tarde.');
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <LinearGradient
          colors={['rgba(187,75,105,0.8)', 'rgba(249,167,97,0.9)']}
          style={styles.background}
        />
      </View>
      <View style={styles.header}>
        <Image
          source={require('../assets/adaptive-icon.png')}
          style={styles.icon}
        />
        <Text style={styles.registerText}>Registrarse</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#888" style={styles.iconInput} />
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#888" style={styles.iconInput} />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 600,
  },
  loadingText: {
    marginTop: 5,
    fontSize: 15,
    color: '#F9A761',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  registerText: {
    fontSize: 16,
    color: '#000',
  },
  content: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  iconInput: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 15,
    paddingLeft: 0,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#F9A761',
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
