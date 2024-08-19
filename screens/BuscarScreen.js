import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  { id: '1', title: 'Campo', subtitle: '#Campo #Diversion #AireLibre', image: 'https://i.pinimg.com/564x/19/9b/8c/199b8cd98e4ef6f48a82d35ac26527c7.jpg' },
  { id: '2', title: 'Mansiones', subtitle: '#Lujos #Aventuras', image: 'https://i.pinimg.com/564x/9a/f4/1b/9af41b53dbdbd33a2f1270d6367531dc.jpg' },
  { id: '3', title: 'Playa', subtitle: '#Sol #Mar #AireLibre', image: 'https://i.pinimg.com/236x/99/d4/33/99d433726b15aee004c6ff19a01098db.jpg' },
  { id: '4', title: 'Nuevos destinos', subtitle: '#PorVer #Descubre', image: 'https://i.pinimg.com/236x/fa/39/aa/fa39aaea7b86ff40ba6eb20b0bddb061.jpg' },
  { id: '5', title: 'Favoritos', subtitle: '#MasBuscados #Populares', image: 'https://i.pinimg.com/236x/98/ff/19/98ff1951bb6f03b5b4a5e8ad7a194c28.jpg' },
  // Agrega más elementos según sea necesario
];



export default function App() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}
    onPress={()=> navigation.navigate('Details',{item})}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );

  const filteredData = data.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
      <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  searchContainer: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    borderWidth:1,
    borderColor:"#000"
  },
  searchInput: {
    flex: 1,
    paddingLeft: 15,
    marginBottom: 1,
  },
  item: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f2efed',
    marginBottom: 10,
    borderRadius: 20,
    borderWidth:1,
    borderColor: "#ccc"

  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
  },
});
