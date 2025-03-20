import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const InviteCode = () => {
    const navigation = useNavigation();
    const [inputValue, setInputValue] = useState(''); // State for text input

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
            {/* Header with Back and Skip Buttons */}
            

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

            {/* Text Input */}
            <TextInput
                style={[
                    styles.input,
                    inputValue !== '' && styles.inputFilled, // Apply filled style
                ]}
                placeholder="ABC123"
                value={inputValue}
                onChangeText={setInputValue}
            />

            {/* Continue Button */}
            <TouchableOpacity 
                style={[
                    styles.continueButton,
                    inputValue !== '' && styles.continueButtonFilled, // Apply filled style
                ]}
                onPress={() => navigation.navigate('EnableNotifications')}
                disabled={inputValue === ''}
            >
                <Text style={[styles.continueButtonText,
                    inputValue !== '' && styles.continueButtonTextFilled, 
                ]}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('EnableNotifications')}
            >
                <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
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
        fontFamily: 'Satoshi-Medium',
    },
    skipButton: {
        padding: 10,
    },
    skipText: {
        fontSize: 14,
        color: '#9e9e9e',
        fontFamily: 'Satoshi-Medium',
    },
    headingContainer: {
        marginBottom: 10,
    },
    headingLine1: {
        fontSize: 28,
        color: '#232323',
        fontFamily: 'Satoshi-Black',
    },
    headingLine2: {
        fontSize: 28,
        fontFamily: 'Satoshi-Black',
        color: '#232323',
    },
    headingLine3: {
        fontSize: 28,
        color: '#232323',
        fontFamily: 'Satoshi-Black',
    },
    paragraph: {
        fontSize: 16,
        color: '#9E9C9A',
        marginBottom: 20,
        fontFamily: 'Satoshi-Regular',
    },
    input: {
        borderWidth: 1,
        borderColor: '#F2F2F2',
        borderRadius: 10,
        padding: 15,
        fontSize: 24,
        height:90,
        color: 'black',
        marginBottom: 20,
        fontFamily: 'Satoshi-Medium',
    },
    inputFilled: {
        borderColor: '#40838B', // Change border color when input is filled
    },
    continueButton: {
        backgroundColor: '#f2f2f2',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 20,
    },
    continueButtonFilled: {
        backgroundColor: '#6fe17c', // Change button color when input is filled
    },
    continueButtonText: {
        color: '#b9b9b9',
        fontSize: 16,
        fontFamily: 'Satoshi-Medium',
    },
    continueButtonTextFilled: {
        color: 'black',
    },
    skipButtonText: {
        alignSelf: 'center',
        color: '#b9b9b9',
        fontSize:14,
        fontFamily: 'Satoshi-Medium',
    },
});

export default InviteCode;