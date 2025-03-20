import { Animated, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';

import BottomNav from './BottomNav';
import CandlestickChartComponent from './CandleStickChartExample';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearBackground from "../assets/gradient.png"; // Background Image
import blacktri from "../assets/blacktri.png";
import diamond from "../assets/diamond.png"
import { useNavigation } from '@react-navigation/native';

const Market = () => {
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState(null);
    const scrollX = useRef(new Animated.Value(0)).current;

    const dates = [
        { day: 'Mon', date: 15 },
        { day: 'Tue', date: 16 },
        { day: 'Wed', date: 17 },
        { day: 'Thu', date: 18 },
        { day: 'Fri', date: 19 },
        { day: 'Sat', date: 20 },
        { day: 'Sun', date: 21 },
        { day: 'Mon', date: 22 },
        { day: 'Tue', date: 23 },
        { day: 'Wed', date: 24 },
        { day: 'Thu', date: 25 },
    ];

    const progressWidth = scrollX.interpolate({
        inputRange: [0, (dates.length - 4) * 50],  // Adjusted for proper scaling
        outputRange: ["10%", "100%"],
        extrapolate: 'clamp',
    });

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* Background Image for Header */}
                <ImageBackground source={LinearBackground} style={styles.headerContainer}>
    {/* Header Row */}
    <View style={styles.headerRow}>
        <Text style={styles.header}>Market</Text>

        {/* Diamond Badge */}
        <View style={styles.diamondBadge}>
            <View style={styles.diamondCircle}>
                <Image source={diamond} style={styles.diamondIcon} resizeMode="contain" />
            </View>
        </View>
    </View>

    {/* Price Trend View */}
    <View style={styles.priceTrendBorderWrapper}>
        <View style={styles.priceTrendContainer}>
            {/* XNTV Price Section */}
            <View style={styles.priceSection}>
                <Text style={styles.priceLabel}>XNTV Price</Text>
                <Text style={styles.price}>$1,23</Text>
            </View>

            {/* XNTV Coin Icon */}
            <Image source={require('./Xcoin.png')} style={styles.coinIcon} />

            {/* Trend Section */}
            <View style={styles.trendSection}>
                <Text style={styles.trendLabel}>This Week</Text>
                <View style={styles.trendRow}>
                    <Text style={styles.trend}>+10.03 %</Text>
                    <Image source={blacktri} style={styles.trendIcon} />
                </View>
            </View>
        </View>
    </View>
</ImageBackground>


                {/* Candlestick Chart */}
                <View style={styles.chartContainer}>
                    <CandlestickChartComponent />
                </View>
            </ScrollView>

            {/* Sticky Date Selector */}
            <View style={styles.stickyDateContainer}>
                {/* Progress Indicator */}
                <View style={styles.progressBarContainer}>
                    <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
                </View>

                <FlatList
                    horizontal
                    data={dates}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={16}
                    contentContainerStyle={styles.flatListContent}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.dateItem,
                                selectedDate === item.date && styles.selectedDateItem
                            ]}
                            onPress={() => setSelectedDate(item.date)}
                        >
                            <Text style={styles.dayText}>{item.day}</Text>
                            <Text style={styles.dateText}>{item.date}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            {/* Bottom Navigation */}
            <BottomNav />
        </View>
    );
};

export default Market;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingBottom: 60,
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
        justifyContent: 'center', // Centers Market text
        width: '100%',
        position: "relative", // Ensures the diamond doesn’t shift Market text
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
        top: -15, // Aligns it with the Market text
    },
    
    diamondCircle: {
        width: 56, 
        height: 56,
        borderRadius: 50, // Makes it a perfect circle
        backgroundColor: '#6ee17c', // Green background
        borderWidth: 1.5,
        borderColor: '#ffca0d', // Yellow border
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
        fontFamily:"Satoshi-Medium"
    },
    price: {
        fontSize: 32,
        fontWeight: '500',
        fontFamily:"Satoshi-Medium"
    },
    coinIcon: {
        width: 50,
        height: 50,
        marginHorizontal: 26
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
        alignSelf:"center",
        fontFamily:"Satoshi-Medium"
    },
    trendIcon: {
        width: 10,
        height: 10,
        marginLeft: 10,
        marginBottom: 20,
    },
    trend: {
        fontSize: 28,
        // fontWeight: '500',
        fontFamily:"Satoshi-Medium"
    },
    chartContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        marginTop:50
    },
    stickyDateContainer: {
        position: "absolute",
        bottom: 60, // Positioned above BottomNav
        width: "100%",
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#ddd",
        paddingBottom: 5,
    },
    progressBarContainer: {
        height: 0.1,
        width: "100%",
        backgroundColor: "#eee",
    },
    progressBar: {
        position:"absolute",
        height: 0.8,
        backgroundColor: "#000000",
        bottom:0
    },
    flatListContent: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    dateItem: {
        alignItems: "center",
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 8,
    },
    dayText: {
        fontSize: 14,
        color: "#777",
        fontFamily:"Satoshi-Regular"
    },
    dateText: {
        fontSize: 16,
        color: "#000",
        fontFamily:"Satoshi-Medium"

    },
});
