/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [firstNumber, setFirstNumber] = React.useState('');
  const [secondNumber, setSecondNumber] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const [result, setResult] = useState(null);
  const [count, setCount] = useState(0);

  const handleNumber = String => {
    setFirstNumber(firstNumber + String);
  };
  const handleOperation = String => {
    setOperation(String);
    setSecondNumber(firstNumber);
    setFirstNumber('');
  };
  const getResult = () => {
    switch (operation) {
      case '+':
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case '-':
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case '*':
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case '/':
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        setResult(0);
        break;
    }
  };
  return (
    <View>
      <Text style={styles.Counter}>
        {secondNumber}
        {operation}
        {firstNumber}
      </Text>
      <Text style={styles.Result}>{result}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleNumber('1')}>
          <Text style={styles.ButtonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleNumber('2')}>
          <Text style={styles.ButtonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleNumber('3')}>
          <Text style={styles.ButtonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleOperation('+')}>
          <Text style={styles.ButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleNumber('4')}>
          <Text style={styles.ButtonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleNumber('5')}>
          <Text style={styles.ButtonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleNumber('6')}>
          <Text style={styles.ButtonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleOperation('-')}>
          <Text style={styles.ButtonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleNumber('7')}>
          <Text style={styles.ButtonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleNumber('8')}>
          <Text style={styles.ButtonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleNumber('9')}>
          <Text style={styles.ButtonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleOperation('*')}>
          <Text style={styles.ButtonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleNumber('.')}>
          <Text style={styles.ButtonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleNumber('0')}>
          <Text style={styles.ButtonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleNumber('00')}>
          <Text style={styles.ButtonText}>00</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleOperation('/')}>
          <Text style={styles.ButtonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={styles.Button1}
          onPress={() => {
            setFirstNumber(''),
              setResult(''),
              setSecondNumber(''),
              setOperation('');
          }}>
          <Text style={styles.ButtonText1}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button1} onPress={() => getResult()}>
          <Text style={styles.ButtonText1}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Counter: {
    textAlign: 'right',
    fontSize: 50,
    color: '#000',
    fontWeight: 'italic',
    marginTop: 25,
  },
  Result: {
    textAlign: 'right',
    fontSize: 40,
    color: '#000',
    fontWeight: 'italic',
    marginTop: 20,
    marginBottom: 30,
  },
  Button: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  ButtonText: {
    textAlign: 'center',
    width: 60,
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  Button1: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  ButtonText1: {
    textAlign: 'center',
    width: 150,
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default App;
