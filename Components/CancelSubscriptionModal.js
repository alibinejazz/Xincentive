import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import SubscriptionCancelledModal from './SubscriptionCancelledModal';

const CancelSubscriptionModal = ({ visible, onClose }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <>
      {/* First Modal: Ask for Confirmation */}
      <Modal transparent={true} visible={visible} animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {/* Handlebar */}
            <View style={styles.handleBar} />

            {/* Title */}
            <Text style={styles.modalTitle}>Cancel Subscription</Text>

            {/* Subtitle */}
            <Text style={styles.modalSubtitle}>
              Do you want to cancel your subscription renewal?
            </Text>
            <Text style={styles.modalSubtitle}>
              Your access to all premium features of Xincentive will end on 01 March, 2025.
            </Text>

            {/* Confirm Cancel Button */}
            <TouchableOpacity 
              style={styles.confirmButton} 
              onPress={() => {
                onClose(); // Close this modal
                setShowConfirmation(true); // Open next modal
              }}
            >
              <Text style={styles.confirmButtonText}>Yes, Continue</Text>
            </TouchableOpacity>

            {/* Cancel Button */}
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Not Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Second Modal: Subscription Cancelled */}
      <SubscriptionCancelledModal 
        visible={showConfirmation} 
        onClose={() => setShowConfirmation(false)} 
      />
    </>
  );
};

export default CancelSubscriptionModal;

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
    marginBottom: 30,
    width: '90%',
    textAlign: 'center',
  },
  confirmButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6ee17c',
    width: '85%',
    paddingVertical: 15,
    borderRadius: 30,
    justifyContent: 'center',
    marginBottom: 15,
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  cancelButton: {
    width: '85%',
    paddingVertical: 15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#9e9e9e',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#9e9e9e',
  },
});
