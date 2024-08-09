import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Register() {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleNextStep = () => {
    if (!nombre || !correo || !username || !password) {
      Alert.alert('Error', 'Por favor, complete todos los campos');
      return;
    }
    // Pasamos los datos a la pantalla SingUp
    navigation.navigate('SingUp', {
      nombre,
      correo,
      username,
      password,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>REGISTRO</Text>

        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#888" style={styles.iconInput} />
          <TextInput
            style={styles.input}
            placeholder="NOMBRE"
            placeholderTextColor="#888"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#888" style={styles.iconInput} />
          <TextInput
            style={styles.input}
            placeholder="CORREO"
            placeholderTextColor="#888"
            value={correo}
            onChangeText={setCorreo}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#888" style={styles.iconInput} />
          <TextInput
            style={styles.input}
            placeholder="NOMBRE DE USUARIO"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#888" style={styles.iconInput} />
          <TextInput
            style={styles.input}
            placeholder="CONTRASEÑA"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleNextStep}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  iconInput: {
    padding: 15,
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
