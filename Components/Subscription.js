import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import BottomNav from './BottomNav';
import CancelSubscriptionModal from './CancelSubscriptionModal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearBackground from "../assets/gradient.png"; // Background Image
import cancel from "../assets/cancel.png";
import diamond from "../assets/diamond.png";
import { useNavigation } from '@react-navigation/native';

const Subscription = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">

                {/* Background Image for Header */}
                <ImageBackground source={LinearBackground} style={styles.headerContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Icon name="chevron-left" size={24} color="black" />
                        <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.header}>My Subscription</Text>
                </ImageBackground>

                {/* Subscription Info Cards */}
                <View style={styles.card}>
                    <View>
                        <Text style={styles.title}>Renewal date</Text>
                        <Text style={styles.profileText}>09 January 2025</Text>
                    </View>
                    <Text style={styles.activeText}>Active</Text>
                </View>

                <View style={styles.card}>
                    <View>
                        <Text style={styles.title}>Price</Text>
                        <Text style={styles.profileText}>$9.99 per month</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View>
                        <Text style={styles.title}>Plan duration</Text>
                        <Text style={styles.profileText}>Monthly plan</Text>
                    </View>
                    <TouchableOpacity style={styles.upgradeButton}>
                        <Image source={diamond} />
                        <Text style={styles.upgradeText}> Upgrade</Text>
                    </TouchableOpacity>
                </View>

                {/* Cancel Subscription Button */}
                <TouchableOpacity style={styles.cardcancel} onPress={() => setModalVisible(true)}>
                    <View style={styles.row}>
                        <Image source={cancel} style={{ marginBottom: 10 }} />
                        <Text style={styles.title}>Cancel subscription</Text>
                    </View>
                    <Icon name="chevron-right" color="black" size={24} />
                </TouchableOpacity>
            </ScrollView>

            {/* Bottom Navigation */}
            <BottomNav />

            {/* Cancel Subscription Modal */}
            <CancelSubscriptionModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onRemove={() => setModalVisible(false)}
            />
        </View>
    );
};

export default Subscription;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingBottom: 20,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 50,
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
        left: 0,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        fontSize: 16,
        color: "black",
        marginLeft: 5,
    },
    header: {
        fontSize: 24,
        // fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 30,
        flex: 1,
        color: '#000000', 
        fontFamily:"Satoshi-Black"// Ensures visibility on the background
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 24,
        paddingTop: 28,
        borderRadius: 15,
        marginHorizontal: 20,
        marginBottom: 40,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 30,
        marginTop: -13,
    },
    cardcancel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 24,
        paddingTop: 28,
        borderRadius: 15,
        marginHorizontal: 20,
        shadowColor: 'rgba(0, 0, 0, 0.14)',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 20,
        marginTop: 20,
        borderWidth: 0.01,
    },
    title: {
        color: 'black',
        fontSize: 16,
        // fontWeight: '500',
        marginBottom: 10,
        fontFamily:"Satoshi-Medium"//
    },
    profileText: {
        fontSize: 14.11,
        color: 'black',
        fontFamily:"Satoshi-Regular"//
    },
    activeText: {
        color: '#6bde79',
        fontSize: 16,
        fontFamily:"Satoshi-Medium"//
    },
    upgradeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6ee17c',
        width: '35%',
        borderRadius: 40,
        padding: 8,
        borderWidth: 1.5,
        borderColor: '#fffe6f',
        justifyContent: 'center',
        height: '80%',
    },
    upgradeText: {
        fontSize: 13.14,
        fontFamily:"Satoshi-Medium"//
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
});
