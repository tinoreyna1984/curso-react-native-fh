/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { CalculatorScreen } from './presentation/screens';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';
import { styles } from './config/theme/app-theme';

function App(): React.JSX.Element {
  
  return (
    <View style={styles.background}>
      <StatusBar barStyle={"light-content"} backgroundColor={"black"} />
        <CalculatorScreen />
    </View>
  );
}

export default App;
