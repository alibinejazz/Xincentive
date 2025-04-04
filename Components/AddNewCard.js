import { Image, ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import BackIcon from '../Images/BackIcon';
import BottomNav from './BottomNav';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearBackground from "../assets/gradient.png";
import Righticon from '../Images/RightIcon';
import { WebView } from 'react-native-webview';
import add from "../assets/add.png";
import creditcard from "../assets/creditcard.png";
import lock from "../assets/lock.png";
import { useNavigation } from '@react-navigation/native';

const AddNewCard = () => {
  const navigation = useNavigation();
  const [showWebView, setShowWebView] = useState(false);
  const [connectUrl, setConnectUrl] = useState('');

  const handleAddNewCard = async () => {
    try {
      // Replace with your actual Basiq Connect URL with API key
      const url = `https://connect.basiq.io/46fdab54-cc31-43d4-bd46-d6663c267386?action=connect`;
      setConnectUrl(url);
      setShowWebView(true);
      
      // Alternatively, open in device browser:
      // Linking.openURL(url);
    } catch (error) {
      console.error('Failed to connect bank account:', error);
      // Show error to user (you might want to add an alert here)
    }
  };

  const handleNavigationStateChange = (navState) => {
    // Check if the user has completed the connection process
    if (navState.url.includes('success')) {
      setShowWebView(false);
      // Handle successful connection (e.g., refresh accounts)
      // You might want to navigate to a success screen or show a message
    } else if (navState.url.includes('error')) {
      setShowWebView(false);
      // Handle connection error
      // You might want to show an error message to the user
    }
  };

  if (showWebView) {
    return (
      <WebView
        source={{ uri: connectUrl }}
        onNavigationStateChange={handleNavigationStateChange}
        style={{ flex: 1 }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        {/* Gradient Header Background */}
        <ImageBackground source={LinearBackground} style={styles.headerContainer} resizeMode="cover">
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            {/* <Icon name="chevron-left" size={24} color="black" /> */}
            <BackIcon/>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          {/* Header */}
          <Text style={styles.header} numberOfLines={1} ellipsizeMode='tail'>Connect your bank account</Text>
        </ImageBackground>

        {/* Bank Account Card */}
        <TouchableOpacity style={styles.card} onPress={handleAddNewCard}>
          <View style={styles.iconContainer}>
            <Image source={add} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Add New Card</Text>
          </View>
          <Righticon />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card2} >
          <View style={styles.iconContainer2}>
            <Image source={creditcard} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Bank Account Details</Text>
            <Text style={styles.cardSubtitle}>Mastercard**** **** **** 0000</Text>
          </View>
        </TouchableOpacity>

        {/* Security Info */}
        <View style={styles.securityContainer}>
          <Image source={lock} style={{ marginBottom: 22 }} height={30} />
          <Text style={styles.securityText}>
            Your account details are safe and secure encrypted with us.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
};

export default AddNewCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  headerContainer: {
    width: '110%',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 0,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 14,
    color: "black",
    marginLeft: 5,
    fontFamily:"Satoshi-Medium"
  },
  header: {
    fontSize: 24,
    alignSelf: 'center',
    width: '90%',
    marginTop: 20,
    paddingBottom: 30,
    fontFamily: "Satoshi-Black"
  },
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingLeft:5,
    borderRadius: 22,
    shadowColor: 'rgba(0, 0, 0, 0.20)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 90,
    marginHorizontal: 20,
    marginTop: -20,
    overflow: 'hidden',
  },
  card2: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingLeft:5,
    borderRadius: 25,
    shadowColor: 'rgba(0, 0, 0, 0.20)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 90,
    marginHorizontal: 20,
    marginTop: 30,
    overflow: 'hidden',
    height: 120,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  iconContainer2: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 22,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily:"Satoshi-Medium"
  },
  cardSubtitle: {
    fontSize: 15,
    color: 'gray',
    marginTop: 5,
    fontFamily:"Satoshi-Medium"
  },
  securityContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 25,
    marginTop: 15,
    gap: 10,
  },
  securityText: {
    color: "#9b9b9b",
    fontSize: 17,
    flexWrap: "wrap",
    width: 300,
    fontFamily:"Satoshi-Medium"
  },
});