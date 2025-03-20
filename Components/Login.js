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
import Phone from '../assets/Phone.png'; // Replace with your image
import User from '../assets/UserLogin.png'; // Replace with your image
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [step, setStep] = useState(1); // Track current step
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isFocused, setIsFocused] = useState(false); // Track input focus state

    // Handle continue button press
    const handleContinue = () => {
        if (step < 3) {
            setStep(step + 1); // Move to the next step
        } else {
            console.log('Form submitted:', { fullName, email, phoneNumber });
            navigation.navigate('InviteCode'); // Navigate to the next screen
        }
    };
    

    // Handle back button press
    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1); // Go back to the previous step
        } else {
            navigation.goBack(); // Navigate back to the previous screen
        }
    };

    // Check if the current input is filled
    const isInputFilled = () => {
        switch (step) {
            case 1:
                return fullName.trim() !== '';
            case 2:
                return email.trim() !== '';
            case 3:
                return phoneNumber.trim() !== '';
            default:
                return false;
        }
    };

    // Get the current step's data
    const getStepData = () => {
        switch (step) {
            case 1:
                return {
                    heading: "What's your full name?",
                    image: User,
                    label: 'Full Name',
                    placeholder: 'Enter your full name',
                    value: fullName,
                    onChangeText: setFullName,
                };
            case 2:
                return {
                    heading: "What's your email address?",
                    image: Email,
                    label: 'Email Address',
                    placeholder: 'Enter your email address',
                    value: email,
                    onChangeText: setEmail,
                };
            case 3:
                return {
                    heading: "What's your phone number?",
                    image: Phone,
                    label: 'Phone Number',
                    placeholder: 'Enter your phone number',
                    value: phoneNumber,
                    onChangeText: setPhoneNumber,
                };
            default:
                return {};
        }
    };

    const stepData = getStepData();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Icon name="chevron-left" size={24} color="black" />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <View style={styles.contentContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>{stepData.heading}</Text>
                </View>

                <Text style={styles.paragraph}>
                    Fill required* inputs and submit form to register for an app account.
                </Text>

                <View
                    style={[
                        styles.inputContainer,
                        isFocused && styles.inputContainerFocused, // Apply focused style
                    ]}
                >
                    <View style={styles.inputHeader}>
                        <Image source={stepData.image} style={styles.coinIcon} />
                        <Text style={styles.inputLabel}>
                            {stepData.label} <Text style={styles.mandatory}>*</Text>
                        </Text>
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder={stepData.placeholder}
                        value={stepData.value}
                        onChangeText={stepData.onChangeText}
                        keyboardType={step === 2 ? 'email-address' : step === 3 ? 'phone-pad' : 'default'}
                        onFocus={() => setIsFocused(true)} // Set focus state to true
                        onBlur={() => setIsFocused(false)} // Set focus state to false
                    />
                </View>

                <TouchableOpacity
                    style={[
                        styles.continueButton,
                        isInputFilled() && styles.continueButtonActive,
                    ]}
                    disabled={!isInputFilled()}
                    onPress={step < 3 ? handleContinue : () => {handleContinue();}} // Navigate if step is 3
                >
                    <Text
                        style={[
                            styles.continueButtonText,
                            isInputFilled() && styles.continueButtonTextActive,
                        ]}
                    >
                        {step < 3 ? 'Continue' : 'Submit'}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.centeredText}>
                    Already have an account?{' '}
                    <Text style={{ color: 'black', fontWeight: 'bold' }} onPress={() => navigation.navigate('AppsLogin')}>Log In</Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f5',
    },
    backButton: {
        marginTop: 15,
        marginBottom: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        fontSize: 16,
        color: 'black',
        marginLeft: 5,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#232323',
    },
    headingContainer: {
        width: 250,
    },
    paragraph: {
        fontSize: 18,
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
        borderColor: '#40838B', // Change border color when focused
    },
    inputHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
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
        backgroundColor: '#F2F2F2',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
    },
    continueButtonActive: {
        backgroundColor: '#4CAF50', // Green color when active
    },
    continueButtonText: {
        color: '#B8BBBA',
        fontSize: 16,
        fontWeight: 'bold',
    },
    continueButtonTextActive: {
        color: '#FFFFFF', // White text when active
    },
    centeredText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#888',
    },
});

export default Login;