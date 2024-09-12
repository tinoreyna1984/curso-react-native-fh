import React, { useEffect, useRef, useState } from 'react'

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷',
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('')

    const [number, setNumber] = useState<string>("0");
    const [prevNumber, setPrevNumber] = useState<string>("0");

    const lastOperation = useRef<Operator>();

    // ayuda a construir la fórmula en la pantalla de digitación
    useEffect(() => {
        if(lastOperation.current){
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
        }
        else
            setFormula(number);
    }, [number]);

    // visualizar el resultado temporalmente en la pantalla de abajo
    useEffect(() => {
        const sr = subResult();
        setPrevNumber(`${sr}`);
    }, [formula])
    
    // construye el número
    const buildNumber = (numberString: string): void => {
        if(Number(number) > 0 || number.startsWith("0."))
            setNumber(number + numberString);
        else if(Number(number) === 0 && !number.startsWith("0."))
            setNumber(numberString);
    }

    // borra todo
    const resetNumber = () => {
        setNumber("0");
        setPrevNumber("0");
        lastOperation.current = undefined;
        setFormula('');
    }

    // borra un dígito
    const deleteDigit = () => {
        if((Number(number) === 0 && !number.startsWith("0.")) || (Math.abs(Number(number)) < 10 && !number.includes("."))) {
            setNumber("0");
            return;
        }
        setNumber(number.substring(0, number.length - 1))
    }

    // signo del número
    const signNumber = () => {
        if(Number(number) === 0) return;
        else if(Number(number) > 0)
            setNumber(number.padStart(number.length + 1,"-"));
        else
            setNumber(number.substring(1));
    }

    // punto decimal
    const decimalPoint = () => {
        if(number.includes(".")) return;
        setNumber(number + ".");
    }

    // la pantalla numérica de abajo
    const setLastNumber = () => {
        result(); // pinta el resultado a medida que se va construyendo la fórmula
        if(number.endsWith('.')){
            setPrevNumber(number.slice(0, -1));
        }
        else{
            setPrevNumber(number);
        }
        setNumber('0');
    }

    // las 4 operaciones
    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }
    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }
    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }
    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    // el igual para el resultado
    const result = () => {
        const sr = subResult();
        setFormula(`${sr}`);
        lastOperation.current = undefined;
        setPrevNumber('0');
    }

    const subResult = (): number => {
        //const num1 = Number(number);
        //const num2 = Number(prevNumber);

        const[number, operator, prevNumber] = formula.split(' ');
        const num1 = Number(number);
        const num2 = Number(prevNumber);

        if(isNaN(num2)) return num1;

        switch(lastOperation.current){
            case Operator.add:
                return num1 + num2;
            case Operator.subtract:
                return num1 - num2;
            case Operator.multiply:
                return num1 * num2;
            case Operator.divide:
                if(num2 === 0)
                    return NaN;
                else
                    return num1 / num2;
            default:
                throw new Error("Ocurrió algo inesperado...");
                break;
        }
    }

  return {
    formula,
    number,
    prevNumber,
    buildNumber,
    resetNumber,
    deleteDigit,
    signNumber,
    decimalPoint,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divideOperation,
    result
  };
}
