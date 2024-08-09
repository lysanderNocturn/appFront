import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Platform, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SingUp() {
  const navigation = useNavigation();
  const route = useRoute();
  const { nombre, correo, username, password } = route.params; // Recibimos los datos del registro anterior

  const [date, setDate] = useState(new Date());
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  const handleSingUp = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://tu-api.com/singup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          correo,
          username,
          password,
          phone,
          birthdate: date,
          age,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Registro exitoso', 'Has completado tu registro');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', data.message || 'No se pudo completar el registro');
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema con la conexión. Inténtalo de nuevo más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>REGISTRO</Text>

        <View style={styles.inputContainer}>
          <Icon name="phone" size={20} color="#888" style={styles.iconInput} />
          <TextInput
            style={styles.input}
            placeholder="Número de teléfono"
            placeholderTextColor="#888"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="calendar" size={20} color="#888" style={styles.iconInput} />
          <TouchableOpacity onPress={showDatePicker} style={styles.datePickerButton}>
            <Text style={styles.inputText}>
              {date ? date.toDateString() : "Fecha de nacimiento"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#888" style={styles.iconInput} />
          <TextInput
            style={styles.input}
            placeholder="Edad"
            placeholderTextColor="#888"
            value={age}
            onChangeText={setAge}
          />
        </View>

        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSingUp}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  iconInput: {
    padding: 15,
  },
  input: {
    flex: 1,
    padding: 15,
    paddingLeft: 0,
    backgroundColor: '#fff',
  },
  inputText: {
    flex: 1,
    padding: 15,
    paddingLeft: 0,
    color: '#000',
  },
  datePickerButton: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#F9A761',
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
