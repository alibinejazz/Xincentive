import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import BackIcon from '../Images/BackIcon';
import BottomNav from './BottomNav'; // Import BottomNav
import CryptoConversion from './CryptoConversion';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearBackground from "../assets/gradient.png";
import LinearGradient from 'react-native-linear-gradient';
import QRScan from './QRscan';
import Success from "../assets/Check.png"
import crypto from "../assets/crypto.png";
import dollars from "../assets/dollars.png";
import { useNavigation } from '@react-navigation/native';

const ConversionSelection = () => {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState('Dollars'); // State to track selection

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
                          <Text style={styles.header}>Convert to</Text>
                        </ImageBackground>

                {/* Bank Account Card */}
                <View style={styles.selectionContainer}>
                    <TouchableOpacity
                        style={[styles.card, selectedOption === 'Dollars' && styles.selectedCard]}
                        onPress={() => setSelectedOption('Dollars')}
                    >
                        {/* Checkmark if selected */}
                        {selectedOption === 'Dollars' && (
                            <View style={styles.checkmarkContainer}>
                                {/* <Icon name="check-circle" size={30} color="rgb(110, 225, 124)" /> */}
                                <Image style={{height:24,width:24}} source={Success}/>
                            </View>
                        )}

                        <View style={styles.iconContainer}>
                            <Image source={dollars}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.cardTitle}>Dollars</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.card, selectedOption === 'Crypto' && styles.selectedCard]}
                        onPress={() => setSelectedOption('Crypto')}
                    >
                        {/* Checkmark if selected */}
                        {selectedOption === 'Crypto' && (
                            <View style={styles.checkmarkContainer}>
                                {/* <Icon name="check-circle" size={30} color="rgb(110, 225, 124)" /> */}
                                <Image style={{height:24,width:24}} source={Success}/>
                            </View>
                        )}

                        <View style={styles.iconContainer}>
                            <Image source={crypto} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.cardTitle}>Cryptocurrency</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Confirm Button */}
                {selectedOption === null && (
                    <TouchableOpacity style={styles.confirmButton}>
                        <Text style={styles.confirmButtonText}>Confirm Conversion</Text>
                    </TouchableOpacity>
                )}

                {/* QRScan or CryptoConversion Components */}
                {selectedOption === "Dollars" && <QRScan />}
                {selectedOption === "Crypto" && <CryptoConversion />}
            </ScrollView>

            {/* Bottom Navigation */}
            <BottomNav />
        </View>
    );
};

export default ConversionSelection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
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
        fontSize: 26,
        textAlign: 'center',
        marginTop: 20,
        paddingBottom: 30,
        fontFamily:"Satoshi-Black"
    },
    selectionContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        alignItems: "center",
        padding: 5,
        backgroundColor: "#f5f5f5"
    },
    card: {
        backgroundColor: 'white',
        alignItems: 'start',
        padding: 25,
        borderRadius: 22,
        shadowColor: 'rgba(0, 0, 0)',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 30,
        marginTop: -30,
        overflow: 'hidden',
        width: "48%",
        borderWidth: 1,  
        borderColor: '#EFEFEF',
        // height:170,
        minHeight: 170,
        // justifyContent: "space-between",

    },
    selectedCard: {
        borderColor: "rgb(110, 225, 124)",
        backgroundColor: "rgb(243, 253, 244)", // Light green highlight
    },
    checkmarkContainer: {
        position: "absolute",
        top: 10,
        right: 10,
        borderRadius: 10,
        padding: 2,
    },
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "rgb(237, 237, 237)",
        borderWidth: 2,
        backgroundColor: "#ffffff",
        alignSelf: "center",
        marginBottom: 20,
    },
    textContainer: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 14,
        fontFamily:"Satoshi-Bold",
        width:110,
    },
    confirmButton: {
        backgroundColor: '#e8e8e8',
        paddingVertical: 18,
        paddingHorizontal: 50,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 295, // Increased marginTop to push the button further down
        marginBottom: 20, // Added marginBottom to ensure space above BottomNav
        width: "90%",
    },
    confirmButtonText: {
        color: '#9b9b9b',
        fontSize: 18,
        textAlign: 'center',
        fontFamily:"Satoshi-Medium"
    },
});