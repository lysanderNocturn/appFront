import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ServiciosCasa() {
  const navigation = useNavigation();
  const servicesList = ['WIFI', 'TV', 'COCINA', 'LAVADORA', 'COCHERA', 'AIRE ACONDICIONADO', 'ALBERCA', 'ASADOR', 'COMEDOR', 'CUARTO DE SERVICIO'];

  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(item => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona los <Text style={styles.link}>servicios</Text> que ofreces</Text>
      <View style={styles.grid}>
        {servicesList.map((service) => (
          <TouchableOpacity
            key={service}
            style={[
              styles.button,
              selectedServices.includes(service) && styles.buttonSelected,
            ]}
            onPress={() => toggleService(service)}
          >
            <Text style={styles.buttonText}>{service}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('SegundoA')}>
          <Text style={styles.navButtonText}>PUBLICAR</Text>
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
    backgroundColor: '#FCFAF6',
  },
  link: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#d98e50',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 120,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E89F56',
    borderRadius: 10,
    margin: 10,
  },
  buttonSelected: {
    backgroundColor: '#FA9575',
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 12,
    textAlign:'center'
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
    backgroundColor: '#d98e50',
    padding: 10,
    borderRadius: 10,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
});