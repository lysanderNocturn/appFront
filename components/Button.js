import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Button(){
    return(
        <TouchableOpacity style={styles.conteiner}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#CD567C', '#E89F56']}
                start={{x: 0, y: 0, }}
                end={{x:1, y:1}}
                style={styles.button}
            >
                <Text style={styles.text}>Iniciar sesión</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        padding: 20,
        flex: 1,
        width: 200,
        alignItems: 'center',
        marginTop: 50,
    },
    text:{
        fontSize:20,
        color:'#fff',
        fontWeight:' bold',

    },
    button:{
        width:'100%',
        height: 50,
        borderRadius: 25,
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
  })