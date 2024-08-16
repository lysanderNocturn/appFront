import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import { LinearGradient } from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';

const images = {
  1: require('../assets/imgs/casa (1).jpg'),
  3: require('../assets/imgs/casa (3).jpg'),
  4: require('../assets/imgs/casa (4).jpg'),
  5: require('../assets/imgs/casa (5).jpg'),
  6: require('../assets/imgs/casa (6).jpg'),
  7: require('../assets/imgs/casa (7).jpg'),
  8: require('../assets/imgs/casa (8).jpg'),
};

export default function InicioCarrucel({ navigation }) {
  const [randomImages, setRandomImages] = useState([]);
  const pagerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const images = generateRandomImages(3);
    setRandomImages(images);

    const autoSlide = setInterval(() => {
      setCurrentPage(prevPage => {
        const nextPage = (prevPage + 1) % images.length;
        pagerRef.current.setPage(nextPage);
        return nextPage;
      });
    }, 3000);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 1) return 1;
        return prev + 1 / 9;
      });
    }, 1000);

    const timer = setTimeout(() => {
      navigation.replace('MainTabs');
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearInterval(autoSlide);
      clearInterval(progressInterval);
    };
  }, [navigation]);

  const generateRandomImages = (count) => {
    const selectedImages = new Set();
    while (selectedImages.size < count) {
      const randomNumber = Math.floor(Math.random() * 8) + 1;
      selectedImages.add(images[randomNumber]);
    }
    return Array.from(selectedImages);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido</Text>
      <PagerView ref={pagerRef} style={styles.pagerView} initialPage={0}>
        {randomImages.map((image, index) => (
          <View style={styles.page} key={index.toString()}>
            <View style={styles.card}>
              <Image source={image} style={styles.image} resizeMode="cover" />
              <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 0.5)']}
                style={styles.imageOverlay}
              />
            </View>
          </View>
        ))}
      </PagerView>
      <Progress.Bar
        progress={progress}
        width={200}
        height={10}
        borderRadius={5}
        color='#F9A761'
        unfilledColor="#c0c0c0"
        style={styles.progressBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  pagerView: {
    flex: 1,
    height: 300,
    width: '100%',
    marginVertical: 20,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 40,
    color: '#F9A761',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  progressBar: {
    marginTop: 20,
  },
});
