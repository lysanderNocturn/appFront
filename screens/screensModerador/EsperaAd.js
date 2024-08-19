import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function ScreenEspera() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>¡Estás a un solo paso!</Text>
        <Text style={styles.subtitle}>Espera a que el administrador acepte tu anuncio</Text>
        <View style={styles.iconContainer}>
          <Image
            source={{ uri: "https://i.pinimg.com/236x/2b/ff/f6/2bfff6bb824a96afb6764b15c8f34004.jpg" }}  
            style={styles.icon}
          />
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 100,
  },
  iconContainer: {
    width: 220,
    height: 220,
    borderRadius: 220,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderColor:'#000',
    borderWidth:1,
    alignItems: 'center',
    marginBottom:190
  },
  icon: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
});
