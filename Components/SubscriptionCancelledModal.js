import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const SubscriptionCancelledModal = ({ visible, onClose }) => {
    return (
        <Modal transparent={true} visible={visible} animationType="slide">
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    {/* Handlebar */}
                    <View style={styles.handleBar} />

                    {/* Title */}
                    <Text style={styles.modalTitle}>Cancel Subscription</Text>

                    {/* Subtitle */}
                    <Text style={styles.modalSubtitle}>
                        We're sorry to see you go!
                    </Text>
                    <Text style={styles.modalSubtitle}>
                        If you'd like to come back in the future.
                    </Text>

                    {/* Done Button */}
                    <TouchableOpacity style={styles.doneButton} onPress={onClose}>
                        <Text style={styles.doneButtonText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default SubscriptionCancelledModal;

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalContainer: {
        backgroundColor: 'white',
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: 20,
        paddingHorizontal: 25,
        alignItems: 'center',
    },
    handleBar: {
        width: 50,
        height: 7,
        backgroundColor: '#9e9e9e',
        borderRadius: 5,
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 25,
        fontWeight: '500',
        marginBottom: 15,
        textAlign: 'center',
        width: '80%',
        marginTop:15,
    },
    modalSubtitle: {
        fontSize: 18,
        color: '#9f9f9f',
        marginBottom: 20,
        width: '90%',
        textAlign: 'center',
    },
    doneButton: {
        width: '85%',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: '#6ee17c',
        alignItems: 'center',
        marginTop:20,
    },
    doneButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
    },
});
