import React from "react";
import { View, Text, Dimensions, ScrollView, Image } from "react-native";
import { Svg, G, Line, Rect, Text as SvgText } from "react-native-svg";
import arrowRed from "../assets/arrow-down-red.png";
import arrowGreen from "../assets/arrow-down-green.png";


// Get screen width dynamically
const screenWidth = Dimensions.get("window").width;

// Updated Mock Data with More Entries
const mockData = [
    { "open": 100, "close": 115, "high": 120, "low": 95, "date": "Mar 1" },   // Bullish (Big)
    { "open": 115, "close": 120, "high": 125, "low": 110, "date": "Mar 2" },  // Bullish
    { "open": 120, "close": 112, "high": 123, "low": 108, "date": "Mar 3" },  // Bearish
    { "open": 112, "close": 130, "high": 135, "low": 110, "date": "Mar 4" },  // Bullish (Big)
    { "open": 130, "close": 130, "high": 133, "low": 127, "date": "Mar 5" },  // Neutral
    { "open": 130, "close": 140, "high": 145, "low": 128, "date": "Mar 6" },  // Bullish
    { "open": 140, "close": 125, "high": 142, "low": 122, "date": "Mar 7" },  // Bearish (Big)
    { "open": 125, "close": 145, "high": 150, "low": 120, "date": "Mar 8" },  // Bullish (Big)
    { "open": 145, "close": 146, "high": 148, "low": 144, "date": "Mar 9" },  // Neutral
    { "open": 146, "close": 160, "high": 165, "low": 145, "date": "Mar 10" }, // Bullish (Big)
    { "open": 160, "close": 150, "high": 162, "low": 147, "date": "Mar 11" }, // Bearish
    { "open": 150, "close": 165, "high": 168, "low": 148, "date": "Mar 12" }, // Bullish
    { "open": 165, "close": 164, "high": 167, "low": 162, "date": "Mar 13" }, // Neutral
    { "open": 164, "close": 175, "high": 180, "low": 160, "date": "Mar 14" }, // Bullish (Big)
    { "open": 175, "close": 168, "high": 176, "low": 165, "date": "Mar 15" }, // Bearish
    { "open": 168, "close": 185, "high": 190, "low": 165, "date": "Mar 16" }, // Bullish (Big)
    { "open": 185, "close": 182, "high": 186, "low": 180, "date": "Mar 17" }, // Neutral
    { "open": 182, "close": 195, "high": 200, "low": 180, "date": "Mar 18" }, // Bullish (Big)
    { "open": 195, "close": 188, "high": 198, "low": 185, "date": "Mar 19" }, // Bearish
    { "open": 188, "close": 205, "high": 210, "low": 185, "date": "Mar 20" }, // Bullish (Big)
    { "open": 205, "close": 205, "high": 208, "low": 202, "date": "Mar 21" }  // Neutral
  ]
  
  ;

const CandlestickChartComponent = () => {
  const chartWidth = screenWidth * 1; // Increased width for better visualization
  const chartHeight = 300;
  const candleWidth = 7; // Adjusted width for better spacing
  const cornerRadius = 4; // Rounded edges for candle bodies

  // Get min/max values for scaling
  const minValue = Math.min(...mockData.map((d) => d.low)) - 10;
  const maxValue = Math.max(...mockData.map((d) => d.high)) + 10;

  // Scale functions
  const yScale = (value) => ((value - minValue) / (maxValue - minValue)) * chartHeight;
  const xScale = (index) => index * 13 + 40; // Adjusted gap for better spacing

  return (
    <View style={{ flex: 1, padding: 0 }}>

      {/* ScrollView for Zoom & Pan */}
      <View style={{
    flexDirection: "row",
    justifyContent: "flex-end", // ✅ Aligns content to the right
    alignItems: "center", // ✅ Centers vertically
    borderBottomWidth: 0.4,
    borderColor: "#11996b",
    width: 90, // ✅ Shorter width for border, keeping it right-aligned
    alignSelf: "flex-end", // ✅ Ensures the container itself moves to the right
    paddingHorizontal: 5 // ✅ Slight padding for spacing
}}>
    <Image source={arrowGreen} style={{ width: 20, height: 20 }} />
    <Text style={{ color: "#9d9d9d", fontSize: 18, fontFamily:"Satoshi-Medium", marginLeft: 5, paddingRight:5 }}>1,445</Text>
</View>


      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Svg width={chartWidth} height={chartHeight}>
          <G>
            {/* Candlesticks */}
            {mockData.map((d, index) => {
              const x = xScale(index);
              const yOpen = chartHeight - yScale(d.open);
              const yClose = chartHeight - yScale(d.close);
              const yHigh = chartHeight - yScale(d.high);
              const yLow = chartHeight - yScale(d.low);
              const isBullish = d.close > d.open;
              const isBearish = d.close < d.open;
              const color = isBullish ? "#cfcfcf" : isBearish ? "#7e7e7e" : "#000000"; // Green for bullish, Red for bearish, Black for neutral

              return (
                <G key={index}>
                  {/* High-Low Line (matches candle color) */}
                  <Line 
                    x1={x} 
                    x2={x} 
                    y1={yHigh} 
                    y2={yLow} 
                    stroke={color} 
                    strokeWidth={1} 
                  />
                  {/* Candle Body with Rounded Edges */}
                  <Rect
                    x={x - candleWidth / 2}
                    y={Math.min(yOpen, yClose)}
                    width={candleWidth}
                    height={Math.max(2, Math.abs(yClose - yOpen))} // Ensuring candles are always visible
                    fill={color}
                    rx={cornerRadius}
                    ry={cornerRadius}/>
                  {/* Date Labels */}
                  {/* <SvgText x={x} y={chartHeight + 15} fontSize="4" textAnchor="middle">
                    {d.date}
                    </SvgText> */}
                </G>
              );
            })}
          </G>
        </Svg>
      </ScrollView>
          <View style={{flexDirection:"row",justifyContent:"start", borderTopWidth:0.4, borderColor:"#ff0000", width:90, alignItems:"center", paddingLeft:5}}>
            <Image source={arrowRed} style={{width:20, height:20}}/>
            <Text style={{color:"#9d9d9d", fontSize:18, fontFamily:"Satoshi-Medium"}}>1,245</Text>
          </View>
    </View>
  );
};

export default CandlestickChartComponent;
