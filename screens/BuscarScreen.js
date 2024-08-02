// Buscar.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Puedes elegir otro set de íconos si lo prefieres
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
  { id: '1', name: 'Casa en la Playa', description: 'Hermosa casa frente al mar', tags: ['playa', 'vacaciones', 'familia', 'lujo', 'cerca del mar'] },
  { id: '2', name: 'Apartamento en la Ciudad', description: 'Moderno apartamento en el centro', tags: ['ciudad', 'moderno', 'conveniente', 'lugar turístico', 'cerca de transporte'] },
  { id: '3', name: 'Cabaña en la Montaña', description: 'Cabaña acogedora en las montañas', tags: ['montaña', 'aventura', 'tranquilidad', 'rural', 'aire libre'] },
  // Añade más elementos según sea necesario
];

const iconMap = {
  playa: 'beach-access',
  vacaciones: 'beach-access',
  familia: 'family-restroom',
  lujo: 'star',
  cerca_del_mar: 'beach-access',
  ciudad: 'business-center',
  moderno: 'apartment',
  conveniente: 'accessibility',
  lugar_turistico: 'place',
  cerca_de_transporte: 'train',
  montaña: 'terrain',
  aventura: 'drive',
  tranquilidad: 'spa',
  rural: 'grass',
  aire_libre: 'outdoor-grill',
};

const Buscar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.tagsContainer}>
          {item.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Icon name={iconMap[tag] || 'label'} size={20} color="#555" />
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buscar Tags</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
  },
  list: {
    alignItems: 'center',
  },
  itemContainer: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginVertical: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    margin: 2,
  },
  tagText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 4,
  },
});

export default Buscar;
