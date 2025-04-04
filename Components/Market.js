import { Animated, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';

import BottomNav from './BottomNav';
import CandlestickChartComponent from './CandleStickChartExample';
import LinearBackground from "../assets/gradient.png";
import blacktri from "../assets/blacktri.png";
import diamond from "../assets/diamond.png";
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
        inputRange: [0, (dates.length - 4) * 50],
        outputRange: ["10%", "100%"],
        extrapolate: 'clamp',
    });

    return (
        <View style={styles.container}>
            <ScrollView 
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <ImageBackground source={LinearBackground} style={styles.headerContainer}>
                    <View style={styles.headerRow}>
                        <Text style={styles.header}>Market</Text>
                        <View style={styles.diamondBadge}>
                            <View style={styles.diamondCircle}>
                                <Image source={diamond} style={styles.diamondIcon} resizeMode="contain" />
                            </View>
                        </View>
                    </View>

                    <View style={styles.priceTrendBorderWrapper}>
                        <View style={styles.priceTrendContainer}>
                            <View style={styles.priceSection}>
                                <Text style={styles.priceLabel}>XNTV Price</Text>
                                <Text style={styles.price}>$1,23</Text>
                            </View>

                            {/* Coin Icon placed between price and trend */}
                            <View style={styles.coinIconContainer}>
                                <Image source={require('./Xcoin.png')} style={styles.coinIcon} />
                            </View>

                            <View style={styles.trendSection}>
                                <View style={styles.trendContent}>
                                    <Text style={styles.trendLabel}>This Week</Text>
                                    <View style={styles.trendRow}>
                                        <Text style={styles.trend} numberOfLines={1}>
                                            +10.03%
                                        </Text>
                                        <Image source={blacktri} style={styles.trendIcon} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.chartContainer}>
                    <CandlestickChartComponent />
                </View>
                
                <View style={{ height: 100 }} />
            </ScrollView>

            <View style={styles.stickyDateContainer}>
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

            <BottomNav />
        </View>
    );
};

export default Market;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollContainer: {
        paddingBottom: 160,
    },
    headerContainer: {
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        resizeMode: 'cover',
        borderBottomWidth: 0.8,
        borderColor: "#cbc9cc",
        position: 'relative',
    },
    headerContent: {
        width: '100%',
        alignItems: 'center',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: "relative",
    },
    header: {
        fontSize: 24,
        textAlign: 'center',
        color: '#000000',
        fontFamily: "Satoshi-Black"
    },
    diamondBadge: {
        position: 'absolute',
        right: -5,
        top: -15,
    },
    diamondCircle: {
        width: 56, 
        height: 56,
        borderRadius: 50,
        backgroundColor: '#6ee17c',
        borderWidth: 1.5,
        borderColor: '#ffca0d',
        justifyContent: 'center',
        alignItems: 'center',
    },
    diamondIcon: {
        width: 38,
        height: 38,
    },
    coinIconWrapper: {
        marginTop: 10,
        marginBottom: 15,
    },
    coinIcon: {
        width: 50,
        height: 50,
    },
    priceTrendBorderWrapper: {
        width: '100%',
        marginTop:50,
    },
    priceTrendContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20, // Equal padding on both sides
    },
    priceSection: {
        flex: 1,
        alignItems: 'flex-start',
    },
    coinIconContainer: {
        marginHorizontal: 20, // Equal spacing on both sides of the icon
    },
    priceLabel: {
        fontSize: 12,
        color: 'gray',
        fontFamily: "Satoshi-Medium",
        marginBottom: 4,
    },
    price: {
        fontSize: 24,
        fontFamily: "Satoshi-Medium",
    },
    trendSection: {
        flex: 1,
        alignItems: 'flex-end',
    },
    trendContent: {
        alignItems: 'flex-end',
    },
    trendRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    trend: {
        fontSize: 24,
        fontFamily: "Satoshi-Medium",
        marginRight: 8,
        includeFontPadding: false,
        textAlignVertical: 'center',
    },
    trendIcon: {
        width: 10,
        height: 10,
    },
    chartContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 120,
    },
    stickyDateContainer: {
        position: "absolute",
        bottom: 60,
        left: 0,
        right: 0,
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
        position: "absolute",
        height: 0.8,
        backgroundColor: "#000000",
        bottom: 0
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
    trendLabel: {
        fontSize: 12,
        color: 'gray',
        fontFamily: "Satoshi-Medium",
        marginBottom: 4,
        alignSelf:"center"
    },
    dayText: {
        fontSize: 14,
        color: "#777",
        fontFamily: "Satoshi-Regular"
    },
    dateText: {
        fontSize: 16,
        color: "#000",
        fontFamily: "Satoshi-Medium"
    },
});