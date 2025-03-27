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
import OtpIcon from '../assets/OtpIcon.png';
import { useNavigation } from '@react-navigation/native';

const Otp = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isFocused, setIsFocused] = useState(false);
    const [timer, setTimer] = useState(58);
    const [isTimerActive, setIsTimerActive] = useState(true);
    const [activeInputIndex, setActiveInputIndex] = useState(null);

    const otpInputs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    const handleBack = () => {
        navigation.goBack();
    };

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            otpInputs[index + 1].current.focus();
        }
    };

    const isOtpFilled = otp.every((digit) => digit !== '');

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

    const handleResend = () => {
        setTimer(58);
        setIsTimerActive(true);
    };

    return (
        <View style={styles.screenContainer}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Icon name="chevron-left" size={24} color="black" />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Image source={OtpIcon} style={styles.icon} />
                </View>

                <View style={styles.headingContainer}>
                    <Text style={styles.headingLine1}>We sent you a</Text>
                    <Text style={styles.headingLine2}>verification code</Text>
                </View>

                <Text style={styles.paragraph}>
                    Enter it to verify 00456778343
                </Text>
                <Text style={styles.paragraph}>
                    This will only be sent if your previous details were entered correctly.
                </Text>

                <Text style={styles.centeredParagraph}>Enter four-digit code</Text>

                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            style={[
                                styles.otpInput,
                                (digit !== '' || activeInputIndex === index) && styles.otpInputFilled,
                                activeInputIndex === index && styles.otpInputActive
                            ]}
                            value={digit}
                            onChangeText={(value) => handleOtpChange(index, value)}
                            keyboardType="numeric"
                            maxLength={1}
                            ref={otpInputs[index]}
                            onFocus={() => {
                                setIsFocused(true);
                                setActiveInputIndex(index);
                            }}
                            onBlur={() => {
                                setIsFocused(false);
                                setActiveInputIndex(null);
                            }}
                            selectionColor="#232323" // Cursor color
                        />
                    ))}
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            isOtpFilled ? styles.buttonActive : styles.buttonInactive
                        ]}
                        disabled={!isOtpFilled}
                        onPress={() => navigation.navigate('InviteCode')}
                    >
                        <Text style={[
                            styles.buttonText,
                            isOtpFilled ? styles.buttonTextActive : styles.buttonTextInactive
                        ]}>
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
        backgroundColor: '#f7f7f5',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    backButton: {
        marginTop: 15,
        marginBottom: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f7f7f5',
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
        color: '#232323',
        fontFamily: 'Satoshi-Black',
    },
    headingLine2: {
        fontSize: 28,
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
        borderColor: '#D8DAD8', // Changed stroke color
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 24,
        color: '#232323',
        fontFamily: 'Satoshi-Bold',
        backgroundColor: '#FFFFFF',
    },
    otpInputFilled: {
        borderColor: '#D8DAD8', // Stroke color when filled
    },
    otpInputActive: {
        borderColor: '#232323', // Active input color
    },
    buttonContainer: {
        justifyContent: 'center',
        marginTop: 20,
    },
    button: {
        padding: 15,
        borderRadius: 50,
        marginHorizontal: 10,
        minWidth: 120,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonInactive: {
        backgroundColor: '#F2F2F2', // Button color before action
    },
    buttonActive: {
        backgroundColor: '#6FE17C', // Button color after action
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Satoshi-Medium',
    },
    buttonTextInactive: {
        color: '#B9B9B9', // Button label color before action
    },
    buttonTextActive: {
        color: '#232323', // Button label color after action
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