import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/HomeScreen';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
