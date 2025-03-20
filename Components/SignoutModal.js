import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SignOutModal = ({ visible, onConfirm, onCancel }) => {
  const navigation = useNavigation();
  return (
     <Modal transparent={true} visible={visible} animationType="fade">
          <View style={styles.overlay}>
            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={onCancel}>
              <Icon name="close" size={30} color="black" />
            </TouchableOpacity>
    
            {/* Modal Box */}
            <View style={styles.modalBox}>
              {/* Success Text */}
              <Text style={styles.successText}>Sign Out?</Text>
              <Text style={styles.modalSubtitle}> Are you sure you want to Sign Out?</Text>
              {/* Ok Button */}
              <TouchableOpacity style={styles.okButton} onPress={() => navigation.navigate('AppsLogin')}>
                <Text style={styles.okButtonText}>Ok</Text>
              </TouchableOpacity>
    
              {/* Cancel Button */}
              <TouchableOpacity style={styles.cancelButton} onPress={onConfirm}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
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
    modalBox: {
      width: '85%',
      backgroundColor: 'white',
      borderRadius: 50,
      padding: 40,
      alignItems: 'center',
    },
    modalSubtitle: {
        fontSize: 16,
        color: '#9f9f9f',
        marginBottom: 50,
        width: '100%',
        textAlign: 'center',
      },
    closeButton: {
      position: 'absolute',
      top: '23.5%',
      right: '10%',
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
    successIcon: {
      backgroundColor: '#E6F9EA',
      padding: 20,
      borderRadius: 50,
      marginBottom: 20,
    },
    successText: {
      fontSize: 26,
      fontWeight: '500',
      textAlign: 'center',
      marginBottom: 20,
    },
    okButton: {
      backgroundColor: '#6ee17c',
      paddingVertical: 15,
      borderRadius: 30,
      width: '110%',
      alignItems: 'center',
      marginBottom: 15,
    },
    okButtonText: {
      color: 'black',
      fontSize: 16,
      fontWeight: '500',
    },
    cancelButton: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 15,
      borderRadius: 30,
      width: '110%',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#b2b6b7',
    },
    cancelButtonText: {
      color: '#b2b6b7',
      fontSize: 16,
      fontWeight: '500',
    },
  });
