import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import BackIcon from '../Images/BackIcon';
import Email from '../assets/Email.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Phone from '../assets/Phone.png';
import User from '../assets/UserLogin.png';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [step, setStep] = useState(1);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [activeInput, setActiveInput] = useState(null);

    // Refs for inputs
    const fullNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    useEffect(() => {
        // Auto-focus on the correct input when step changes
        switch (step) {
            case 1:
                fullNameRef.current?.focus();
                setActiveInput('fullName');
                break;
            case 2:
                emailRef.current?.focus();
                setActiveInput('email');
                break;
            case 3:
                phoneRef.current?.focus();
                setActiveInput('phone');
                break;
            default:
                break;
        }
    }, [step]); // Run effect when step changes

    const handleContinue = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            navigation.navigate('InviteCode');
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            navigation.goBack();
        }
    };

    const isInputFilled = () => {
        switch (step) {
            case 1: return fullName.trim() !== '';
            case 2: return email.trim() !== '';
            case 3: return phoneNumber.trim() !== '';
            default: return false;
        }
    };

    const getStepData = () => {
        switch (step) {
            case 1: return {
                heading: "What's your full name?",
                image: User,
                label: 'Full Name',
                placeholder: 'Enter your full name',
                value: fullName,
                onChangeText: setFullName,
                key: 'fullName',
                ref: fullNameRef
            };
            case 2: return {
                heading: "What's your email address?",
                image: Email,
                label: 'Email Address',
                placeholder: 'Enter your email address',
                value: email,
                onChangeText: setEmail,
                key: 'email',
                ref: emailRef
            };
            case 3: return {
                heading: "What's your phone number?",
                image: Phone,
                label: 'Phone Number',
                placeholder: 'Enter your phone number',
                value: phoneNumber,
                onChangeText: setPhoneNumber,
                key: 'phone',
                ref: phoneRef
            };
            default: return {};
        }
    };

    const stepData = getStepData();

    return (
        <View style={styles.container}>

    <TouchableOpacity style={styles.backButton} onPress={handleBack}>
    <View style={styles.backIconContainer}>
        <BackIcon />
    </View>
    <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>

            <View style={styles.contentContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>{stepData.heading}</Text>
                </View>

                <Text style={styles.paragraph}>
                    Fill required* inputs and submit form to register for an app account.
                </Text>

                <View style={[
                    styles.inputContainer,
                    activeInput === stepData.key ? styles.inputContainerFocused : { borderColor: '#D8DADC' }
                ]}>
                    <View style={styles.inputHeader}>
                        <Image source={stepData.image} style={styles.coinIcon} />
                        <Text style={[
                            styles.inputLabel,
                            stepData.value && styles.filledInputLabel
                        ]}>
                            {stepData.label} <Text style={styles.mandatory}>*</Text>
                        </Text>
                    </View>

                    <TextInput
                        ref={stepData.ref}
                        style={styles.input}
                        placeholder={stepData.placeholder}
                        placeholderTextColor="#9E9E9E"
                        value={stepData.value}
                        onChangeText={stepData.onChangeText}
                        keyboardType={step === 2 ? 'email-address' : step === 3 ? 'phone-pad' : 'default'}
                        onFocus={() => setActiveInput(stepData.key)}
                        onBlur={() => setActiveInput(null)}
                        selectionColor="#232322"
                    />
                </View>

                <TouchableOpacity
                    style={[
                        styles.continueButton,
                        isInputFilled() && styles.continueButtonActive,
                    ]}
                    disabled={!isInputFilled()}
                    onPress={handleContinue}
                >
                    <Text style={[
                        styles.continueButtonText,
                        isInputFilled() && styles.continueButtonTextActive,
                    ]}>
                        {step < 3 ? 'Continue' : 'Submit'}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.centeredText}>
                    Already have an account?{' '}
                    <Text 
                        style={styles.loginLink} 
                        onPress={() => navigation.navigate('AppsLogin')}
                    >
                        Log In
                    </Text>
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
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        // marginLeft: 8, // Add some left margin if needed
      },
      backIconContainer: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 0, 
        marginLeft:4// Space between icon and text
      },
      backText: {
        fontSize: 14,
        color: 'black',
        marginLeft: 4, // Adjust as needed
        fontFamily: "Satoshi-Medium",
        includeFontPadding: false, // This helps with vertical alignment
        textAlignVertical: 'center',
      },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 28,
        fontFamily: "Satoshi-Black",
        marginBottom: 10,
        color: '#232323',
    },
    headingContainer: {
        width: 250,
    },
    paragraph: {
        fontSize: 16,
        color: '#9d9c9a',
        marginBottom: 20,
        fontFamily: "Satoshi-Regular"
    },
    inputContainer: {
        marginBottom: 40,
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
    },
    inputContainerFocused: {
        borderColor: '#232322',
    },
    inputHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    coinIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 10,
    },
    inputLabel: {
        fontSize: 14,
        color: '#9E9E9E',
        fontFamily: "Satoshi-Regular",
        includeFontPadding: false,
        textAlignVertical: 'center',
    },
    filledInputLabel: {
        color: '#232322',
    },
    mandatory: {
        color: 'red',
    },
    input: {
        fontSize: 24,
        fontFamily: "Satoshi-Medium",
        color: '#232322',
        padding: 0,
        margin: 0,
        includeFontPadding: false,
        textAlignVertical: 'center',
        minHeight: 30, // Added minimum height to ensure placeholder is visible
    },
    continueButton: {
        backgroundColor: '#F2F2F2',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
    },
    continueButtonActive: {
        backgroundColor: '#6FE17C',
    },
    continueButtonText: {
        color: '#B8BBBA',
        fontSize: 16,
        fontFamily: "Satoshi-Bold"
    },
    continueButtonTextActive: {
        color: '#232322',
    },
    centeredText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#888',
        fontFamily: "Satoshi-Regular",
        fontSize: 14
    },
    loginLink: {
        color: 'black',
        fontFamily: "Satoshi-Medium",
        fontSize: 14
    },
});

export default Login;