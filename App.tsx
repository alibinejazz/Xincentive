import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './Components/SplashScreen';
import OnBoardingCarousel from './Components/OnboardingCarousel';
import ConnectBankScreen from './Components/ConnectBankScreen';
import AddNewCard from './Components/AddNewCard';
import ConversionSelection from './Components/ConversionSelection';
import MyProfile from './Components/MyProfile';
import EditProfile from './Components/EditProfile';
import Subscription from './Components/Subscription';
import Terms from './Components/Terms';
import Market from './Components/Market';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="OnBoardingCarousel" component={OnBoardingCarousel} />
          <Stack.Screen name="Market" component={Market} />
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
