import React from 'react';
import { SafeAreaView } from 'react-native';
import CandlestickChart from './Components/CandlestickChart';
import ConnectBankScreen from './Components/ConnectBankScreen';
import AddNewCard from './Components/AddNewCard';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConversionSelection from './Components/ConversionSelection';
import MyProfile from './Components/MyProfile';
import EditProfile from './Components/EditProfile';
import Subscription from './Components/Subscription';
import Terms from './Components/Terms';


const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>

    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="ConnectBankScreen" component={ConnectBankScreen} />
          <Stack.Screen name="AddNewCard" component={AddNewCard} />
          <Stack.Screen name="Conversion" component={ConversionSelection} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="Subscription" component={Subscription} />
          <Stack.Screen name="Terms" component={Terms} />
        </Stack.Navigator>
    </SafeAreaView>
    </NavigationContainer>

  );
};

export default App;
