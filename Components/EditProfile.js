import { Image, ImageBackground, KeyboardAvoidingView, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import BackIcon from '../Images/BackIcon';
import BottomNav from './BottomNav';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearBackground from "../assets/gradient.png"; // Background Image
import edit from "../assets/edit.png";
import emails from "../assets/email.png";
import phone from "../assets/phone.png";
import { useNavigation } from '@react-navigation/native';

// import user from "../assets/User.png";

const EditProfile = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState('Adeel Khan');
    const [email, setEmail] = useState('adeelkhan@gmail.com');
    const [phoneNumber, setPhoneNumber] = useState('+1336643643');
    const [isChanged, setIsChanged] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleInputChange = (setter, value) => {
        setter(value);
        setIsChanged(true);
    };

    const handleSave = () => {
        navigation.navigate('MyProfile');
        setTimeout(() => {
            setModalVisible(true);
            setTimeout(() => setModalVisible(false), 2000);
        }, 1000);
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">

                {/* Background Image for Header */}
                <ImageBackground source={LinearBackground} style={styles.headerContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        {/* <Icon name="chevron-left" size={24} color="black" /> */}
                        <BackIcon/>
                        <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.header}>Edit Profile</Text>
                    <TouchableOpacity style={styles.editButton}>
                        <Image source={edit} />
                    </TouchableOpacity>
                </ImageBackground>

                {/* Profile Info Card */}
                <View style={styles.updateProfileCard}>
                    <Text style={styles.cardText}>Update your profile details to keep your account fresh and personalized.</Text>
                </View>

                <View style={styles.inputContainer}>
                    {/* Full Name Input */}
                    <View style={styles.inputWrapper}>
                        <View style={styles.labelContainer}>
                            <Image source={require("../assets/User.png")} style={styles.inputIcon} />
                            <Text style={styles.label}>Full Name</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            value={fullName}
                            selectionColor='#232323'
                            onChangeText={(value) => handleInputChange(setFullName, value)}
                        />
                    </View>

                    {/* Email Input */}
                    <View style={styles.inputWrapper}>
                        <View style={styles.labelContainer}>
                            <Image source={emails} style={styles.inputIcon} />
                            <Text style={styles.label}>Email</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            value={email}
                            selectionColor='#232323'
                            onChangeText={(value) => handleInputChange(setEmail, value)}
                            keyboardType="email-address"
                        />
                    </View>

                    {/* Phone Number Input */}
                    <View style={styles.inputWrapper}>
                        <View style={styles.labelContainer}>
                            <Image source={phone} style={styles.inputIcon} />
                            <Text style={styles.label}>Phone Number</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            value={phoneNumber}
                            selectionColor='#232323'
                            onChangeText={(value) => handleInputChange(setPhoneNumber, value)}
                            keyboardType="phone-pad"
                        />
                    </View>
                </View>

                {/* Save Button */}
                <TouchableOpacity
                    style={[
                        styles.saveButton,
                        { backgroundColor: isChanged ? '#6ee17c' : '#f2f2f2' }
                    ]}
                    disabled={!isChanged}
                    onPress={handleSave}
                >
                    <Text style={[styles.saveButtonText, { color: isChanged ? 'black' : '#bababa' }]}>
                        Save
                    </Text>
                </TouchableOpacity>

                {/* Modal for confirmation */}
                <Modal visible={modalVisible} transparent={true} animationType="fade">
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Icon name="check-circle" size={30} color="white" />
                            <Text style={styles.modalText}> Updated Profile</Text>
                        </View>
                    </View>
                </Modal>
            </ScrollView>

            {/* Bottom Navigation */}
            <BottomNav />
        </KeyboardAvoidingView>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingBottom: 20,
    },
    headerContainer: {
        paddingTop: 70,
        paddingBottom: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        resizeMode: 'cover',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 0,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    backText: {
        fontSize: 16,
        color: "black",
        marginLeft: 5,
    },
    editButton: {

        marginBottom: 30,
    },
    header: {
        fontSize: 24,
        // fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 30,
        flex: 1,
        color: '#000000',
        fontFamily: "Satoshi-Black"//// Ensure text is visible on background
    },
    updateProfileCard: {
        backgroundColor: 'white',
        padding: 18,
        borderRadius: 15,
        marginHorizontal: 20,
        marginTop: -10,
        marginBottom: 20,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 20,
    },
    inputContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    inputWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#d9dadc',
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    inputIcon: {
        marginRight: 8,
    },
    label: {
        fontSize: 14,
        color: '#888',
        // fontWeight: '500',
        fontFamily: "Satoshi-Medium"//
    },
    input: {
        fontSize: 24,
        color: '#000',
        fontFamily: "Satoshi-Medium"//
    },
    saveButton: {
        paddingVertical: 18,
        paddingHorizontal: 50,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 180,
        bottom: 120,
        width: "90%",
    },
    saveButtonText: {
        color: 'black',
        fontSize: 16,
        fontFamily: "Satoshi-Medium",
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0)',
        marginBottom: 100,
    },
    modalContent: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 220,
        height: 55,
    },
    modalText: {
        color: 'white',
        fontSize: 16,
        // fontWeight: '500',
        fontFamily: "Satoshi-Medium",
        marginLeft: 10,
    },
    cardText: {
        color: "#808080",
        fontSize: 16,
        fontFamily: "Satoshi-Medium",
        lineHeight: 22,
        width: "90%"
    }
});