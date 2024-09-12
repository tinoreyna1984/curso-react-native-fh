import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useProfileStore } from '../../store/profile-store';
import { useCounterStore } from '../../store/counter-store';

export const HomeScreen = () => {

  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const counter = useCounterStore(state => state.counter);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text>{email}</Text>
      <Text>Counter: {counter}</Text>
    </View>
  )
}
