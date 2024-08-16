import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function DescripcionCasa() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Puede ser tu lista de opciones

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡DESCRIBE TU HOGAR!</Text>
      <Text style={styles.subtitle}>Selecciona la opción que más describa tu hogar</Text>
      
      <View style={styles.grid}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.circleButton,
              selectedOption === option && styles.selectedCircleButton,
            ]}
            onPress={() => handleSelect(option)}
          >
            <FontAwesome name="home" size={50} color={selectedOption === option ? 'white' : 'black'} />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Siguiente</Text>
          <AntDesign name="right" size={20} color="black" />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FCFAF6',
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  circleButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C3B8BB',
    margin: 15,
  },
  selectedCircleButton: {
    backgroundColor: '#FA9575',
    borderWidth: 2,
    borderColor: '#fff',
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
    marginHorizontal: 5,
  },
});