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
            <Text>Contenido editable del perfil</Text>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('BienvenidaMod')}>
              <Text style={styles.ButtonText}>Hacer moderador</Text>
            </TouchableOpacity>

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
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>Agregar metodo de pago</Text>
            </TouchableOpacity>
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
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>Editar configuracion</Text>
            </TouchableOpacity>
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
            <Text>contactanos (449-451-7431)</Text>
            
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
            <Text>contactanos (449-451-7431)</Text>
          </View>
        )}

        {/* Cerrar Sesión */}
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
  Button: {
    marginTop: 10,
    backgroundColor: '#f1ac84',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  ButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PerfilScreen;
