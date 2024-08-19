import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Register() {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [email, setCorreo] = useState('');
  const [pass, setPassword] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleNextStep = () => {
    if (!nombre || !email || !pass) {
      Alert.alert('Error', 'Por favor, complete todos los campos');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Por favor, ingrese un correo electrónico válido');
      return;
    }
    if (pass.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }
    // Pasamos los datos a la pantalla SingUp
    navigation.navigate('SingUp', {
      nombre,
      email,
      pass,
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
            value={email}
            onChangeText={setCorreo}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#888" style={styles.iconInput} />
          <TextInput
            style={styles.input}
            placeholder="CONTRASEÑA"
            placeholderTextColor="#888"
            secureTextEntry
            value={pass}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleNextStep}
        >
          <Text style={styles.buttonText}>Continuar</Text>
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
