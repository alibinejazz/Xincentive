import { Image, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';

import logo from "../assets/logo.png"

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={logo} // Replace with your logo path
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