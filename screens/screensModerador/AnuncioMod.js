import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

export default function AnuncioMod() {
  const [pressed, setPressed] = useState(false);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡BIENVENIDO!</Text>
      <Text style={styles.subtitle}>Es el momento de crear tu <Text style={styles.link}>anuncio</Text></Text>
      
      <TouchableOpacity 
        style={[styles.stepContainer, pressed && styles.buttonPressed]}
        onPressIn={() => setPressed(true)} 
        onPressOut={() => {
          setPressed(false);
          
        }}
      >
        <Text style={styles.stepText}>Paso 1: Describe tu espacio</Text>
        <Text style={styles.stepDescription}>Ingresa datos básicos para comenzar.</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.stepContainer, pressed && styles.buttonPressed]}
        onPressIn={() => setPressed(true)} 
        onPressOut={() => {
          setPressed(false);
          
        }}>
        <Text style={styles.stepText}>Paso 2: Dale un toque especial</Text>
        <Text style={styles.stepDescription}>Diseña y decora tu anuncio a tu manera</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.stepContainer, pressed && styles.buttonPressed]}
        onPressIn={() => setPressed(true)} 
        onPressOut={() => {
          setPressed(false);
          
        }}>
        <Text style={styles.stepText}>Paso 3: Finalizar</Text>
        <Text style={styles.stepDescription}>Asigna un precio a tu casa y comienza la aventura</Text>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  link: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E89F56',
  },
  stepContainer: {
    width: '100%',
    padding: 40,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E89F56',
  },
  stepText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stepDescription: {
    fontSize: 14,
    color: '#666',
  },
  buttonPressed: {
    borderWidth: 3,
    borderRadius: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  option: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  optionText: {
    fontSize: 24,
  },
  navButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});