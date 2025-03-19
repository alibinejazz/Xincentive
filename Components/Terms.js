import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomNav from './BottomNav';
import LinearBackground from "../assets/gradient.png"; // Background Image

const Terms = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Background Image for Header */}
                <ImageBackground source={LinearBackground} style={styles.headerContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Icon name="chevron-left" size={24} color="black" />
                        <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.header}>Terms of Services</Text>
                        <Text style={styles.headerSubText}>Last updated on 1/3/2025</Text>
                    </View>
                </ImageBackground>

                {/* Terms Content */}
                <View style={styles.clauseContainer}>
                    <Text style={styles.clauseTitle}> 1. Clause 1</Text>
                    <Text style={styles.clauseText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust
                    </Text>
                </View>

                <View style={styles.clauseContainer}>
                    <Text style={styles.clauseTitle}> 2. Clause 2</Text>
                    <Text style={styles.clauseText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust of the printing and typesetting industry. Lorem Ipsum has been the indust Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                    </Text>
                </View>

                <View style={styles.clauseContainer}>
                    <Text style={styles.clauseTitle}> 3. Clause 3</Text>
                    <Text style={styles.clauseText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industLorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                    </Text>
                </View>
            </ScrollView>

            {/* Bottom Navigation */}
            <BottomNav />
        </View>
    );
};

export default Terms;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingBottom: 60,
    },
    headerContainer: {
        paddingTop: 70,
        paddingBottom: 30,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        resizeMode: 'cover',
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
        color: '#000000', // Ensure visibility on background
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
        fontWeight: "300",
    },
});
