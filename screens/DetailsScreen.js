import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const data = [
  { id: '1', title: 'Casa en la playa', source: { uri: 'https://i.pinimg.com/236x/9d/a6/d1/9da6d1bbcffc62386312f24e0111a2c6.jpg' } },
  { id: '2', title: 'Playa divertida', source: { uri: 'https://i.pinimg.com/236x/8e/99/e3/8e99e3866d66776819f2fe87b865a17a.jpg' } },
  { id: '3', title: 'Nueva experiencia', source: { uri: 'https://i.pinimg.com/236x/6e/ec/f1/6eecf12bcde6cfa2a638e0b6050e9ad5.jpg' } },
  { id: '4', title: 'Vista espectacular', source: { uri: 'https://i.pinimg.com/236x/b6/b1/25/b6b1257f315b5a6559ed7aeab7300e09.jpg' } },
  { id: '5', title: 'Loft en el centro', source: { uri: 'https://i.pinimg.com/236x/a5/c2/91/a5c291b8dd219ba272916398d70e83e1.jpg' } },
  { id: '6', title: 'Casa familiar', source: { uri: 'https://i.pinimg.com/236x/85/fc/5d/85fc5d6ab633663ecb3084d8d331a864.jpg' } },
  { id: '7', title: 'Mansión y playa', source: { uri: 'https://i.pinimg.com/236x/ef/91/53/ef9153d0a88d501ab8011cbda0308751.jpg' } },
  { id: '8', title: 'Exotico', source: { uri: 'https://i.pinimg.com/236x/4b/d7/9d/4bd79db0264963ad5d4aad94ee6ee66c.jpg' } },
];

export default Details = () => {
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
        <Text style={styles.header}>¡NUEVOS LUGARES!</Text>
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
      paddingTop: 5,
      paddingBottom: 5
    },
    header: {
      marginTop: 15,
      padding: 20,
      fontSize: 24,
      textAlign: 'center',
      fontWeight: '700',
      marginBottom: 10,
      color: '#312f30',
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
      width: 90,
      height: 90,
      borderRadius: 10,
      marginBottom: 8,
    },
    title: {
      fontSize: 14,
      color: '#2C3E50',
      textAlign: 'center',
    },
  });
  