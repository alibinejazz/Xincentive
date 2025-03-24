import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const LineChartComponent = () => {
  const data = {
    labels: ['2017', '', '2018', '', '2019', '', '2020'],
    datasets: [
      {
        data: [
          1000, 18000, 6000, 12000, 3500, 10500, 8384, 6000, 12000, 3500, 10500, 8384
        ],
        strokeWidth: 2,
        color: () => '#008000' // Green line
      }
    ],
    legend: ['BTC/USDT (W)']
  };

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black labels and lines
    labelColor: () => '#000000',
    propsForDots: {
      r: '3',
      strokeWidth: '1',
      stroke: '#008000'
    },
    propsForBackgroundLines: {
      strokeDasharray: '',
      stroke: '#ffffff'
    }
  };

  return (
    <View style={{ backgroundColor: '#ffffff', paddingVertical: 8 }}>
      <Text style={{ color: '#000', textAlign: 'center', fontSize: 16, marginVertical: 10 }}>
        BTC/USDT Weekly Chart
      </Text>
      <LineChart
        data={data}
        width={screenWidth - 16}
        height={320}
        chartConfig={chartConfig}
        // withVerticalLines={true}
        // withHorizontalLines={true}
        // withInnerLines={true}
        style={{
          marginVertical: 8,
          borderRadius: 8,
          marginHorizontal: 8
        }}
      />
      <Text style={{ color: '#000', textAlign: 'right', marginRight: 16 }}>
        Awal MEI $12000 →
      </Text>
    </View>
  );
};

export default LineChartComponent;
