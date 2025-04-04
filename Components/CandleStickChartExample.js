import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { G, Line, Rect, Svg } from "react-native-svg";

import React from "react";
import arrowGreen from "../assets/arrow-down-green.png";
import arrowRed from "../assets/arrow-down-red.png";

// Generate more realistic fluctuating data
const generateMockData = () => {
  const data = [];
  let currentPrice = 1000; // Starting price
  const volatility = 15; // How much the price can change each step
  
  for (let i = 0; i < 100; i++) {
    // Random price change (-volatility to +volatility)
    const change = (Math.random() * 2 - 1) * volatility;
    const newPrice = currentPrice + change;
    
    // Ensure prices stay within reasonable bounds
    const high = Math.max(currentPrice, newPrice) + Math.random() * 10;
    const low = Math.min(currentPrice, newPrice) - Math.random() * 10;
    
    // Determine open/close - sometimes make them equal for a "doji" candle
    const isDoji = Math.random() > 0.85;
    const open = isDoji ? currentPrice : currentPrice;
    const close = isDoji ? currentPrice : newPrice;
    
    data.push({
      open,
      high,
      low,
      close,
    });
    
    currentPrice = newPrice;
  }
  
  return data;
};

const mockData = generateMockData();

// Get screen width dynamically
const screenWidth = Dimensions.get("window").width;

const CandlestickChartComponent = () => {
  const chartHeight = 350;
  const candleWidth = 7;
  const gap = 13;
  const cornerRadius = 4;

  const chartWidth = mockData.length * gap + 80;

  const minValue = Math.min(...mockData.map((d) => d.low)) - 10;
  const maxValue = Math.max(...mockData.map((d) => d.high)) + 10;

  const yScale = (value) => ((value - minValue) / (maxValue - minValue)) * chartHeight;
  const xScale = (index) => index * gap + 40;

  return (
    <View style={{ flex: 1, padding: 0 }}>
      {/* Green arrow and value (top right) */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          borderBottomWidth: 0.4,
          borderColor: "#11996b",
          width: 90,
          alignSelf: "flex-end",
          paddingHorizontal: 5,
        }}
      >
        <Image source={arrowGreen} style={{ width: 20, height: 20 }} />
        <Text style={{ color: "#9d9d9d", fontSize: 18, fontFamily: "Satoshi-Medium", marginLeft: 5, paddingRight: 5 }}>
          {maxValue.toFixed(0)}
        </Text>
      </View>

      {/* Scrollable Chart */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Svg width={chartWidth} height={chartHeight}>
          <G>
            {mockData.map((d, index) => {
              const x = xScale(index);
              const yOpen = chartHeight - yScale(d.open);
              const yClose = chartHeight - yScale(d.close);
              const yHigh = chartHeight - yScale(d.high);
              const yLow = chartHeight - yScale(d.low);
              const isBullish = d.close > d.open;
              const isBearish = d.close < d.open;
              const color = isBullish ? "#11996b" : isBearish ? "#ff0000" : "#000000";

              return (
                <G key={index}>
                  <Line x1={x} x2={x} y1={yHigh} y2={yLow} stroke={color} strokeWidth={1} />
                  <Rect
                    x={x - candleWidth / 2}
                    y={Math.min(yOpen, yClose)}
                    width={candleWidth}
                    height={Math.max(2, Math.abs(yClose - yOpen))}
                    fill={color}
                    rx={cornerRadius}
                    ry={cornerRadius}
                  />
                </G>
              );
            })}
          </G>
        </Svg>
      </ScrollView>

      {/* Red arrow and value (bottom left) */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          borderTopWidth: 0.4,
          borderColor: "#ff0000",
          width: 90,
          alignItems: "center",
          paddingLeft: 5,
        }}
      >
        <Image source={arrowRed} style={{ width: 20, height: 20 }} />
        <Text style={{ color: "#9d9d9d", fontSize: 18, fontFamily: "Satoshi-Medium" }}>
          {minValue.toFixed(0)}
        </Text>
      </View>
    </View>
  );
};

export default CandlestickChartComponent;