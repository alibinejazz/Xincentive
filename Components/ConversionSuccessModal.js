import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import success from "../assets/success.png"

const ConversionSuccessModal = ({ visible, onClose }) => {
    return (
        <Modal transparent={true} visible={visible} animationType="fade">
            <View style={styles.overlay}>
                {/* Close Button */}
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Icon name="close" size={30} color="black" />
                </TouchableOpacity>

                {/* Modal Box */}
                <View style={styles.modalBox}>
                    {/* Success Icon */}
                    <View style={styles.successIconContainer}>
                        <View style={styles.outerCircle}>
                            <View style={styles.successIcon}>
                                <Image source={success}/>
                            </View>
                        </View>
                    </View>

                    {/* Success Text */}
                    <Text style={styles.successText}>Successfully converted</Text>

                    {/* Ok Button */}
                    <TouchableOpacity style={styles.okButton} onPress={onClose}>
                        <Text style={styles.okButtonText}>Ok</Text>
                    </TouchableOpacity>

                    {/* Cancel Button */}
                    <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ConversionSuccessModal;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        width: '85%',
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 25,
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: '21%',
        right: '8%',
        backgroundColor: 'white',
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    successIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    outerCircle: {
        width: 120, // Ensuring a perfect circle
        height: 120, // Same as width
        backgroundColor: '#ebfef3',
        borderRadius: 60, // Half of width/height
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    successIcon: {
        width: 80, // Ensuring a perfect circle
        height: 80, // Same as width
        backgroundColor: '#d2fadf',
        borderRadius: 40, // Half of width/height
        alignItems: 'center',
        justifyContent: 'center',
    },

    successText: {
        fontSize: 26,
        textAlign: 'center',
        marginBottom: 50,
        fontFamily:"Satoshi-Medium"
    },
    okButton: {
        backgroundColor: '#6ee17c',
        paddingVertical: 15,
        borderRadius: 30,
        width: '90%',
        alignItems: 'center',
        marginBottom: 10,
    },
    okButtonText: {
        color: 'black',
        fontSize: 16,
        fontFamily:"Satoshi-Medium"
        },
    cancelButton: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        borderRadius: 30,
        width: '90%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#b2b6b7',
    },
    cancelButtonText: {
        color: '#b2b6b7',
        fontSize: 16,
        fontFamily:"Satoshi-Medium"
        },
});
