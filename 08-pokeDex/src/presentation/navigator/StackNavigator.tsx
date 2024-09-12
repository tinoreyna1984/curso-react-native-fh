import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../screens/home/HomeScreen';
import {PokemonScreen} from '../screens/pokemon/PokemonScreen';
import {SearchScreen} from '../screens/search/SearchScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: { pokemonId: number };
  SearchScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};
