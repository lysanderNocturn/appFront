import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from '../components/StyleCasa';

// URL de la API de enriquecimiento de empresas de Abstract API
const API_URL = 'https://companyenrichment.abstractapi.com/v2/';
const API_KEY = '88d8d6c85ba344ccbd15ac15569ce3b1'; // Sustituye con tu clave API real

const Casas = ({ route }) => {
  const { id } = route.params; // Usado para ejemplo, en realidad sería un identificador de casa
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5); // Calificación general de ejemplo

  useEffect(() => {
    // Llamada a la API para obtener información de la empresa
    fetch(`${API_URL}?api_key=${API_KEY}&domain=airbnb.com`)
      .then(response => response.json())
      .then(data => {
        const companyData = {
          logo: data.logo,
          name: data.company_name,
          description: data.description,
          address: `${data.street_address}, ${data.city}, ${data.state}, ${data.country} ${data.postal_code}`,
          coordinates: {
            latitude: data.latitude,
            longitude: data.longitude,
          },
          phone: data.phone_numbers[0],
          email: data.email_addresses[0],
          website: data.domain,
          socialLinks: {
            linkedin: data.linkedin_url,
            facebook: data.facebook_url,
            twitter: data.twitter_url,
            instagram: data.instagram_url,
            crunchbase: data.crunchbase_url,
          },
        };
        setCompany(companyData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching company data:', error);
        setLoading(false);
      });

    // Simulación de llamada a API para reseñas (puedes reemplazarla con datos reales)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(response => response.json())
      .then(data => {
        const reviewsData = data.map(comment => ({
          id: comment.id,
          text: comment.body,
        }));
        setReviews(reviewsData);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });

  }, [id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (!company) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No se pudo cargar la información de la empresa.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: company.logo }} style={styles.houseImage} />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.houseTitle}>{company.name}</Text>
        <Text style={styles.location}>{company.address}</Text>
        <Text style={styles.price}>Teléfono: {company.phone}</Text>
        <Text style={styles.capacity}>Email: {company.email}</Text>
        <Text style={styles.price}>Sitio web: {company.website}</Text>

        <Text style={styles.description}>{company.description}</Text>

        <View style={styles.socialLinksContainer}>
          <Text style={styles.includesTitle}>Redes Sociales</Text>
          <Text style={styles.socialLink}>LinkedIn: {company.socialLinks.linkedin}</Text>
          <Text style={styles.socialLink}>Facebook: {company.socialLinks.facebook}</Text>
          <Text style={styles.socialLink}>Twitter: {company.socialLinks.twitter}</Text>
          <Text style={styles.socialLink}>Instagram: {company.socialLinks.instagram}</Text>
          <Text style={styles.socialLink}>Crunchbase: {company.socialLinks.crunchbase}</Text>
        </View>
      </View>

      <View style={styles.mapContainer}>
        <Text style={styles.includesTitle}>UBICACIÓN</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: company.coordinates.latitude,
            longitude: company.coordinates.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={company.coordinates}
            title={company.name}
            description={company.address}
          />
        </MapView>
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
