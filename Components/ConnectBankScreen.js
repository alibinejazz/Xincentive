import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BottomNav from './BottomNav';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearBackground from "../assets/gradient.png"; // Ensure this is correctly imported
import React from 'react';
import bank from "../assets/bank.png";
import { useNavigation } from '@react-navigation/native';

const ConnectBankScreen = () => {
  const navigation = useNavigation();
  console.log("bank screen khul gayi");

  return (
    <View style={styles.container}>
      {/* Background Image Header */}
      <ImageBackground source={LinearBackground} style={styles.headerContainer} resizeMode="cover">
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="black" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Header */}
        <Text style={styles.header} numberOfLines={1} ellipsizeMode='tail'>Connect your bank account</Text>
      </ImageBackground>

      {/* Bank Account Card */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AddNewCard')}>
        <View style={styles.iconContainer}>
          <Image source={bank} style={styles.coinIcon} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.cardHeader}>
            <Text
              style={styles.cardTitle}
              numberOfLines={1}
              ellipsizeMode="tail"
            >Connect your bank account
            </Text><Text style={styles.nextIcon} ><Icon name="chevron-right" size={24} color="black" />
            </Text>
          </View>
          <Text style={styles.cardSubtitle}>
            Link your bank account to convert points to cash or transfer to your account
          </Text>
        </View>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
};

export default ConnectBankScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    fontSize: 16,
    color: "black",
    marginLeft: 5,
    fontFamily: "Satoshi-Medium"
  },
  header: {
    fontSize: 24,
    alignSelf: 'center',
    width: '90%',
    // paddingHorizontal: 20,
    marginTop: 20,
    paddingBottom: 30,
    // backgroundColor:'pink',
    fontFamily: "Satoshi-Black"

  },

  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 35,
    paddingTop: 22,
    paddingBottom: 8,
    paddingLeft: 20,
    borderRadius: 22,
    shadowColor: 'rgba(0, 0, 0, 0.20)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 90,
    marginHorizontal: 20,
    marginTop: -20,
    overflow: 'hidden',
    // backgroundColor: 'blue'

  },
  iconContainer: {
    paddingRight: 4,
    borderRadius: 10,
    height: 100,
    marginRight: 5,
    // marginTop: -70

  },
  textContainer: {
    flex: 1,
    height: 100,
    // backgroundColor:'pink',
    paddingLeft: 5
  },
  nextIcon: {
    left: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '500',
    fontFamily: "Satoshi-Bold",
    flexShrink: 1
  },
  cardSubtitle: {
    fontSize: 16,
    marginTop: 10,
    width: 250,
    fontFamily: "Satoshi-Medium"
  },
});