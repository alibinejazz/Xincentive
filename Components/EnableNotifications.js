import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import NotificationIcon from '../assets/NotificationsIcon.png'; // Replace with your icon
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window'); // Get screen height

const EnableNotifications = () => {
    const navigation = useNavigation();
    // Handle back button press
    const handleBack = () => {
        navigation.goBack();
    };

    // Handle skip button press
    const handleSkip = () => {
        // Add logic for skip action
        console.log('Skip button pressed');
    };

    // Handle enable notifications button press
    const handleEnable = () => {
        // Add logic for enabling notifications
        console.log('Enable Notifications button pressed');
    };

    // Handle not now button press
    const handleNotNow = () => {
        // Add logic for not now action
        console.log('Not Now button pressed');
    };

    return (
        <>
        <View style={styles.screenContainer}>
        <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                    <Icon name="chevron-left" size={24} color="black" />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
            </View>
        
        <View style={styles.container}>

            {/* Heading */}
            <View style={styles.headingContainer}>
                <Text style={styles.headingLine1}>Enable</Text>
                <Text style={styles.headingLine2}>notifications</Text>
            </View>

            {/* Two Paragraphs */}
            <Text style={styles.paragraph}>
            This will allow us to send you useful notifications and activity.
            </Text>
            <Text style={styles.paragraph}>
                You can change this later in your settings.
            </Text>

            {/* Centered Icon */}
            <View style={styles.iconContainer}>
                <Image
                    source={NotificationIcon}
                    style={styles.icon}
                    resizeMode="contain" // Ensure the icon fits within the container
                />
            </View>

            {/* Two Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.enableButton} onPress={() => navigation.navigate('Market')}>
                    <Text style={styles.enableButtonText}>Yes, Notify Me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notNowButton} onPress={() => navigation.navigate('Market')}>
                    <Text style={styles.notNowButtonText}>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#f7f7f5', // Background color for the entire screen
    },
    container: {
        flex: 1,
        paddingHorizontal: 20, // Consistent horizontal padding
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 20,
        padding:10
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        fontSize: 14,
        color: 'black',
        marginLeft: 5,
        fontFamily:"Satoshi-Medium"
    },
    skipButton: {
        padding: 10,
    },
    skipText: {
        fontSize: 14,
        color: '#9e9e9e',
        fontFamily:"Satoshi-Medium"
    },
    headingContainer: {
        marginBottom: 20,
    },
    headingLine1: {
        fontSize: 28,
        color: '#232323',
        fontFamily:"Satoshi-Black"
    },
    headingLine2: {
        fontSize: 28,
        color: '#232323',
        fontFamily:"Satoshi-Black"
    },
    paragraph: {
        fontSize: 16,
        color: '#9E9C9A',
        marginBottom: 10,
        fontFamily:"Satoshi-Medium"
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.3, // Use 30% of screen height for the icon container
    },
    icon: {
        width: 150, // Take up full width of the container
        height: 180, // Take up full height of the container
        resizeMode: 'contain', // Ensure the icon fits within the container
    },
    buttonContainer: {
        marginBottom: 20,
    },
    enableButton: {
        backgroundColor: '#6fe17c',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 10,
    },
    enableButtonText: {
        color: 'black',
        fontSize: 16,
        fontFamily:"Satoshi-Medium"
    },
    notNowButton: {
        backgroundColor: '#f7f7f5',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',


    },
    notNowButtonText: {
        color: '#9b9b9b',
        fontSize: 14,
        fontFamily:"Satoshi-Medium"
    },
});

export default EnableNotifications;