import AddNewCard from './Components/AddNewCard';
import CandlestickChart from './Components/CandlestickChart';
import ConnectBankScreen from './Components/ConnectBankScreen';
import ConversionSelection from './Components/ConversionSelection';
import EditProfile from './Components/EditProfile';
import MyProfile from './Components/MyProfile';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import SplashScreen from './Components/SplashScreen';
import Subscription from './Components/Subscription';
import Terms from './Components/Terms';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>

    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}>
    {/* <SplashScreen/> */}
      
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
