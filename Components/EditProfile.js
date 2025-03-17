import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Modal, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import BottomNav from './BottomNav';
import edit from "../assets/edit.png";
import user from "../assets/User.png";
import emails from "../assets/email.png";
import phone from "../assets/phone.png";


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
        navigation.navigate('MyProfile'); // Navigate first
        setTimeout(() => {
            setModalVisible(true); // Show modal after navigation
            setTimeout(() => setModalVisible(false), 2000); // Hide modal after 1.5s
        }, 1000); // Delay to ensure navigation happens first
    };


    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">

                <LinearGradient colors={['#faf5f5', '#f8f2f2']} style={styles.headerContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Icon name="chevron-left" size={24} color="black" />
                        <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.header}>Edit Profile</Text>
                    <TouchableOpacity style={styles.editButton}>
                        <Image source={edit} />
                    </TouchableOpacity>
                </LinearGradient>

                {/* Profile Info Card */}
                <View style={styles.updateProfileCard}>
                    <Text style={styles.cardText}>Update your profile details to keep your account fresh and personalized.</Text>
                </View>

                <View style={styles.inputContainer}>
                    {/* Full Name Input */}
                    <View style={styles.inputWrapper}>
                        <View style={styles.labelContainer}>
                            <Image source={user} style={styles.inputIcon} />
                            <Text style={styles.label}>Full Name</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            value={fullName}
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
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="fade"
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Icon name="check-circle" size={30} color="white" />
                            <Text style={styles.modalText}> Updated Profile</Text>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
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
    headerContainer: {
        paddingTop: 70,
        paddingBottom: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingBottom: 20, // Ensures space for scrolling
    },

    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
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
        padding: 7,
        marginBottom: 30,
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 30,
        flex: 1,
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
        marginBottom: 5,  // Space between label and input
    },
    inputIcon: {
        marginRight: 8,
    },
    label: {
        fontSize: 14,
        color: '#888',
        fontWeight: '500',
    },
    input: {
        fontSize: 25,
        color: '#000',
    },
    saveButton: {
        paddingVertical: 18, // Keep padding the same
        paddingHorizontal: 50, // Adjust for better responsiveness
        borderRadius: 30,
        alignSelf: 'center', // Center button horizontally
        marginTop: 180, // Add space above the button
        bottom: 120, // Place it above BottomNav
        width: "90%",
    },
    saveButtonText: {
        color: '#bababa',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center', // Ensure text is centered inside the button
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
        fontWeight: '500',
        marginLeft: 10,
    },
    cardText: {
        color: "#808080",
        fontSize: 17,
        width: "90%"
    }
});
