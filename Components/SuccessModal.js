import { Dimensions, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import success from '../assets/success.png';

const { width, height } = Dimensions.get('window');

const SuccessModal = ({ visible, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>

        {/* Modal Box Wrapper */}
        <View style={styles.modalBoxContainer}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={24} color="black" />
          </TouchableOpacity>

          {/* Main Modal */}
          <View style={styles.modalBox}>
            {/* Success Icon */}
            <View style={styles.successIconContainer}>
              <View style={styles.outerCircle}>
                <View style={styles.successIcon}>
                  <Image source={success} />
                </View>
              </View>
            </View>

            {/* Text Content */}
            <Text style={styles.successText}>Payment method {"\n"} added successfully</Text>
            <Text style={styles.modalSubtitle}>
              Your payment method has been linked to your account and you can now use it to buy DigiCoinX.
            </Text>

            {/* Done Button */}
            <TouchableOpacity style={styles.doneButton} onPress={onClose}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBoxContainer: {
    width: '90%',
    position: 'relative',
  },
  modalBox: {
    backgroundColor: 'white',
    borderRadius: 46,
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: -45,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 10,
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
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Satoshi-Black',
  },
  modalSubtitle: {
    fontSize: 16,
    color: '#9f9f9f',
    marginBottom: 60,
    textAlign: 'center',
    fontFamily: 'Satoshi-Medium',
    maxWidth: 300,
  },
  doneButton: {
    backgroundColor: '#6ee17c',
    paddingVertical: 15,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  doneButtonText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Satoshi-Medium',
  },
});