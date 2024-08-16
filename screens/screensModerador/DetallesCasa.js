import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';

export default function DetallesCasa() {
  const [rooms, setRooms] = useState(6);
  const [beds, setBeds] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [guests, setGuests] = useState(4);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DETALLES DEL ALOJAMIENTO</Text>
      
      <View style={styles.row}>
        <Text style={styles.label}>Habitaciones</Text>
        <Picker
          selectedValue={rooms}
          style={styles.picker}
          onValueChange={(itemValue) => setRooms(itemValue)}
        >
          {[...Array(10)].map((_, i) => (
            <Picker.Item key={i} label={String(i + 1)} value={i + 1} />
          ))}
        </Picker>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Camas</Text>
        <Picker
          selectedValue={beds}
          style={styles.picker}
          onValueChange={(itemValue) => setBeds(itemValue)}
        >
          {[...Array(10)].map((_, i) => (
            <Picker.Item key={i} label={String(i + 1)} value={i + 1} />
          ))}
        </Picker>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Baños</Text>
        <Picker
          selectedValue={bathrooms}
          style={styles.picker}
          onValueChange={(itemValue) => setBathrooms(itemValue)}
        >
          {[...Array(5)].map((_, i) => (
            <Picker.Item key={i} label={String(i + 1)} value={i + 1} />
          ))}
        </Picker>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Huéspedes</Text>
        <Picker
          selectedValue={guests}
          style={styles.picker}
          onValueChange={(itemValue) => setGuests(itemValue)}
        >
          {[...Array(20)].map((_, i) => (
            <Picker.Item key={i} label={String(i + 1)} value={i + 1} />
          ))}
        </Picker>
      </View>

      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Siguiente</Text>
          <AntDesign name="right" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000', // Naranja suave
    marginBottom: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#000', // Naranja pálido
  },
  picker: {
    height: 50,
    width: 100,
    color: '#000',
    backgroundColor: '#CEC5D1',
    borderColor:'#F5DDD9', 
    borderWidth: 8,
    borderRadius: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    marginTop: 90,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CD567C',
    padding: 10,
    borderRadius: 10,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 5,
  },
});
