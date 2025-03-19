import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import BottomNav from './BottomNav';
import SignoutModal from './SignoutModal';
import creditcard from "../assets/creditcard.png";
import subscription from "../assets/subscription.png";
import terms from "../assets/terms.png";
import signout from "../assets/signout.png";
import edit from "../assets/edit.png";
import LinearBackground from "../assets/gradient.png";

const MyProfile = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const menuItems = [
    { name: 'Payment Method', icon: creditcard, screen: 'BankDetails' },
    { name: 'My Subscription', icon: subscription, screen: 'Subscription' },
    { name: 'Terms of Services', icon: terms, screen: 'Terms' },
    { name: 'Sign Out', icon: signout, action: () => setIsModalVisible(true) },
  ];

  return (
    <View style={styles.container}>
      {/* Ensure the whole screen is scrollable */}
      <ScrollView 
        style={{ flex: 1 }} 
        contentContainerStyle={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
      >
        {/* Gradient Header */}
        <ImageBackground source={LinearBackground} style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={24} color="black" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.header}>My Profile</Text>
          <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
            <Image source={edit} />
          </TouchableOpacity>
          </ImageBackground>
        {/* Profile Info Card */}
        <View style={styles.profileCard}>
          <Text style={styles.profileName}>Adeel Khan</Text>
          <Text style={styles.profileEmail}>adeelkhan@gmail.com</Text>
          <Text style={styles.profilePhone}>+1336643643</Text>
        </View>

        {/* Profile Menu Options */}
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={item.action ? item.action : () => navigation.navigate(item.screen)}
          >
            <Image source={item.icon} style={styles.menuIcon} />
            <Text style={styles.menuText}>{item.name}</Text>
            <Icon name="chevron-right" size={24} color="black" />
          </TouchableOpacity>
        ))}

        {/* App Version */}
        <Text style={styles.versionText}>Version 1.1</Text>

        {/* Bottom Navigation INSIDE ScrollView */}
      </ScrollView>
        <BottomNav />

      {/* SignOut Modal */}
      <SignoutModal
        visible={isModalVisible}
        onConfirm={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      />
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1, // Ensures scrolling works
    paddingBottom: 100, // Extra padding for scrollable bottom content
  },
  headerContainer: {
    paddingTop: 70,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    resizeMode: 'cover',
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
  editButton: {
    padding: 7,
    marginBottom: 30,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 30,
    flex: 1,
  },
  profileCard: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: -10,
    marginBottom: 20,
    shadowColor: 'rgba(0, 0, 0,0.3)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 20,
  },
  profileName: {
    color: "#7d7d7d",
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 25,
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
  },
  profilePhone: {
    fontSize: 16,
    color: 'gray',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 25,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 10,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 20,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "500",
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  versionText: {
    textAlign: "left",
    fontSize: 16,
    color: 'gray',
    marginTop: 40,
    marginLeft: 20, // More space at the bottom
  },
});
