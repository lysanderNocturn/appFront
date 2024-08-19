import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const CasaDetail = ({ route }) => {
  const { id } = route.params;
  const [casa, setCasa] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de la API con datos ficticios
    const simulatedData = {
      id: id,
      image: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/405560694.jpg?k=4cc5e0fe2a678ddac3ea8e71f826aad8faadd07a71238cf933f2181386cae51f&o=', // URL de la imagen de la casa
      title: 'Casa Moderna en la Playa',
      location: 'Cancún, México',
      price: 2500,
      capacity: 8,
      vendor: {
        image: 'https://www.elsoldelalaguna.com.mx/local/torreon/o3af2f-juan-perez-ortega-jefe-de-la-jurisdiccion-sanitaria-6/ALTERNATES/LANDSCAPE_960/Juan%20P%C3%A9rez%20Ortega,%20Jefe%20de%20la%20Jurisdicci%C3%B3n%20Sanitaria%206', // URL de la imagen del vendedor
        name: 'Juan Pérez',
        location: 'Ciudad de México',
      },
      description: 'Hermosa casa moderna ubicada en la playa con acceso directo al mar. Incluye 4 habitaciones, cocina completa y una terraza con vista al océano.',
      amenities: ['Wi-Fi', 'Aire acondicionado', 'Piscina', 'Cocina completa', 'Terraza'],
      coordinates: {
        latitude: 21.1619,
        longitude: -86.8515,
      },
      rules: ['No se permiten mascotas', 'No se permiten fiestas', 'Respeto a los horarios de silencio'],
      rating: 4.5,
    };

    // Simula un retraso en la carga de datos
    setTimeout(() => {
      setCasa(simulatedData);
      setLoading(false);
    }, 1000); // 1 segundo de retraso para simular la carga
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (!casa) {
    return (
      <View style={styles.container}>
        <Text>No se encontró la casa.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: casa.image }} style={styles.image} />
      <Text style={styles.title}>{casa.title}</Text>
      <Text style={styles.location}>{casa.location}</Text>
      <Text style={styles.price}>${casa.price} MXN</Text>
      <Text style={styles.capacity}>Capacidad: {casa.capacity} personas</Text>
      
      <View style={styles.vendorContainer}>
        <Image source={{ uri: casa.vendor.image }} style={styles.vendorImage} />
        <View style={styles.vendorTextContainer}>
          <Text style={styles.vendorName}>{casa.vendor.name}</Text>
          <Text style={styles.vendorLocation}>{casa.vendor.location}</Text>
        </View>
      </View>

      <Text style={styles.description}>{casa.description}</Text>

      <Text style={styles.sectionTitle}>SE INCLUYE:</Text>
      <View style={styles.amenitiesContainer}>
        {casa.amenities.map((amenity, index) => (
          <Text key={index} style={styles.amenity}>{amenity}</Text>
        ))}
      </View>

      <Text style={styles.sectionTitle}>UBICACIÓN</Text>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: casa.coordinates.latitude,
            longitude: casa.coordinates.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={casa.coordinates}
            title={casa.title}
            description={casa.location}
          />
        </MapView>
      </View>

      <Text style={styles.sectionTitle}>REGLAS DE LA CASA</Text>
      <View style={styles.rulesContainer}>
        {casa.rules.map((rule, index) => (
          <Text key={index} style={styles.ruleItem}>{`• ${rule}`}</Text>
        ))}
      </View>

      <Text style={styles.sectionTitle}>RESEÑAS</Text>
      <Text style={styles.ratingText}>Calificación general</Text>
      <Text style={styles.rating}>{'★'.repeat(Math.floor(casa.rating))}</Text>
      <Text style={styles.ratingText}>{casa.rating.toFixed(1)} / 5.0</Text>

      <TouchableOpacity style={styles.reserveButton}>
        <Text style={styles.reserveButtonText}>RESERVAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  capacity: {
    fontSize: 16,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  vendorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  vendorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  vendorTextContainer: {
    justifyContent: 'center',
  },
  vendorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  vendorLocation: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 16,
    marginHorizontal: 15,
    marginBottom: 15,
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 15,
    marginBottom: 20,
  },
  amenity: {
    fontSize: 14,
    marginRight: 10,
    marginBottom: 10,
  },
  mapContainer: {
    height: 200,
    marginHorizontal: 15,
    marginBottom: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  rulesContainer: {
    marginHorizontal: 15,
    marginBottom: 20,
  },
  ruleItem: {
    fontSize: 14,
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 16,
    marginHorizontal: 15,
    marginBottom: 5,
  },
  rating: {
    fontSize: 18,
    color: '#f39c12',
    marginHorizontal: 15,
    marginBottom: 20,
  },
  reserveButton: {
    marginTop: 10,
    backgroundColor: '#CD567C',
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 10,
  },
  reserveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CasaDetail;
