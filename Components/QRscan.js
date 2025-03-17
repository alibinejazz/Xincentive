import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import info from "../assets/info.png"

const QRScan = () => {
  return (
    <View style={styles.container}>
      {/* Info Text with Icon */}
      <View style={styles.infoContainer}>
        <Image source={info} style={styles.infoIcon}/>
        <Text style={styles.infoText}>
          Open your business connector app and scan the QR code provided by the cashier or merchant.
        </Text>
      </View>

      <View style={styles.qrContainer}>
        <Image
          source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=SampleQR' }}
          style={styles.qrImage}
        />
      </View>

      <TouchableOpacity style={styles.connectorButton}>
        <Text style={styles.connectorButtonText}>Business connector app</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QRScan;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop:20,
    paddingHorizontal: 20,
    backgroundColor:"#f5f5f5"
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoIcon: {
    marginRight: 5,
    marginBottom: 40,
  },
  infoText: {
    fontSize: 20,
    color: '#3c3c3c',
    // flexWrap: 'wrap',
    textAlign: "left",
    width: "100%",
    padding: 2,
  },
  qrContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    // marginBottom: 20,
  },
  qrImage: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  connectorButton: {
    backgroundColor: '#6ee17c',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
    width:"100%"
  },
  connectorButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});

// connectorButton: {
//   backgroundColor: 'rgb(110, 225, 124)',
//   paddingVertical: 18, // ✅ Reduce excessive padding
//   paddingHorizontal: 50, // ✅ Adjust for better responsiveness
//   borderRadius: 30,
//   alignSelf: 'center', // ✅ Center button horizontally
//   marginTop: 20, // ✅ Add space above the button
//   position: 'absolute', // ✅ Keep it at the bottom 
//   bottom: -110,
//   width: "100%",
// },
// connectorButtonText: {
//   color: 'black',
//   fontSize: 18,
//   fontWeight: '500',
//   textAlign: 'center',
// },