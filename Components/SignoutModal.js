import { Modal, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const SignOutModal = ({ visible, onConfirm, onCancel }) => {
  const navigation = useNavigation();

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        
        {/* Modal Box */}
        <View style={styles.modalBoxContainer}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onCancel}>
            <Icon name="close" size={24} color="black" />
          </TouchableOpacity>

          <View style={styles.modalBox}>
            <Text style={styles.successText}>Sign Out?</Text>
            <Text style={styles.modalSubtitle}>
              Are you sure you want to sign out?
            </Text>

            <TouchableOpacity
              style={styles.okButton}
              onPress={() => navigation.navigate('AppsLogin')}
            >
              <Text style={styles.okButtonText}>Ok</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={onConfirm}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SignOutModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBoxContainer: {
    width: '85%',
    position: 'relative',
  },
  modalBox: {
    backgroundColor: 'white',
    borderRadius: 46,
    paddingVertical: 40,
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
  successText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Satoshi-Medium',
  },
  modalSubtitle: {
    fontSize: 16,
    color: '#9f9f9f',
    marginBottom: 50,
    textAlign: 'center',
    fontFamily: 'Satoshi-Medium',
    width: '100%',
    maxWidth: 280,
  },
  okButton: {
    backgroundColor: '#6ee17c',
    paddingVertical: 15,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  okButtonText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Satoshi-Medium',
  },
  cancelButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#b2b6b7',
  },
  cancelButtonText: {
    color: '#b2b6b7',
    fontSize: 16,
    fontFamily: 'Satoshi-Medium',
  },
});
