import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AnuncioMod() {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>¡DESCRIBE TU ESPACIO!</Text>
      <Text style={styles.subtitle}>Ingresa datos básicos para comenzar.</Text>
      <View>
        <Image 
          source={{ uri: "https://i.pinimg.com/736x/7b/14/92/7b1492bef9f55c8e90098492fc838dfd.jpg" }}  
          style={styles.image}
          resizeMode="cover" // Cambiar a "cover" o "contain" para mejor ajuste
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Descripcion')} style={styles.button}>
        <Text style={styles.buttonText}>CONTINUAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 70,
    textAlign: 'center',
  },
  image: {
    width: 300, // Cambiar a valores fijos o proporcionales si es necesario
    height: 200, 
    borderRadius: 10, 
    marginBottom: 20, // Añadir margen si es necesario
  },
  button: {
    backgroundColor: "#d98e50",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
