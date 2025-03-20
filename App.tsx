import React, { useEffect } from 'react';

import AddNewCard from './Components/AddNewCard';
import AppsLogin from './Components/AppsLogin';
import ConnectBankScreen from './Components/ConnectBankScreen';
import ConversionSelection from './Components/ConversionSelection';
import EditProfile from './Components/EditProfile';
import EnableNotifications from './Components/EnableNotifications';
import Explore from './Components/Explore';
import InviteCode from './Components/InviteCode';
import Login from "./Components/Login"
import Market from './Components/Market';
import MyProfile from './Components/MyProfile';
import { NavigationContainer } from '@react-navigation/native';
import OnBoardingCarousel from './Components/OnboardingCarousel';
import Otp from './Components/Otp';
import { SafeAreaView } from 'react-native';
import SplashScreen from './Components/SplashScreen';
import Subscription from './Components/Subscription';
import Terms from './Components/Terms';
import Wallet from './Components/Wallet';
import { createStackNavigator } from '@react-navigation/stack';

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
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="Terms" component={Terms} />
          <Stack.Screen name="InviteCode" component={InviteCode} />
          <Stack.Screen name="EnableNotifications" component={EnableNotifications} />
          <Stack.Screen name="AppsLogin" component={AppsLogin}/>
          <Stack.Screen name="Explore" component={Explore}/>
          <Stack.Screen name="Wallet" component={Wallet}/>
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
// onPress={() => navigation.navigate('InviteCode')}