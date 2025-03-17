import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import BottomNav from './BottomNav';

const Terms = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Gradient Header */}
            <ScrollView>

            <LinearGradient colors={['#faf5f5', '#f8f2f2']} style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" size={24} color="black" />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.header}>Terms of Services</Text>
                    <Text style={styles.headerSubText}>Last updated on 1/3/2025</Text>
                </View>
            </LinearGradient>

                <View style={styles.clauseContainer}>
                    <Text style={styles.clauseTitle}> 1. Clause 1</Text>
                    <Text style={styles.clauseText}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </View>
                <View style={styles.clauseContainer}>
                    <Text style={styles.clauseTitle}> 2. Clause 2</Text>
                    <Text style={styles.clauseText}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </View>
                <View style={styles.clauseContainer}>
                    <Text style={styles.clauseTitle}> 3. Clause 3</Text>
                    <Text style={styles.clauseText}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </View>
            </ScrollView>

            <BottomNav />
        </View>
    );
};

export default Terms;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingBottom: 60,
    },
    headerContainer: {
        paddingTop: 70,
        paddingBottom: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    headerTextContainer: {
        flex: 1,
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    headerSubText: {
        color: "#8b8b8b",
        fontSize: 14,
    },
    clauseContainer: {
        padding: 20,
    },
    clauseTitle: {
        fontSize: 20,
        fontWeight: "600",
    },
    clauseText: {
        color: "#7e7e7e",
        fontSize: 18,
        fontWeight:"300"
    },
});
