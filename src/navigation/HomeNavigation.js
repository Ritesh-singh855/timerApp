import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/HomeScreen';
import Login from '../screen/LoginSceen';
import Otp from '../screen/OtpVerificationScreen';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="otp" component={Otp} />
      {/* <Stack.Screen name="Home" component={Home} />  */}
    </Stack.Navigator>
  );
};

export default HomeNavigation;
