import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from '../components/StyleCasa';

const Casas = ({ route }) => {
  const { id } = route.params;
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(4.5); // Calificación general de ejemplo

  useEffect(() => {
    // Simulación de llamada a API
    // Reemplaza 'API_URL' con la URL de tu API y 'id' con el ID de la casa
    // fetch(`API_URL/casas/${id}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setHouse(data);
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching house data:', error);
    //     setLoading(false);
    //   });

    // Datos simulados para mostrar cómo se verá la información
    const simulatedData = {
      image: 'https://example.com/house.jpg',
      title: 'Mansión de Lujo',
      location: 'Calvillo, Aguascalientes, México',
      price: '50,000',
      capacity: 6,
      rooms: 5,
      vendor: {
        image: 'https://example.com/vendor.jpg',
        name: 'Juan Pérez',
        location: 'Aguascalientes',
      },
      description: 'Una mansión de lujo con todas las comodidades para disfrutar de unas vacaciones inolvidables.',
      includes: ['WIFI', 'COCINA', 'ALBERCA', 'JACUZZI'],
      coordinates: {
        latitude: 21.8426,  
        longitude: -102.7209,  
      },
      rules: [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ],
    };

    const simulatedReviews = [
      { id: 1, text: 'Excelente servicio' },
      { id: 2, text: 'Todo estuvo perfecto' },
      { id: 3, text: 'Muy cómodo y limpio' },
    ];

    setHouse(simulatedData);
    setReviews(simulatedReviews);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (!house) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No se pudo cargar la información de la casa.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: house.image }} style={styles.houseImage} />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.houseTitle}>{house.title}</Text>
        <Text style={styles.location}>{house.location}</Text>
        <Text style={styles.price}>${house.price} MXN</Text>
        <Text style={styles.capacity}>Capacidad para {house.capacity} personas, con {house.rooms} habitaciones</Text>

        <View style={styles.vendorInfo}>
          <Image source={{ uri: house.vendor.image }} style={styles.vendorImage} />
          <View style={styles.vendorText}>
            <Text style={styles.vendorName}>{house.vendor.name}</Text>
            <Text style={styles.vendorLocation}>{house.vendor.location}</Text>
          </View>
        </View>

        <Text style={styles.description}>{house.description}</Text>

        <Text style={styles.moreLink}>Ver más</Text>

        <Text style={styles.includesTitle}>SE INCLUYE:</Text>
        <View style={styles.includesContainer}>
          {house.includes.map((item, index) => (
            <Text key={index} style={styles.include}>{item}</Text>
          ))}
        </View>
      </View>

      <View style={styles.mapContainer}>
        <Text style={styles.includesTitle}>UBICACIÓN</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: house.coordinates.latitude,
            longitude: house.coordinates.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={house.coordinates}
            title={house.title}
            description={house.location}
          />
        </MapView>
      </View>

      <View style={styles.rulesContainer}>
        <Text style={styles.sectionTitle}>REGLAS DE LA CASA</Text>
        {house.rules.map((rule, index) => (
          <Text key={index} style={styles.ruleItem}>• {rule}</Text>
        ))}
      </View>

      <View style={styles.reviewsContainer}>
        <Text style={styles.sectionTitle}>RESEÑAS</Text>
        <Text style={styles.ratingText}>Calificación general</Text>
        <Text style={styles.rating}>{'★'.repeat(Math.floor(rating)) + (rating % 1 ? '' : '')}</Text>
        <Text style={styles.ratingText}>{rating.toFixed(1)} / 5.0</Text>

        <Text style={styles.sectionTitle}>COMENTARIOS</Text>
        {reviews.map((review) => (
          <View key={review.id} style={styles.reviewContainer}>
            <TextInput
              style={styles.commentInput}
              value={review.text}
              editable={false}
            />
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.reserveButton}>
        <Text style={styles.reserveButtonText}>RESERVAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};



export default Casas;
