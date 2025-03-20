import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import BottomNav from './BottomNav'; // Import BottomNav
import add from "../assets/add.png"
import creditcard from "../assets/creditcard.png"
import lock from "../assets/lock.png"
import LinearBackground from "../assets/gradient.png"; 


const AddNewCard = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        {/* Gradient Header Background */}
        <ImageBackground source={LinearBackground} style={styles.headerContainer} resizeMode="cover">
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={24} color="black" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          {/* Header */}
          <Text style={styles.header}>Connect your bank account</Text>
        </ImageBackground>

        {/* Bank Account Card */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.iconContainer}>
            <Image source={add} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Add New Card</Text>
          </View>
          <Icon name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card2} onPress={() => navigation.navigate('Conversion')}>
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
    paddingBottom: 100, // Ensures scrolling space
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
    left: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 16,
    color: "black",
    marginLeft: 5,
    fontFamily:"Satoshi-Medium"
  },
  header: {
    fontSize: 26,
    textAlign: 'center',
    marginTop: 20,
    paddingBottom: 30,
    fontFamily:"Satoshi-Black"
  },
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
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
    borderRadius: 25,
    shadowColor: 'rgba(0, 0, 0, 0.20)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 90,
    marginHorizontal: 20,
    marginTop: 30,
    overflow: 'hidden',
    height: 120, // Fix: height should be a number, not a string
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
