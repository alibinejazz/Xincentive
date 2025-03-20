import { Animated, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';

import BottomNav from './BottomNav';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearBackground from "../assets/gradient.png"; // Background Image
import blacktri from "../assets/blacktri.png";
import filter from "../assets/filter.png";
import { useNavigation } from '@react-navigation/native';

const Explore = () => {
    const navigation = useNavigation();

    // Dummy data for the list of rows
    const [rows, setRows] = useState([
        {
            id: '1',
            image: require('../assets/Starbucks.png'),
            text1: 'Entertainment',
            text2: 'Earn 20% cash back',
            text3: 'OR',
            text4: '8% XNTV',
            backgroundColor: '#ffffff', // Background color for image container
        },
        {
            id: '2',
            image: require('../assets/pringles.png'),
            text1: 'Entertainment',
            text2: 'Earn 20% cash back',
            text3: 'OR',
            text4: '8% XNTV',
            backgroundColor: '#f60000', // Background color for image container
        },
        {
            id: '3',
            image: require('../assets/mc.png'),
            text1: 'Entertainment',
            text2: 'Earn 20% cash back',
            text3: 'OR',
            text4: '8% XNTV',
            backgroundColor: '#ff0404', // Background color for image container
        },
        {
            id: '4',
            image: require('../assets/wallmart.png'),
            text1: 'Entertainment',
            text2: 'Earn 20% cash back',
            text3: 'OR',
            text4: '8% XNTV',
            backgroundColor: '#0173e5', // Background color for image container
        },
        // Add more rows as needed
    ]);

    // Dummy data for the four options
    const options = [
        { id: '1', label: 'Nearby' },
        { id: '2', label: 'Entertainment' },
        { id: '3', label: 'Travel' },
        { id: '4', label: 'Shop' },
    ];

    // Render the header and search bar
    const renderHeader = () => (
        <>
            {/* Background Image for Header */}
            <ImageBackground source={LinearBackground} style={styles.headerContainer}>
                {/* Header Row */}
                <View style={styles.headerRow}>
                    <Text style={styles.header}>Explore</Text>

                    {/* Diamond Badge */}
                    <View style={styles.diamondBadge}>
                        <View style={styles.diamondCircle}>
                            <Image source={filter} style={styles.diamondIcon} resizeMode="contain" />
                        </View>
                    </View>
                </View>

                {/* Search Bar */}
                <View style={styles.searchBarContainer}>
                    <View style={styles.searchBar}>
                        <Icon name="search" size={20} color="#cecdd2" style={styles.searchIcon} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search"
                            placeholderTextColor="#777"
                        />
                    </View>
                </View>
            </ImageBackground>

            {/* Four Options in One Row (Scrollable) */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.optionsContainer}>
                {options.map((option) => (
                    <TouchableOpacity key={option.id} style={styles.option}>
                        <Text style={styles.optionText}>{option.label}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </>
    );

    // Render each row
    const renderRow = ({ item }) => (
        <View style={styles.rowContainer}>
            {/* Image with Background Color */}
            <View style={[styles.imageContainer, { backgroundColor: item.backgroundColor }]}>
                <Image source={item.image} style={styles.rowImage} resizeMode='contain' />
            </View>

            {/* Four Texts */}
            <View style={styles.textContainer}>
                <Text style={styles.rowText1}>{item.text1}</Text>
                <Text style={styles.rowText2}>{item.text2}</Text>
                <Text style={styles.rowText3}>{item.text3}</Text>
                <Text style={styles.rowText4}>{item.text4}</Text>
            </View>

            {/* Line Separator */}
            <View style={styles.lineSeparator} />
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Use FlatList to render both header and rows */}
            <FlatList
                data={rows}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={renderHeader} // Render header at the top
                renderItem={renderRow} // Render each row
                contentContainerStyle={{ paddingBottom: 60 }} // Add padding for BottomNav
            />

            {/* Bottom Navigation */}
            <BottomNav />
        </View>
    );
};

export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    headerContainer: {
        paddingTop: 40,
        paddingBottom: 0,
        paddingHorizontal: 20,
        alignItems: 'center',
        resizeMode: 'cover',
        borderBottomWidth: 0.8,
        borderColor: "#cbc9cc",
        position: 'relative', // Needed for absolute positioning of diamond
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Centers Explore text
        width: '100%',
        position: "relative", // Ensures the diamond doesn’t shift Explore text
    },
    header: {
        fontSize: 24,
        textAlign: 'center',
        color: '#000000',
        fontFamily:"Satoshi-Black"
    },
    diamondBadge: {
        position: 'absolute',
        right: -5, // Moves it to the right
        top: -15, // Aligns it with the Explore text
    },
    diamondCircle: {
        width: 56,
        height: 56,
        borderRadius: 50, // Makes it a perfect circle
        backgroundColor: '#fff', // Green background
        borderWidth: 1.5,
        borderColor: '#e8e8e8', // Yellow border
        justifyContent: 'center',
        alignItems: 'center',
    },
    diamondIcon: {
        // width: 20, // Adjust size for diamond
        // height: 20,
    },
    priceTrendBorderWrapper: {
        width: '90%',
        marginTop: 20,
        paddingVertical: 15,
        borderRadius: 10,
    },
    priceTrendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        paddingHorizontal: 20,
        gap: 5,
    },
    priceSection: {
        alignItems: 'center',
    },
    priceLabel: {
        fontSize: 16,
        color: 'gray',
    },
    price: {
        fontSize: 32,
        fontWeight: '500',
    },
    coinIcon: {
        width: 50,
        height: 50,
        marginHorizontal: 26,
    },
    trendSection: {
        alignItems: "flex-start",
    },
    trendRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    trendLabel: {
        fontSize: 16,
        color: 'gray',
    },
    trendIcon: {
        width: 10,
        height: 10,
        marginLeft: 10,
        marginBottom: 20,
    },
    trend: {
        fontSize: 32,
        fontWeight: '500',
    },
    searchBarContainer: {
        paddingHorizontal: 0,
        paddingVertical: 15,
        width: '100%', // Ensure the container takes full width
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#e8e8e8",
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '100%', // Ensure the search bar takes full width
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#000',
        fontFamily:"Satoshi-Medium"
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderWidth:1,
        borderTopColor:"#fff",
        borderLeftColor:"#fff",
        borderRightColor:"#fff",
        borderBottomColor:"#f6f6f7",
        marginHorizontal:15
    },
    rowImage: {
        width: 50, // Adjust width as needed
        height: 50, // Adjust height as needed
        borderRadius: 25,
        // resizeMode: 'contain',
        justifyContent:"center",
        alignItems:"center" // Ensures the image fits within the container
    },
    imageContainer: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginRight: 25,
        borderColor:"#e8e8e8",
        borderWidth:0.8
    },
    textContainer: {
        flex: 1,
    },
    rowText1: {
        fontSize: 16,
        color: '#A0A0A0',
        marginBottom: 5,
        fontFamily:"Satoshi-Regular"
    
    },
    rowText2: {
        fontSize: 18,
        marginBottom: 5,
        fontFamily:"Satoshi-Regular"
    },
    rowText4: {
        fontSize: 18,
        marginBottom: 5,
        fontFamily:"Satoshi-Bold"
    },
    lineSeparator: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginTop: 10,
    },
    optionsContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    option: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 22,
        marginRight: 10,
        borderWidth:1,
        borderColor:"#e8e8e8"
        
    },
    optionText: {
        fontSize: 16,
        color: '#000',
        fontFamily:"Satoshi-Medium"
    },
});