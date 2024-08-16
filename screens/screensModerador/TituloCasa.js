import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, TextInput as PaperInput } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export default function TituloCasa() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>DALE <Text style={styles.link}>VIDA</Text> A TU ALOJAMIENTO</Text>
        <Text style={styles.subtitle}>Añade un título agradable a tu anuncio</Text>
        <PaperInput
          mode="outlined"
          label="Título"
          style={styles.input}
        />
        <Text style={styles.subtitle}>
          Dale un toque a tu anuncio, explica que hace tu casa tan especial
        </Text>
        <PaperInput
          mode="outlined"
          label="Descripción"
          multiline
          numberOfLines={4}
          style={styles.textarea}
        />
        <View style={styles.navigation}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Publicar</Text>
          <AntDesign name="right" size={20} color="black" />
        </TouchableOpacity>
      </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    paddingHorizontal: 35,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  link: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E89F56',
  },
  input: {
    marginBottom: 30,
    borderColor:'#F5DDD9',
    backgroundColor:'#fff'
  },
  textarea: {
    height: 100,
    borderColor:'#F5DDD9',
    backgroundColor:'#fff'
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    marginTop: 60,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: 60,
    borderRadius: 10,
    borderColor:'#E89F56',
    borderWidth:3
  },
  navButtonText: {
    color: '#000',
    fontSize: 20,
    marginHorizontal: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});
