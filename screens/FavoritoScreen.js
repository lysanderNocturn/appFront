// Inicio.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', title: 'Casa en la playa', source: { uri: 'https://i.pinimg.com/236x/9d/a6/d1/9da6d1bbcffc62386312f24e0111a2c6.jpg' } },
  { id: '5', title: 'Loft en el centro', source: { uri: 'https://i.pinimg.com/236x/a5/c2/91/a5c291b8dd219ba272916398d70e83e1.jpg' } },
  { id: '7', title: 'Mansión y playa', source: { uri: 'https://i.pinimg.com/236x/ef/91/53/ef9153d0a88d501ab8011cbda0308751.jpg' } },
  { id: '8', title: 'Exotico', source: { uri: 'https://i.pinimg.com/236x/4b/d7/9d/4bd79db0264963ad5d4aad94ee6ee66c.jpg' } },
];

const Favorito = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Casas',{item})}>
      <Image style={styles.image} source={item.source} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mis favoritos</Text>
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
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
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
    backgroundColor: '#f2efed',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: 20
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

export default Favorito;
