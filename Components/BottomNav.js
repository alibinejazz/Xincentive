import { Keyboard, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import activeUser from "../assets/activeUser.png";
import activeWallet from "../assets/activeWallet.png";
import explore from "../assets/explore.png";
import home from "../assets/home.png";
import user from "../assets/user.png";
import wallet from "../assets/wallet.png";

const BottomNav = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  // Define related screens that should keep Wallet or Profile tabs active
  const walletScreens = ['ConnectBankScreen', 'AddNewCard', 'Conversion'];
  const profileScreens = ['MyProfile', 'EditProfile', "Subscription", "Terms"];

  const tabs = [
    { name: 'Home', icon: home, screen: 'Market' },
    { name: 'Explore', icon: explore, screen: 'Explore' },
    { name: 'Wallet', icon: wallet, activeIcon: activeWallet, screen: 'Wallet' },
    { name: 'Profile', icon: user, activeIcon: activeUser, screen: 'MyProfile' },
  ];

  if (keyboardVisible) return null; // Hide navbar when keyboard is open

  return (
    <View style={styles.bottomNav}>
      {tabs.map((tab) => {
        let isActive = false;

        if (tab.name === 'Wallet') {
          isActive = walletScreens.includes(route.name);
        } else if (tab.name === 'Profile') {
          isActive = profileScreens.includes(route.name);
        } else {
          isActive = route.name === tab.screen;
        }

        return (
          <TouchableOpacity
            key={tab.name}
            style={[styles.navButton, isActive ? styles.activeTab : null]}
            onPress={() => navigation.navigate(tab.screen)}
          >
            <Image source={isActive && tab.activeIcon ? tab.activeIcon : tab.icon} />
            {isActive && <Text style={styles.activeText}>{tab.name}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  navButton: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  activeTab: {
    backgroundColor: '#daf7d9',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 30,
    flexDirection: 'row',
    gap: 10,
  },
  activeText: {
    fontSize: 14,
    color: 'black',
    marginLeft: 8,
  },
});
