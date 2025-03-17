import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Line, Rect } from 'react-native-svg';

const CandleStickChart = ({ data }) => {
  return (
    <View style={styles.chartContainer}>
      <Svg height="150" width="100%">
        {data.map((candle, index) => (
          <>
            {/* High-Low Line */}
            <Line
              key={`line-${index}`}
              x1={candle.x}
              y1={candle.high}
              x2={candle.x}
              y2={candle.low}
              stroke="black"
              strokeWidth="2"
            />
            {/* Candlestick Body */}
            <Rect
              key={`rect-${index}`}
              x={candle.x - 5}
              y={Math.min(candle.open, candle.close)}
              width={10}
              height={Math.abs(candle.open - candle.close)}
              fill={candle.open > candle.close ? 'red' : 'green'}
            />
          </>
        ))}
      </Svg>
    </View>
  );
};

export default CandleStickChart;

const styles = StyleSheet.create({
  chartContainer: {
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
});
