import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Button() {
    const navigation = useNavigation(); // Obtén el objeto navigation

    return (
        <TouchableOpacity style={styles.container} onPress={handleLogin}>
            <LinearGradient
                colors={['#CD567C', '#E89F56']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button}
            >
                <Text style={styles.text}>Iniciar Sesión</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: 200,
        alignItems: 'center',
        marginTop: 70,
    },
    text: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
