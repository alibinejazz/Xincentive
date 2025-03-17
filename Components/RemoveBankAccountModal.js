import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RemoveBankAccountModal = ({ visible, onClose, onRemove }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          {/* Handlebar */}
          <View style={styles.handleBar} />

          {/* Title */}
          <Text style={styles.modalTitle}>Remove?</Text>

          {/* Subtitle */}
          <Text style={styles.modalSubtitle}>
            Are you sure you want to remove this bank account?
          </Text>

          {/* Remove Button */}
          <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
            <Icon name="delete" size={20} color="black" style={styles.trashIcon} />
            <Text style={styles.removeButtonText}>Remove</Text>
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

export default RemoveBankAccountModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark overlay background
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
    marginBottom: 10,
    textAlign:"left",
    width: '80%',
  },
  modalSubtitle: {
    fontSize: 18,
    color: '#9f9f9f',
    // textAlign: 'center',
    marginBottom: 30,
    width: '80%',
  },
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#70df7d',
    width: '85%',
    paddingVertical: 15,
    borderRadius: 30,
    justifyContent: 'center',
    marginBottom: 15,
  },
  trashIcon: {
    marginRight: 10,
  },
  removeButtonText: {
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
