import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';

import Email from '../assets/Email.png'; // Replace with your image
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const InviteCode = () => {
    const navigation = useNavigation();
    const [inputValue, setInputValue] = useState(''); // State for text input
    const [isFocused, setIsFocused] = useState(false); // Track input focus state

    // Handle back button press
    const handleBack = () => {
        navigation.goBack();
    };

    // Handle skip button press
    const handleSkip = () => {
        // Add logic for skip action
        console.log('Skip button pressed');
    };

    // Handle continue button press
    const handleContinue = () => {
        // Add logic for continue action
        console.log('Continue button pressed');
    };

    return (
        <View style={styles.container}>
            {/* Header with Back and Skip Buttons */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                    <Icon name="chevron-left" size={24} color="black" />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
            </View>

            {/* Heading */}
            <View style={styles.headingContainer}>
                <Text style={styles.headingLine1}>What’s your</Text>
                <Text style={styles.headingLine2}>Do you have an invite</Text>
                <Text style={styles.headingLine3}>code?</Text>
            </View>

            {/* Small Paragraph */}
            <Text style={styles.paragraph}>
                If not, that's OK-you can skip ahead
            </Text>

            {/* Input Container */}
            <View
                style={[
                    styles.inputContainer,
                    (isFocused || inputValue !== '') && styles.inputContainerFocused, // Apply focused style
                ]}
            >
                <View style={styles.inputHeader}>
                    <Image source={Email} style={styles.coinIcon} /> {/* Replace with your icon */}
                    <Text style={styles.inputLabel}>
                        Invite Code <Text style={styles.mandatory}>*</Text>
                    </Text>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="ABC123"
                    value={inputValue}
                    onChangeText={setInputValue}
                    onFocus={() => setIsFocused(true)} // Set focus state to true
                    onBlur={() => setIsFocused(false)} // Set focus state to false
                />
            </View>

            {/* Continue Button */}
            <TouchableOpacity
                style={[
                    styles.continueButton,
                    inputValue !== '' && styles.continueButtonFilled, // Apply filled style
                ]}
                onPress={handleContinue}
                disabled={inputValue === ''}
            >
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f5',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 20,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        fontSize: 16,
        color: 'black',
        marginLeft: 5,
    },
    skipButton: {
        padding: 10,
    },
    skipText: {
        fontSize: 16,
        color: '#9e9e9e',
        fontWeight: 'bold',
    },
    headingContainer: {
        marginBottom: 10,
    },
    headingLine1: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#232323',
    },
    headingLine2: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#232323',
    },
    headingLine3: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#232323',
    },
    paragraph: {
        fontSize: 16,
        color: '#9E9C9A',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 40,
        borderWidth: 3,
        borderColor: '#F2F2F2',
        padding: 10,
        borderRadius: 10,
    },
    inputContainerFocused: {
        borderColor: '#40838B', // Change border color when focused or filled
    },
    inputHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    coinIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    inputLabel: {
        fontSize: 16,
        color: '#9E9E9E',
        marginBottom: 5,
        marginHorizontal: 10,
    },
    mandatory: {
        color: 'red',
    },
    input: {
        borderRadius: 5,
        padding: 10,
        fontSize: 24,
    },
    continueButton: {
        backgroundColor: '#6fe17c',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
    },
    continueButtonFilled: {
        backgroundColor: '#40838B', // Change button color when input is filled
    },
    continueButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default InviteCode;