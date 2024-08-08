import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const data = [
  { id: '1', user: 'USER 1', message: 'Mensaje de notificación', time: '10:44 p.m' },
  { id: '2', user: 'USER 2', message: 'Mensaje de notificación', time: '10:44 p.m' },
  { id: '3', user: 'USER 3', message: 'Mensaje de notificación', time: '10:44 p.m' },
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
      <Text style={styles.header}>MENSAJES</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
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
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
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
