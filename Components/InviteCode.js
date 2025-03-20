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
        fontSize: 34,
        fontWeight: 'bold',
        color: '#232323',
    },
    headingLine2: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#232323',
    },
    headingLine3: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#232323',
    },
    paragraph: {
        fontSize: 20,
        color: '#9E9C9A',
        marginBottom: 20,
    },
    input: {
        borderWidth: 2,
        borderColor: '#F2F2F2',
        borderRadius: 10,
        padding: 15,
        fontSize: 34,
        color: 'black',
        marginBottom: 20,
    },
    inputFilled: {
        borderColor: '#40838B', // Change border color when input is filled
    },
    continueButton: {
        backgroundColor: '#f2f2f2',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom:20
    },
    continueButtonFilled: {
        backgroundColor: '#6fe17c', // Change button color when input is filled
    },
    continueButtonText: {
        color:"#b9b9b9",
        fontSize: 16,
        fontWeight: 'bold',
    },
    continueButtonTextFilled:{
        color:"black"
    },
    skipButtonText:{
        alignSelf:"center",
        color:"#b9b9b9"
    }
});

export default InviteCode;