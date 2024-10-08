import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  { id: '1', user: 'Roberto Robles', message: 'Me interesa hacer una reservación', time: '10:44 p.m' },
  { id: '2', user: 'Aldayr Ramos', message: 'Tengo algunas dudas sobre el servicio', time: '10:44 p.m' },
  { id: '3', user: 'Astrid Rodriguez', message: 'Puedo llevar a mi cachorro?', time: '10:44 p.m' },
];

const Notificaciones = () => {
  const renderItem = ({ item }) => (
    <View style={styles.notification}>
      <View style={styles.textContainer}>
        <Text style={styles.user}>{item.user}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>MENSAJES <Icon name="comment" size={20} color="#000" style={styles.searchIcon}/></Text>
      
      <Text style={styles.subHeader}>HOY</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  },
  header: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center'
  },
  subHeader: {
    fontSize: 18,
    color: '#888',
    marginBottom: 16,
  },
  list: {
    alignItems: 'center',
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ece4df',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth:1,
    margin: 15,
    borderColor: "#ccc"
  },
  searchIcon: {
    marginRight: 100,
  },
  textContainer: {
    flex: 1,
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    color: '#333',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
});

export default Notificaciones;
