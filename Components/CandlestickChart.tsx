import React from 'react';
import { View, ScrollView } from 'react-native';
import Svg, { Line, Rect, Circle } from 'react-native-svg';

const CandlestickChart = ({ data }) => {
  const candleWidth = 7; // Adjust candle width
  const gap = 5; // Increase gap for spacing
  const chartPadding = 20; // Padding to avoid cut-off
  const maxPrice = Math.max(...data.map(d => d.high)); // Dynamic max value
  const minPrice = Math.min(...data.map(d => d.low)); // Dynamic min value
  const chartHeight = 150; // SVG height
  const chartWidth = data.length * (candleWidth + gap) + chartPadding * 2; // Calculate total width
  const radius = 3; // Rounded corner size

  // Scale function to map price to Y position
  const scaleY = (price) => chartHeight - ((price - minPrice) / (maxPrice - minPrice)) * chartHeight;

  return (
    <ScrollView horizontal style={{ marginTop: 50 }} showsHorizontalScrollIndicator={false}>
      <View style={{ alignItems: 'center', paddingLeft: 1, }}>
        <Svg width={chartWidth} height={chartHeight}>
          {data.map((candle, index) => {
            const x = index * (candleWidth + gap) + chartPadding;
            const yOpen = scaleY(candle.open);
            const yClose = scaleY(candle.close);
            const yHigh = scaleY(candle.high);
            const yLow = scaleY(candle.low);

            const isBullish = candle.close > candle.open;
            const fillColor = isBullish ? '#7e7e7e' : '#cfcfcf';

            const bodyHeight = Math.abs(yOpen - yClose);
            const yBodyTop = Math.min(yOpen, yClose);

            return (
              <React.Fragment key={index}>
                {/* High-Low Line (Wick) */}
                <Line 
                  x1={x + candleWidth / 2} 
                  y1={yHigh} 
                  x2={x + candleWidth / 2} 
                  y2={yLow} 
                  stroke="black" 
                  strokeWidth="1" 
                />

                {/* Rounded Candle Body */}
                <Rect 
                  x={x} 
                  y={yBodyTop + radius} 
                  width={candleWidth} 
                  height={bodyHeight - radius * 2} 
                  fill={fillColor} 
                />

                {/* Top Rounded Corner */}
                <Circle cx={x + candleWidth / 2} cy={yBodyTop + radius} r={radius} fill={fillColor} />

                {/* Bottom Rounded Corner */}
                <Circle cx={x + candleWidth / 2} cy={yBodyTop + bodyHeight - radius} r={radius} fill={fillColor} />
              </React.Fragment>
            );
          })}
        </Svg>
      </View>
    </ScrollView>
  );
};

export default CandlestickChart;
