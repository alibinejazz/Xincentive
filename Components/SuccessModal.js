import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import success from "../assets/success.png"

const SuccessModal = ({ visible, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.modalBackground}>
        {/* Close Button Outside the Modal */}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Icon name="close" size={30} color="black" />
        </TouchableOpacity>

        {/* Modal Box */}
        <View style={styles.modalContainer}>
          {/* Success Icon */}
          <View style={styles.successIconContainer}>
            <View style={styles.outerCircle}>
              <View style={styles.successIcon}>
                <Image source={success}/>
                              </View>
            </View>
          </View>

          {/* Success Text */}
          <Text style={styles.modalTitle}>Payment method added successfully</Text>
          <Text style={styles.modalSubtitle}>
            Your payment method has been linked to your account and you can now use it to buy DigiCoinX.
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

export default SuccessModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 25,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '16.5%',
    right: '7%',
    backgroundColor: 'white',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Shadow effect for Android
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 }, // Shadow effect for iOS
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
  modalTitle: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
    width: "70%",
  },
  modalSubtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#9f9f9f',
    marginBottom: 40,
    width: "90%",
  },
  doneButton: {
    backgroundColor: '#6ee17c',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems:"center",
    width:"90%",
    marginBottom:10
  },
  doneButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
});
