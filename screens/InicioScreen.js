// Inicio.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const data = [
  { id: '1', title: 'Casa en la playa', source: { uri: 'https://via.placeholder.com/100' } },
  { id: '2', title: 'Apartamento moderno', source: { uri: 'https://via.placeholder.com/100' } },
  { id: '3', title: 'Cabaña en la montaña', source: { uri: 'https://via.placeholder.com/100' } },
  { id: '4', title: 'Casa de campo', source: { uri: 'https://via.placeholder.com/100' } },
  { id: '5', title: 'Loft en el centro', source: { uri: 'https://via.placeholder.com/100' } },
  { id: '6', title: 'Casa familiar', source: { uri: 'https://via.placeholder.com/100' } },
  { id: '7', title: 'Apartamento con vista', source: { uri: 'https://via.placeholder.com/100' } },
  { id: '8', title: 'Estudio acogedor', source: { uri: 'https://via.placeholder.com/100' } },
  { id: '9', title: 'Casa de lujo', source: { uri: 'https://via.placeholder.com/100' } },
  { id: '10', title: 'Villa con piscina', source: { uri: 'https://via.placeholder.com/100' } },
];

const Inicio = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image style={styles.image} source={item.source} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>MÁS BUSCADOS</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});

export default Inicio;
