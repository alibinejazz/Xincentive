import { Image, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';

import logo from "../assets/logo.png";

const SplashScreen = ({ navigation }) => {
  
  useEffect(() => {
    // Navigate to OnBoardingCarousel after 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('OnBoardingCarousel'); 
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={logo} 
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6fe17c', // Change background color if needed
  },
  logo: {
    width: 300, // Adjust based on your logo size
    height: 200, // Adjust based on your logo size
  },
});

export default SplashScreen;
