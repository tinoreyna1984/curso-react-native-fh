import React, { useEffect } from 'react';
import {Pressable, Text, View} from 'react-native';
import { styles } from '../../../config/app-theme';
import { useCounterStore } from '../../store/counter-store';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {

  const counter = useCounterStore(state => state.counter);
  const incrementValue = useCounterStore(state => state.incrementValue);
  const reset = useCounterStore(state => state.reset);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Contador: ${counter}`
    });
  }, [counter])
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SettingsScreen</Text>
      <Pressable
        style={styles.primaryButton}
        onPress={() => incrementValue(-1)}
      >
        <Text>-1</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => incrementValue(1)}
      >
        <Text>+1</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={reset}
      >
        <Text>Reiniciar contador</Text>
      </Pressable>
    </View>
  );
};
