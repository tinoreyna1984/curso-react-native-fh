import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { colors, styles } from '../../config/theme/app-theme'
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  
  const {number, prevNumber,
    formula, buildNumber, resetNumber, deleteDigit, signNumber, decimalPoint,
    addOperation, subtractOperation, multiplyOperation, divideOperation, result
  } = useCalculator();


  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>{formula}</Text>
        {
          (formula === prevNumber) ? 
          <Text style={styles.subResult}></Text> :
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
            {prevNumber}
          </Text>
        }
        
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={resetNumber} label='C' color={colors.lightGray} blackText={true} />
        <CalculatorButton onPress={signNumber} label='+/-' color={colors.lightGray} blackText={true} />
        <CalculatorButton onPress={deleteDigit} label='DEL' color={colors.lightGray} blackText={true} />
        <CalculatorButton onPress={divideOperation} label='÷' color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber("7")} label='7' color={colors.darkGray} />
        <CalculatorButton onPress={() => buildNumber("8")} label='8' color={colors.darkGray} />
        <CalculatorButton onPress={() => buildNumber("9")} label='9' color={colors.darkGray} />
        <CalculatorButton onPress={multiplyOperation} label='X' color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber("4")} label='4' color={colors.darkGray} />
        <CalculatorButton onPress={() => buildNumber("5")} label='5' color={colors.darkGray} />
        <CalculatorButton onPress={() => buildNumber("6")} label='6' color={colors.darkGray} />
        <CalculatorButton onPress={subtractOperation} label='-' color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber("1")} label='1' color={colors.darkGray} />
        <CalculatorButton onPress={() => buildNumber("2")} label='2' color={colors.darkGray} />
        <CalculatorButton onPress={() => buildNumber("3")} label='3' color={colors.darkGray} />
        <CalculatorButton onPress={addOperation} label='+' color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber("0")} label='0' color={colors.darkGray} doubleSize={true} />
        <CalculatorButton onPress={decimalPoint} label='.' color={colors.darkGray} />
        <CalculatorButton onPress={result} label='=' color={colors.orange} />
      </View>
    </View>
  )
}
