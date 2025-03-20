import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import React from 'react';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window'); // Get screen height

const AppsLogin = () => {
    // Button data (image and text)
    const buttons = [
        { id: 1, image: require('../assets/Google.png'), text: 'Continue with Google' }, // Replace with your image
        { id: 2, image: require('../assets/Facebook.png'), text: 'Continue with Facebook' }, // Replace with your image
        { id: 3, image: require('../assets/Apple.png'), text: 'Continue with Apple' }, // Replace with your image
        { id: 4, image: require('../assets/Email.png'), text: 'Continue with Email' }, // Replace with your image
    ];
    const navigation = useNavigation();

    // Handle button press
    const handleButtonPress = (id) => {
        console.log(`Button ${id} pressed`);
    };

    return (
        <View style={styles.container}>
            {/* First Part: Logo (40% of the screen) */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo.png')} // Replace with your logo
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            {/* Second Part: Content (60% of the screen) */}
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {/* Heading */}
                <Text style={styles.heading}>Log In to Xincentive</Text>

                {/* Buttons */}
                {buttons.map((button) => (
                    <TouchableOpacity
                        key={button.id}
                        style={styles.button}
                        onPress={() => handleButtonPress(button.id)}
                    >
                        <Image source={button.image} style={styles.buttonImage} />
                        <Text style={styles.buttonText}>{button.text}</Text>
                    </TouchableOpacity>
                ))}

                {/* Paragraph */}
                <Text style={styles.paragraph}>
                    Register your account <Text style={{fontWeight:"bold",color:"black",fontFamily: 'Satoshi-Medium'}} onPress={() => navigation.navigate('Login')}>Sign Up</Text>
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f5',
    },
    logoContainer: {
        height: height * 0.4, // 40% of screen height
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#e8e8e8"
    },
    logo: {
        width: '60%', // Adjust logo size
        height: '60%', // Adjust logo size
    },
    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor:"#fff"
    },
    heading: {
        fontSize: 24,
        // fontWeight: 'bold',
        color: '#232323',
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'Satoshi-Black',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 25,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#F2F2F2',

    },
    buttonImage: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    buttonText: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Satoshi-Medium',
    },
    paragraph: {
        fontSize: 14,
        color: '#9E9C9A',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 40,
        fontFamily: 'Satoshi-Regular',
    },
});

export default AppsLogin;