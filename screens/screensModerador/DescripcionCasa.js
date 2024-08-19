import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function DescripcionCasa() {
  const navigation = useNavigation();
  const [selectedImageId, setSelectedImageId] = useState(null);

  const options = [
    { id: 1, image: require('../../assets/imgs/casa (1).jpg') },
    { id: 2, image: require('../../assets/imgs/casa (3).jpg') },
    { id: 3, image: require('../../assets/imgs/casa (4).jpg') },
    { id: 4, image: require('../../assets/imgs/casa (5).jpg') },
    { id: 5, image: require('../../assets/imgs/casa (6).jpg') },
    { id: 6, image: require('../../assets/imgs/casa (7).jpg') },
    { id: 7, image: require('../../assets/imgs/casa (8).jpg') },
    { id: 8, image: require('../../assets/imgs/casa (8).jpeg') },
    { id: 9, image: require('../../assets/imgs/casa (9).jpeg') },
  ];

  const handleSelect = (id) => {
    setSelectedImageId(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡DESCRIBE TU <Text style={styles.link}>HOGAR!</Text></Text>
      <Text style={styles.subtitle}>Selecciona la opción que más describa tu hogar</Text>
      
      <View style={styles.grid}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.imageContainer,
              selectedImageId === option.id && styles.selectedImageContainer,
            ]}
            onPress={() => handleSelect(option.id)}
            accessibilityLabel={`Option ${option.id}`}
          >
            <Image source={option.image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Detalles')}>
        <Text style={styles.navButtonText}>Siguiente</Text>
        <AntDesign name="right" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 25,
    textAlign: 'center',
  },
  
  link: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#d98e50',
  },
  grid: {
    marginTop: 30,
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 40,
  },
  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    margin: 10,
    padding: 10,
  },
  selectedImageContainer: {
    backgroundColor: '#daa98b',
    borderColor: '#fff',
    borderWidth: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  navButton: {
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
    marginTop: 100
  },
  navButtonText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
