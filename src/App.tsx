import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetCounter} from "./components/SetCounter";

function App() {
    let [current, setCurrent] = useState(0)
    let [valueMax, setValueMax] = useState(Infinity)

    useEffect(() => {
        let currentValue = localStorage.getItem('currentValue')
        if (currentValue) {
            setCurrent(JSON.parse(currentValue))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('currentValue', JSON.stringify(current))
    }, [current])

    const changeCurrent = (c: number) => {
        setCurrent(c + 1)

    }
    const resetCurrent = () => {
        setCurrent(0)
        setValueMax(Infinity)
    }
    //const disabledReset = () => current === 0
    const disabledInc = () => current === valueMax
    const changeMaxValue = (v: number) => {
        valueMax = v
        setValueMax(valueMax)
    }
    const changeMinValue = (v: number) => {
        current = v
        setCurrent(current)
    }

    return (
        <div className="App">
            <Counter
                current={current}
                changeCurrent={changeCurrent}
                resetCurrent={resetCurrent}
                // disabledReset={disabledReset}
                disabledInc={disabledInc}
                valueMax={valueMax}
            />
            <SetCounter
                changeMaxValue={changeMaxValue}
                changeMinValue={changeMinValue}
            />
        </div>
    );
}

export default App;
