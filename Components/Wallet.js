import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import BottomNav from './BottomNav';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Wallet = () => {
  // Transaction data
  const transactions = [
    {
      id: '1',
      name: 'Starbucks',
      image: require('../assets/Starbucks.png'),
      status: 'Pending',
      statusColor: '#FEE4E4',
      statusTextColor: '#E57373',
      amount: '$ 44.89',
      tokens: 'XNT 1500',
      backgroundColor: '#ffffff',
    },
    {
      id: '2',
      name: 'Pringles',
      image: require('../assets/pringles.png'),
      status: 'Pending',
      statusColor: '#FEE4E4',
      statusTextColor: '#E57373',
      amount: '$ 55.39',
      tokens: 'XNT 1500',
      backgroundColor: '#f60000',
    },
    {
      id: '3',
      name: 'Walmart',
      image: require('../assets/wallmart.png'),
      status: 'Available',
      statusColor: '#E8F5E9',
      statusTextColor: '#66BB6A',
      amount: '$ 45.49',
      tokens: 'XNT 1500',
      backgroundColor: '#0173e5',
    },
    {
      id: '4',
      name: 'McDonald\'s',
      image: require('../assets/mc.png'),
      status: 'Available',
      statusColor: '#E8F5E9',
      statusTextColor: '#66BB6A',
      amount: '$ 45.49',
      tokens: 'XNT 1500',
      backgroundColor: '#ff0404',
    },
  ];

  const navigation = useNavigation();
  // Action buttons data
  const actionButtons = [
    { id: '1', icon: 'refresh', label: 'Convert' },
    { id: '2', icon: 'arrow-downward', label: 'Deposit' },
    { id: '3', icon: 'shopping-bag', label: 'Buy' },
  ];

  const renderTransaction = (item) => (
    <View key={item.id} style={styles.transactionContainer}>
      <View style={styles.transactionLeft}>
        <View style={[styles.logoContainer, { backgroundColor: item.backgroundColor }]}>
          <Image source={item.image} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={styles.transactionInfo}>
          <Text style={styles.merchantName}>{item.name}</Text>
          <View style={[styles.statusBadge, { backgroundColor: item.statusColor }]}>
            <Text style={[styles.statusText, { color: item.statusTextColor }]}>{item.status}</Text>
          </View>
        </View>
      </View>
      <View style={styles.transactionRight}>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={styles.tokens}>{item.tokens}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../assets/gradient.png')} 
        style={styles.headerBackground}
        resizeMode="cover"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Wallet</Text>
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("ConnectBankScreen")}>
            <Icon name="add" size={28} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Current Balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceAmount}>126,49</Text>
            <Text style={styles.balanceCurrency}>.00</Text>
          </View>
          <Text style={styles.walletAddress}>0X078E...95654</Text>
          <Text style={styles.tokenLabel}>XNTV</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          {actionButtons.map((button) => (
            <TouchableOpacity key={button.id} style={styles.actionButton}>
              <View style={styles.iconCircle}>
                <Icon name={button.icon} size={24} color="#000" />
              </View>
              <Text style={styles.actionButtonLabel}>{button.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>

      {/* Transactions List */}
      <ScrollView style={styles.transactionsContainer}>
        {transactions.map((transaction) => renderTransaction(transaction))}
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerBackground: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the title
    alignItems: 'center',
    marginBottom: 50,
    position: 'relative', // For absolute positioning of the add button
  },
  headerTitle: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'Satoshi-Black',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Position the add button absolutely
    right: 0, // Place it on the right
  },
  balanceContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  balanceLabel: {
    fontSize: 14,
    color: '#444',
    marginBottom: 5,
    fontFamily: 'Satoshi-Medium',
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  balanceAmount: {
    fontSize: 42,
    color: '#000',
    fontFamily: 'Satoshi-Bold',
  },
  balanceCurrency: {
    fontSize: 24,
    color: '#000',
    fontWeight: '500',
    fontFamily: 'Satoshi-Black',
  },
  walletAddress: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
    backgroundColor:"#f3f3f5",
    padding:6,
    borderRadius:25,
    fontFamily: 'Satoshi-Regular',
  },
  tokenLabel: {
    position: 'absolute',
    right: 30,
    top: 0,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 25,
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    backgroundColor:"#fff"
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 60,
    marginTop: 20,
  },
  actionButton: {
    alignItems: 'center',
    width: '30%',
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  actionButtonLabel: {
    fontSize: 14,
    color: '#444',
    fontFamily: 'Satoshi-Bold',
  },
  transactionsContainer: {
    flex: 1,
    paddingTop: 10,
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 0.8,
    borderColor: '#E8E8E8',
  },
  logo: {
    width: 40,
    height: 40,
  },
  transactionInfo: {
    justifyContent: 'center',
  },
  merchantName: {
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
    fontFamily: 'Satoshi-Bold',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Satoshi-Medium',
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
    fontFamily: 'Satoshi-Medium',
  },
  tokens: {
    fontSize: 14,
    color: '#777',
    
    fontFamily: 'Satoshi-Medium',
  },
});

export default Wallet;