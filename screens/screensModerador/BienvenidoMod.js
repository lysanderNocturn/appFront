import React, { useEffect, useRef, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const CONTAINER_WIDTH = width * 0.6;
const SPACING = 10;

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

const getDuplicatedImages = (images) => {
    return [...images.slice(-1), ...images, ...images.slice(0, 1)];
};

export default function BienvenidaModer() {
    const navigation = useNavigation();
    const scrollX = useRef(new Animated.Value(0)).current;

    const duplicatedImages = useMemo(() => getDuplicatedImages(imagenes), [imagenes]);

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scrollX, {
                    toValue: CONTAINER_WIDTH * duplicatedImages.length,
                    duration: 30000,
                    useNativeDriver: true,
                }),
                Animated.timing(scrollX, {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: true,
                })
            ])
        ).start();
    }, [scrollX, duplicatedImages.length]);

    const animatedTranslateX = scrollX.interpolate({
        inputRange: [0, CONTAINER_WIDTH * duplicatedImages.length],
        outputRange: [0, -CONTAINER_WIDTH * duplicatedImages.length]
    });

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>COMIENZA CON TU</Text>
            <Text style={styles.highlight}>AVENTURA</Text>
            <Text style={styles.subtitle}>
                Cada huésped trae una nueva historia. {'\n'}
                ¡Crea recuerdos inolvidables siendo un anfitrión!
            </Text>
            <View style={styles.carouselContainer}>
                <Animated.View
                    style={{
                        flexDirection: 'row',
                        transform: [{ translateX: animatedTranslateX }]
                    }}
                >
                    {duplicatedImages.map((item, index) => (
                        <View key={index} style={styles.imageContainer}>
                            <Animated.View style={styles.imageWrapper(scrollX, index)}>
                                <Image source={{ uri: item }} style={styles.posterImage} />
                            </Animated.View>
                        </View>
                    ))}
                </Animated.View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Anuncio')} style={styles.button}>
                <Text style={styles.buttonText}>CONTINUAR</Text>
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
        paddingTop:15,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    highlight: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ff8b53',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#7A7A7A',
        marginVertical: 20,
    },
    carouselContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: CONTAINER_WIDTH,
    },
    imageWrapper: (scrollX, index) => ({
        marginHorizontal: SPACING,
        padding: SPACING,
        borderRadius: 34,
        backgroundColor: "#fff",
        alignItems: "center",
        transform: [
            {
                scale: scrollX.interpolate({
                    inputRange: [
                        (index - 1) * CONTAINER_WIDTH,
                        index * CONTAINER_WIDTH,
                        (index + 1) * CONTAINER_WIDTH,
                    ],
                    outputRange: [1, 1.1, 1],
                    extrapolate: 'clamp',
                }),
            },
            {
                translateY: scrollX.interpolate({
                    inputRange: [
                        (index - 1) * CONTAINER_WIDTH,
                        index * CONTAINER_WIDTH,
                        (index + 1) * CONTAINER_WIDTH,
                    ],
                    outputRange: [0, -50, 0],
                    extrapolate: 'clamp',
                }),
            },
        ],
    }),
    posterImage: {
        width: "100%",
        height: CONTAINER_WIDTH * 1.4,
        resizeMode: "cover",
        borderRadius: 24,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        marginBottom: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
