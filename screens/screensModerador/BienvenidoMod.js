import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList, Image, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const imagenes = [
    "https://i.pinimg.com/474x/26/2d/e1/262de10df81418db09c78d22c2d71bed.jpg",
    "https://i.pinimg.com/236x/0f/55/cb/0f55cb8efd0689589e57341776c79bd6.jpg",
    "https://i.pinimg.com/236x/5a/79/3f/5a793fe9fed2ebb48eaaf88f3f284372.jpg",
    "https://i.pinimg.com/474x/d1/06/82/d106825756383b8e59e5c4a8a2957a2a.jpg",
    "https://i.pinimg.com/236x/63/2f/04/632f0465c84a824420a46dfa1b8f8f4d.jpg",
    "https://i.pinimg.com/474x/26/2d/e1/262de10df81418db09c78d22c2d71bed.jpg",
    "https://i.pinimg.com/236x/0f/55/cb/0f55cb8efd0689589e57341776c79bd6.jpg",
    "https://i.pinimg.com/236x/5a/79/3f/5a793fe9fed2ebb48eaaf88f3f284372.jpg",
    "https://i.pinimg.com/474x/d1/06/82/d106825756383b8e59e5c4a8a2957a2a.jpg",
    "https://i.pinimg.com/236x/63/2f/04/632f0465c84a824420a46dfa1b8f8f4d.jpg",
    
];

const { width } = Dimensions.get('window');
const ESPACIO_CONTENEDOR = width * 0.5;
const ESPACIO_LATERAL = (width - ESPACIO_CONTENEDOR) / 2;
const ESPACIO = 10;

const duplicatedImages = [ 
    ...imagenes.slice(-1),
    ...imagenes,
    ...imagenes.slice(0, 1)
]; // Este duplica las imagenes xd

export default function BienvenidaModer() {
    const scrollX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scrollX, {
                    toValue: ESPACIO_CONTENEDOR * duplicatedImages.length,
                    duration: 30000,
                    useNativeDriver: true,
                }),
                Animated.timing(scrollX, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                })
            ])
        ).start(0);
    }, [scrollX]);

    const animatedTranslateX = scrollX.interpolate({
        inputRange: [0, ESPACIO_CONTENEDOR * duplicatedImages.length],
        outputRange: [0, -ESPACIO_CONTENEDOR * duplicatedImages.length]
    });

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>COMIENZA CON TU</Text>
            <Text style={styles.highlight}>AVENTURA</Text>
            <Text style={styles.subtitle}>
                Cada huésped trae una nueva historia. {'\n'}
                ¡Crea recuerdos inolvidables siendo un anfitrión!
            </Text>
            <View style={styles.container}>
                <StatusBar hidden />
                <Animated.View
                    style={{
                        flexDirection: 'row',
                        transform: [{ translateX: animatedTranslateX }]
                    }}
                >
                    {duplicatedImages.map((item, index) => (
                        <View key={index} style={{ width: ESPACIO_CONTENEDOR }}>
                            <Animated.View
                                style={{
                                    marginHorizontal: ESPACIO,
                                    padding: ESPACIO,
                                    borderRadius: 34,
                                    backgroundColor: "#fff",
                                    alignItems: "center",
                                    transform: [
                                        {
                                            scale: scrollX.interpolate({
                                                inputRange: [
                                                    (index - 1) * ESPACIO_CONTENEDOR,
                                                    index * ESPACIO_CONTENEDOR,
                                                    (index + 1) * ESPACIO_CONTENEDOR,
                                                ],
                                                outputRange: [1, 1.1, 1],
                                                extrapolate: 'clamp',
                                            }),
                                        },
                                        {
                                            translateY: scrollX.interpolate({
                                                inputRange: [
                                                    (index - 1) * ESPACIO_CONTENEDOR,
                                                    index * ESPACIO_CONTENEDOR,
                                                    (index + 1) * ESPACIO_CONTENEDOR,
                                                ],
                                                outputRange: [0, -50, 0],
                                                extrapolate: 'clamp',
                                            }),
                                        },
                                    ],
                                }}
                            >
                                <Image source={{ uri: item }} style={styles.posterImage} />
                            </Animated.View>
                        </View>
                    ))}
                </Animated.View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>COMIENZA AHORA</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    highlight: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ff8b53', // Ajusta el color al azul de la palabra "AVENTURA"
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#7A7A7A',
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    posterImage: {
        width: "100%",
        height: ESPACIO_CONTENEDOR * 1.4,
        resizeMode: "cover",
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
    }
});