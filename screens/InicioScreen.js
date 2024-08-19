import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  { id: '1', title: 'Casa en la playa', source: { uri: 'https://i.pinimg.com/236x/9d/a6/d1/9da6d1bbcffc62386312f24e0111a2c6.jpg' } },
  { id: '2', title: 'Apartamento moderno', source: { uri: 'https://i.pinimg.com/236x/5d/92/97/5d929797b86afcacbc12152c9330cb82.jpg' } },
  { id: '3', title: 'Cabaña en la montaña', source: { uri: 'https://i.pinimg.com/236x/4b/5e/bf/4b5ebf3e1b209ee084cefbc41270d044.jpg' } },
  { id: '4', title: 'Casa de campo', source: { uri: 'https://i.pinimg.com/236x/b9/34/72/b934726708b6a8a9786d3c06c8202507.jpg' } },
  { id: '5', title: 'Loft en el centro', source: { uri: 'https://i.pinimg.com/236x/24/d0/98/24d098c2533c0a9635930e8e43cd7ad4.jpg' } },
  { id: '6', title: 'Casa familiar', source: { uri: 'https://i.pinimg.com/236x/0c/2d/fb/0c2dfbd0bfdb333d1c6dafe7915f061d.jpg' } },
  { id: '7', title: 'Apartamento con vista', source: { uri: 'https://i.pinimg.com/236x/71/fe/25/71fe25cd5ab236cc2fdeffaab294b4e7.jpg' } },
  { id: '8', title: 'Estudio acogedor', source: { uri: 'https://i.pinimg.com/474x/4f/c1/1b/4fc11b878317a0503bfdf68e52c3923d.jpg' } },
  { id: '9', title: 'Casa de lujo', source: { uri: 'https://i.pinimg.com/236x/73/0e/9a/730e9a0e14600eb7082bf3c3a397bbe2.jpg' } },
  { id: '10', title: 'Villa con piscina', source: { uri: 'https://i.pinimg.com/236x/83/cc/7c/83cc7ce3e51b5368af5ed939a4701807.jpg' } },
];

const Inicio = () => {
  const navigation = useNavigation();


  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => navigation.navigate('Casas',{item})}
    >
      <Image style={styles.image} source={item.source} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>¡MÁS BUSCADOS!          <Icon name="bell-o" size={24} color="#000" style={styles.searchIcon} onPress={() => navigation.navigate('BienvenidaMod')} /></Text> 
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
    paddingBottom: 70,
  },
  header: {
    marginTop: 10,
    padding:18,
    fontSize: 24,
    textAlign:'left',
    fontWeight: '700',
    textAlign: 'center'
  },
  searchIcon: {
    marginRight: 30,
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
    textAlign: '',
  },
});

export default Inicio;
