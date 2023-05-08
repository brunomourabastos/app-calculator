import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import CalcButton from './components/Button';
import Display from './components/Display';

function App() {
  const [displayValue, setDisplayValue] = useState(['0']);
  const [operation, setOperation] = useState('');
  const [firstNumber, setFirstNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [show, setShow] = useState(false)

  useEffect(
    () => {
      if (operation === '=') {
        setDisplayValue(result)
        setShow(false)
      }

    }, [operation]
  )

  changeNumber = n => {
    if (n === '.' && displayValue.includes('.')) {
      return
    }

    if (displayValue[0] === '0') {
      const currentNumber = displayValue.shift()
      setDisplayValue(currentNumber)
    }
    setDisplayValue(
      [...displayValue, n]
    )
  }

  clearMemory = () => {
    setDisplayValue(['0'])
    setFirstNumber(0)
    setOperation('')
    setResult(0)
  }

  changeOperation = (ope) => {
    if (ope === '=') {
      switch (operation) {
        case '+':
          const sum = firstNumber + +displayValue.join('')
          setResult(sum)
          break;
        case '-':
          const sub = firstNumber - +displayValue.join('')
          setResult(sub)
          break;
        case '/':
          const div = firstNumber / +displayValue.join('')
          setResult(div)
          break;
        case 'X':
          const multi = firstNumber * +displayValue.join('')
          setResult(multi)
        default:
          break;
      }
    }
    setOperation(ope)
    typeof(displayValue) === 'object' 
    ? setFirstNumber(+displayValue.join('')) 
    : setFirstNumber(displayValue)
    setShow(true)
    setDisplayValue(['0'])

  }

  return (
    <View style={style.container}>
      {show ? <Display value={`${firstNumber} ${operation} ${displayValue}`} /> : null}
      {result ? <Display value={result} /> : <Display value={displayValue} />}
      <View style={style.buttons}>
        <CalcButton label='AC' triple onClick={() => clearMemory()} />
        <CalcButton operation label='/' onClick={changeOperation} />
        <CalcButton label='7' onClick={changeNumber} />
        <CalcButton label='8' onClick={changeNumber} />
        <CalcButton label='9' onClick={changeNumber} />
        <CalcButton operation label='X' onClick={changeOperation} />
        <CalcButton label='4' onClick={changeNumber} />
        <CalcButton label='5' onClick={changeNumber} />
        <CalcButton label='6' onClick={changeNumber} />
        <CalcButton operation label='-' onClick={changeOperation} />
        <CalcButton label='1' onClick={changeNumber} />
        <CalcButton label='2' onClick={changeNumber} />
        <CalcButton label='3' onClick={changeNumber} />
        <CalcButton operation label='+' onClick={changeOperation} />
        <CalcButton double label='0' onClick={changeNumber} />
        <CalcButton label='.' onClick={changeNumber} />
        <CalcButton operation label='=' onClick={changeOperation} />
      </View>
    </View>
  );
}

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

