import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetCounter} from "./components/SetCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incCounterAC} from "./bll/counter-reducer";

function App() {

    const value = useSelector<AppStateType, number>((state) => state.counter.value)

    const dispatch = useDispatch()

    const changeCurrent = () => {
       dispatch(incCounterAC())
    }

    let [valueMax, setValueMax] = useState(Infinity)

    const resetCurrent = () => {
        setValueMax(Infinity)
    }
    // const disabledReset = () => value === 0
    const disabledInc = () => value === valueMax
    const changeMaxValue = (v: number) => {
        valueMax = v
        setValueMax(valueMax)
    }

    return (
        <div className="App">
            <Counter
                current={value}
                changeCurrent={changeCurrent}
                resetCurrent={resetCurrent}
                // disabledReset={disabledReset}
                disabledInc={disabledInc}
                valueMax={valueMax}
            />
            <SetCounter
                changeMaxValue={changeMaxValue}
                // changeMinValue={changeMinValue}
            />
        </div>
    );
}

export default App;
