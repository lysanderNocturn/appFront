//npm install @react-native-community/datetimepicker

import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SingUp() {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
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
          onPress={() => navigation.navigate('Login')}
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
    backgroundColor: '#9AEB9D',
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

