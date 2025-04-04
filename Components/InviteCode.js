import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import BackIcon from '../Images/BackIcon';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const InviteCode = () => {
    const navigation = useNavigation();
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false); // Track input focus

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.screenContainer}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
    <View style={styles.backIconContainer}>
        <BackIcon />
    </View>
    <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>

            <View style={styles.container}>
                {/* Heading */}
                <View style={styles.headingContainer}>
                    <Text style={styles.headingLine1}>What's your</Text>
                    <Text style={styles.headingLine2}>Do you have an invite</Text>
                    <Text style={styles.headingLine3}>code?</Text>
                </View>

                {/* Small Paragraph */}
                <Text style={styles.paragraph}>
                    If not, that's OK - you can skip ahead
                </Text>

                {/* Input Container */}
                <View style={[
                    styles.inputContainer,
                    isFocused ? styles.inputContainerFocused : { borderColor: '#D8DADC' }
                ]}>
                    <TextInput
                        style={styles.input}
                        placeholder="ABC123"
                        placeholderTextColor="#9E9C9A"
                        value={inputValue}
                        onChangeText={setInputValue}
                        selectionColor="#232323"
                        cursorColor="#232323"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </View>

                {/* Continue Button */}
                <TouchableOpacity 
                    style={[
                        styles.continueButton,
                        inputValue !== '' && styles.continueButtonFilled,
                    ]}
                    onPress={() => navigation.navigate('EnableNotifications')}
                    disabled={inputValue === ''}
                >
                    <Text style={[
                        styles.continueButtonText,
                        inputValue !== '' && styles.continueButtonTextFilled,
                    ]}>
                        Continue
                    </Text>
                </TouchableOpacity>

                {/* Skip Button */}
                <TouchableOpacity onPress={() => navigation.navigate('EnableNotifications')}>
                    <Text style={styles.skipButtonText}>Skip</Text>
                </TouchableOpacity>
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
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 20,
        padding: 10
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
    headingContainer: {
        marginBottom: 10,
    },
    headingLine1: {
        fontSize: 28,
        color: '#232322',
        fontFamily: 'Satoshi-Black',
    },
    headingLine2: {
        fontSize: 28,
        fontFamily: 'Satoshi-Black',
        color: '#232322',
    },
    headingLine3: {
        fontSize: 28,
        color: '#232322',
        fontFamily: 'Satoshi-Black',
    },
    paragraph: {
        fontSize: 16,
        color: '#9E9C9A',
        marginBottom: 20,
        fontFamily: 'Satoshi-Regular',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#F2F2F2',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        height:90,
        marginBottom: 20,
        justifyContent:"center"
        // backgroundColor: '#fff',
    },
    inputContainerFocused: {
        borderColor: '#232322',
    },
    input: {
        fontSize: 24,
        color: '#232322',
        fontFamily: 'Satoshi-Medium',
        height: 50,
    },
    continueButton: {
        backgroundColor: '#f2f2f2',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 20,
    },
    continueButtonFilled: {
        backgroundColor: '#6fe17c',
    },
    continueButtonText: {
        color: '#b9b9b9',
        fontSize: 16,
        fontFamily: 'Satoshi-Medium',
    },
    continueButtonTextFilled: {
        color: '#232322',
    },
    skipButtonText: {
        alignSelf: 'center',
        color: '#b9b9b9',
        fontSize: 14,
        fontFamily: 'Satoshi-Medium',
    },
});

export default InviteCode;
