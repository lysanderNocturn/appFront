import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const PerfilScreen = () => {
  const [expandedOption, setExpandedOption] = useState(null); 
  const navigation = useNavigation();

  const toggleOption = (option) => {
    setExpandedOption(expandedOption === option ? null : option);
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Icon name="user" size={100} color="#000" />
        <Text style={styles.profileName}>Nombre</Text>
        <Text style={styles.profileEmail}>Correo@correo.com</Text>
      </View>
      <View style={styles.optionContainer}>
        {/* Editar Perfil */}
        <TouchableOpacity style={styles.option} onPress={() => toggleOption('editarPerfil')}>
          <Text style={styles.optionText}>Editar Perfil</Text>
          <Icon name={expandedOption === 'editarPerfil' ? 'chevron-up' : 'chevron-down'} size={18} color="#555" />
        </TouchableOpacity>
        {expandedOption === 'editarPerfil' && (
          <View style={styles.subOption}>
            {/* Contenido editable del perfil */}
            <Text>Contenido editable del perfil</Text>
          </View>
        )}

        {/* Método de pago */}
        <TouchableOpacity style={styles.option} onPress={() => toggleOption('metodoPago')}>
          <Text style={styles.optionText}>Método de pago</Text>
          <Icon name={expandedOption === 'metodoPago' ? 'chevron-up' : 'chevron-down'} size={18} color="#555" />
        </TouchableOpacity>
        {expandedOption === 'metodoPago' && (
          <View style={styles.subOption}>
            {/* Detalles del método de pago */}
            <Text>Detalles del método de pago</Text>
          </View>
        )}

        {/* Historial de compras */}
        <TouchableOpacity style={styles.option} onPress={() => toggleOption('historialCompras')}>
          <Text style={styles.optionText}>Historial de compras</Text>
          <Icon name={expandedOption === 'historialCompras' ? 'chevron-up' : 'chevron-down'} size={18} color="#555" />
        </TouchableOpacity>
        {expandedOption === 'historialCompras' && (
          <View style={styles.subOption}>
            {/* Contenido del historial de compras */}
            <Text>Contenido del historial de compras</Text>
          </View>
        )}

        {/* Notificaciones */}
        <TouchableOpacity style={styles.option} onPress={() => toggleOption('notificaciones')}>
          <Text style={styles.optionText}>Notificaciones</Text>
          <Icon name={expandedOption === 'notificaciones' ? 'chevron-up' : 'chevron-down'} size={18} color="#555" />
        </TouchableOpacity>
        {expandedOption === 'notificaciones' && (
          <View style={styles.subOption}>
            {/* Configuración de notificaciones */}
            <Text>Configuración de notificaciones</Text>
          </View>
        )}

        {/* Configuración */}
        <TouchableOpacity style={styles.option} onPress={() => toggleOption('configuracion')}>
          <Text style={styles.optionText}>Configuración</Text>
          <Icon name={expandedOption === 'configuracion' ? 'chevron-up' : 'chevron-down'} size={18} color="#555" />
        </TouchableOpacity>
        {expandedOption === 'configuracion' && (
          <View style={styles.subOption}>
            {/* Opciones de configuración */}
            <Text>Opciones de configuración</Text>
          </View>
        )}

        {/* Acerca de nosotros */}
        <TouchableOpacity style={styles.option} onPress={() => toggleOption('acercaDeNosotros')}>
          <Text style={styles.optionText}>Acerca de nosotros</Text>
          <Icon name={expandedOption === 'acercaDeNosotros' ? 'chevron-up' : 'chevron-down'} size={18} color="#555" />
        </TouchableOpacity>
        {expandedOption === 'acercaDeNosotros' && (
          <View style={styles.subOption}>
            {/* Información sobre la empresa */}
            <Text>Información sobre la empresa</Text>
          </View>
        )}

        {/* Soporte técnico */}
        <TouchableOpacity style={styles.option} onPress={() => toggleOption('soporteTecnico')}>
          <Text style={styles.optionText}>Soporte técnico</Text>
          <Icon name={expandedOption === 'soporteTecnico' ? 'chevron-up' : 'chevron-down'} size={18} color="#555" />
        </TouchableOpacity>
        {expandedOption === 'soporteTecnico' && (
          <View style={styles.subOption}>
            {/* Detalles de soporte técnico */}
            <Text>Detalles de soporte técnico</Text>
          </View>
        )}

        
        <TouchableOpacity style={styles.option} onPress={handleLogout}>
          <Text style={styles.optionText}>Cerrar Sesión</Text>
          <Icon name='sign-out' size={18} color="#555" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 18,
    color: 'gray',
  },
  optionContainer: {
    width: '100%',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
  },
  subOption: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});

export default PerfilScreen;
