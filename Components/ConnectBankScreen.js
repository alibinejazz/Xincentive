import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import BottomNav from './BottomNav';
import bank from "../assets/bank.png";

const ConnectBankScreen = () => {
  const navigation = useNavigation();
  console.log("bank screen khul gayi");

  return (
    <View style={styles.container}>
      {/* Gradient Header Background */}
      <LinearGradient colors={['#faf0f0', '#faf0f0', '#faf0f0']} style={styles.headerContainer}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="black" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Header */}
        <Text style={styles.header}>Connect your bank account</Text>
      </LinearGradient>

      {/* Bank Account Card */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AddNewCard')}>
        <View style={styles.iconContainer}>
          <Image source={bank} style={styles.coinIcon} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Connect your bank account</Text>
            <Text>
              <Icon name="chevron-right" size={24} color="black" />
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
    
  },
  header: {
    fontSize: 26,
    textAlign: 'center',
    marginTop: 20,
    paddingBottom: 30,
    fontWeight:"bold"
  },
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 35,
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
  iconContainer: {
    padding: 10,
    borderRadius: 10,
    marginRight: 5,
    marginTop: -70
  },
  textContainer: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '500',
  },
  cardSubtitle: {
    fontSize: 16,
    marginTop: 10,
  },
});
