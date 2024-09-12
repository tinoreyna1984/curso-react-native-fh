import React from 'react'
import 'react-native-gesture-handler';
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './presentation/navigators/BottomTabNavigator';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
