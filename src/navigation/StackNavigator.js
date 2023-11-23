import React from 'react';

import HomeScreen from '../HomeScreen';
import About from '../About';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
