import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import CandlestickChart from './CandlestickChart';
import ConversionSuccessModal from './ConversionSuccessModal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import SuccessModal from './SuccessModal';
import blacktri from "../assets/blacktri.png";
import points from "../assets/points.png"

const CryptoConversion = () => {

    const [modalVisible, setModalVisible] = useState(false); // ✅ State to control modal

    // Sample candlestick data
    const candleData = [
        { x: 10, high: 140, low: 90, open: 100, close: 130 },
        { x: 40, high: 145, low: 100, open: 120, close: 140 },
        { x: 70, high: 150, low: 110, open: 115, close: 145 },
        { x: 100, high: 155, low: 105, open: 130, close: 120 },
        { x: 130, high: 160, low: 120, open: 140, close: 150 },
        { x: 40, high: 145, low: 100, open: 120, close: 140 },
        { x: 70, high: 150, low: 110, open: 115, close: 145 },
        { x: 100, high: 155, low: 105, open: 130, close: 120 },
        { x: 130, high: 160, low: 120, open: 140, close: 150 },
        { x: 40, high: 145, low: 100, open: 120, close: 140 },
        { x: 70, high: 150, low: 110, open: 115, close: 145 },
        { x: 100, high: 155, low: 105, open: 130, close: 120 },
        { x: 130, high: 160, low: 120, open: 140, close: 150 },
        { x: 40, high: 145, low: 100, open: 120, close: 140 },
        { x: 70, high: 150, low: 110, open: 115, close: 145 },
        { x: 100, high: 155, low: 105, open: 130, close: 120 },
        { x: 130, high: 160, low: 120, open: 140, close: 150 },
        { x: 130, high: 160, low: 120, open: 140, close: 150 },
        { x: 40, high: 145, low: 100, open: 120, close: 140 },
        { x: 70, high: 150, low: 110, open: 115, close: 145 },
        { x: 100, high: 155, low: 105, open: 130, close: 120 },
        { x: 130, high: 160, low: 120, open: 140, close: 150 },
        { x: 40, high: 145, low: 100, open: 120, close: 140 },
        { x: 10, high: 140, low: 90, open: 100, close: 130 },

    ];

    return (

        <View style={styles.container}>
            {/* Balance Display */}
            <Text style={styles.balanceLabel}>Current Balance</Text>
            <Text style={styles.balance}>126,49.00</Text>

            {/* Input Field */}
            <View style={styles.inputWrapper}>
                <View style={styles.labelContainer}>
<Image source={points}/>
                    <Text style={styles.label}>Enter points to convert</Text>
                </View>
                <TextInput
                    placeholder="Enter points to convert"
                    placeholderTextColor="#C7C7C7"
                    style={styles.input}
                    keyboardType="numeric"
                />
            </View>
            {/* Price and Trend */}
            <View style={styles.priceTrendContainer}>
                {/* XNTV Price Section */}
                <View style={styles.priceSection}>
                    <Text style={styles.priceLabel}>XNTV Price</Text>
                    <Text style={styles.price}>$1,23</Text>
                </View>

                {/* XNTV Coin Icon */}
                <Image
                    source={require('./Xcoin.png')}
                    style={styles.coinIcon}
                />


                {/* Trend Section */}
                <View style={styles.trendSection}>
                    <Text style={styles.trendLabel}>This Week</Text>
                    <View style={styles.trendRow}>
                        <Text style={styles.trend}>+10.03 %</Text>
                        <Image source={blacktri} style={styles.trendIcon} />
                    </View>
                </View>
            </View>

            {/* Candlestick Chart Component */}
            <CandlestickChart data={candleData} />

            {/* Conversion Summary */}
            <View style={styles.summaryContainer}>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>You’ve converted</Text>
                    <Text style={styles.summaryValue}>50.00</Text>
                </View>

                <Text style={styles.conversionFormula}>Xntv 0.0011 x 50 points = Xntv 0.05</Text>

                <View style={styles.divider} />

                <View style={styles.summaryRow}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalValue}>Xntv 0.00</Text>
                </View>
            </View>

            {/* Confirm Button */}
            <TouchableOpacity style={styles.confirmButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.confirmButtonText}>Confirm Conversion</Text>
            </TouchableOpacity>

            <SuccessModal visible={modalVisible} onClose={() => setModalVisible(false)} />

        </View>
    );
};

export default CryptoConversion;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    balanceLabel: {
        fontSize: 18,
        color: 'black',
        marginBottom: 5,
    },
    balance: {
        fontSize: 36,
        fontWeight: '500',
    },
    inputWrapper: {
        backgroundColor: '#F5F5F5',
        borderRadius: 100,
        marginVertical: 15,
        width: '100%',
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        gap:10
    },
    inputIcon: {
        marginRight: 8,
    },
    label: {
        fontSize: 16,
        color: '#3c3c3c',
    },
    input: {
        backgroundColor: '#ffffff',
        fontSize: 20,
        color: '#3c3c3c',
        padding: 20,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        paddingBottom: 15
    },
    priceTrendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        paddingVertical: 10,
        // paddingHorizontal: 20,
        borderRadius: 12,
        marginVertical: 15,
        borderBottomWidth: 0.2,
    },
    priceSection: {
        alignItems: 'center',
    },
    priceLabel: {
        fontSize: 18,
        color: 'gray',
    },
    price: {
        fontSize: 28,
        fontWeight: '500',
    },
    coinIcon: {
        width: 40,
        height: 40,
    },
    trendSection: {
        alignItems: "flex-start",
    },
    trendRow: {
        flexDirection: "row",
        alignItems: "center", // Align items horizontally
    },
    trendLabel: {
        fontSize: 18,
        color: 'gray',
        marginLeft: 10,
    },
    trendIcon: {
        width: 10,
        height: 10,
        marginBottom: 20,
        marginLeft: 10, // Adjust this value to move the icon slightly up
    },
    trend: {
        fontSize: 28,
        fontWeight: '500',
    },
    summaryContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 18,
        width: '100%',
        marginTop: 20,
      },
      
      summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
      },
      summaryLabel: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
      },
      summaryValue: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
      },
      conversionFormula: {
        fontSize: 16,
        color: '#9fa1ae',
        marginVertical: 6,
        textAlign: 'left',
      },
      divider: {
        height: 1,
        backgroundColor: '#E5E5E5',
        marginVertical: 10,
      },
      totalLabel: {
        fontSize: 17,
        fontWeight: '400',
        color: 'black',
      },
      totalValue: {
        fontSize: 17,
        fontWeight: '400',
        color: 'black',
      },
      
    confirmButton: {
        backgroundColor: 'rgb(110, 225, 124)',
        paddingVertical: 18, // ✅ Reduce excessive padding
        paddingHorizontal: 50, // ✅ Adjust for better responsiveness
        borderRadius: 30,
        alignSelf: 'center', // ✅ Center button horizontally
        marginTop: 20, // ✅ Add space above the button
        width: "100%",
  },
    confirmButtonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
});
