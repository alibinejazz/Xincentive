import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import OtpIcon from '../assets/OtpIcon.png'; // Replace with your OTP icon
import { useNavigation } from '@react-navigation/native';

const Otp = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState(['', '', '', '']); // State for OTP digits
    const [isFocused, setIsFocused] = useState(false); // Track focus state for OTP inputs
    const [timer, setTimer] = useState(58); // Countdown timer for resend
    const [isTimerActive, setIsTimerActive] = useState(true); // Track if the timer is active

    // Create refs for OTP input boxes
    const otpInputs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    // Handle back button press
    const handleBack = () => {
        navigation.goBack();
    };

    // Handle OTP input change
    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus to the next input
        if (value && index < 3) {
            otpInputs[index + 1].current.focus(); // Use .current to access the ref
        }
    };

    // Check if all OTP boxes are filled
    const isOtpFilled = otp.every((digit) => digit !== '');

    // Countdown timer for resend
    useEffect(() => {
        let interval;
        if (isTimerActive && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsTimerActive(false);
        }
        return () => clearInterval(interval);
    }, [timer, isTimerActive]);

    // Handle resend button press
    const handleResend = () => {
        setTimer(58); // Reset timer
        setIsTimerActive(true); // Restart timer
        // Add logic to resend OTP here
    };

    return (
        <View style={styles.screenContainer}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Icon name="chevron-left" size={24} color="black" />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            {/* Main Content */}
            <View style={styles.container}>
                {/* Centered Icon */}
                <View style={styles.iconContainer}>
                    <Image source={OtpIcon} style={styles.icon} />
                </View>

                {/* Heading */}
                <View style={styles.headingContainer}>
                    <Text style={styles.headingLine1}>We sent you a</Text>
                    <Text style={styles.headingLine2}>verification code</Text>
                </View>

                {/* Two Paragraphs */}
                <Text style={styles.paragraph}>
                    Enter it to verify 00456778343
                </Text>
                <Text style={styles.paragraph}>
                    This will only be sent if your previous details were entered correctly.
                </Text>

                {/* Centered Paragraph */}
                <Text style={styles.centeredParagraph}>Enter four-digit code</Text>

                {/* OTP Input Boxes */}
                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            style={[
                                styles.otpInput,
                                (digit !== '' || isFocused) && styles.otpInputFocused, // Apply focused style
                            ]}
                            value={digit}
                            onChangeText={(value) => handleOtpChange(index, value)}
                            keyboardType="numeric"
                            maxLength={1}
                            ref={otpInputs[index]} // Assign ref to each TextInput
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                    ))}
                </View>

                {/* Two Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            !isOtpFilled && styles.buttonDisabled, // Disable button if OTP is not filled
                        ]}
                        disabled={!isOtpFilled}
                        onPress={() => navigation.navigate('InviteCode')}
                    >
                        <Text style={styles.buttonText}>
                            {isOtpFilled ? 'Verify' : 'Continue'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonResend}
                        onPress={handleResend}
                        disabled={isTimerActive}
                    >
                        <Text style={styles.buttonTextResend}>
                            {isTimerActive ? (
                                <>
                                    Resend code in <Text style={styles.timerText}>00:{timer < 10 ? `0${timer}` : timer}</Text>
                                </>
                            ) : (
                                'Resend'
                            )}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
    backButton: {
        marginTop: 15,
        marginBottom: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f7f7f5', // Ensure back button has the same background color
    },
    backText: {
        fontSize: 14,
        color: 'black',
        marginLeft: 5,
        fontFamily: 'Satoshi-Medium',
    },
    iconContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        height: 88,
        width: 88,
        backgroundColor: '#E8E8E8',
        borderRadius: 25,
    },
    icon: {
        width: 55,
        height: 55,
    },
    headingContainer: {
        marginBottom: 10,
    },
    headingLine1: {
        fontSize: 28,
        // fontWeight: 'bold',
        color: '#232323',
        fontFamily: 'Satoshi-Black',
    },
    headingLine2: {
        fontSize: 28,
        // fontWeight: 'bold',
        color: '#232323',
        fontFamily: 'Satoshi-Black',
    },
    paragraph: {
        fontSize: 16,
        color: '#9E9C9A',
        marginBottom: 10,
        fontFamily: 'Satoshi-Regular',
    },
    centeredParagraph: {
        textAlign: 'center',
        fontSize: 16,
        color: '#9E9C9A',
        marginVertical: 10,
        fontFamily: 'Satoshi-Regular',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    otpInput: {
        width: 77,
        height: 77,
        borderWidth: 2,
        borderColor: '#F2F2F2',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 24,
        color: '#232323',
        fontFamily: 'Satoshi-Bold',
    },
    otpInputFocused: {
        borderColor: '#40838B', // Change border color when focused or filled
    },
    buttonContainer: {
        justifyContent: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#6fe17c',
        padding: 15,
        borderRadius: 50,
        marginHorizontal: 10,
        minWidth: 120,
        alignItems: 'center',
        marginBottom: 20,

    },
    buttonDisabled: {
        backgroundColor: '#6fe17c', // Disabled button color
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        // fontWeight: 600,
        fontFamily: 'Satoshi-Medium',
    },
    buttonResend: {
        backgroundColor: '#f7f7f5',
        alignItems: 'center',
    },
    buttonTextResend: {
        color: '#9b9b9b',
        fontSize: 16,
        fontFamily: 'Satoshi-Medium',
    },
    timerText: {
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Satoshi-Bold',
    },
});

export default Otp;