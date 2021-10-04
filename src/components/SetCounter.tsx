import {Button} from "./Button";
import React, {ChangeEvent, useState} from "react";

type propsType = {
    changeMaxValue: (v: number) => void
    changeMinValue: (v: number) => void
}

export const SetCounter = (props: propsType) => {

    const [valueMax, setValueMax] = useState(0)
    const [valueMin, setValueMin] = useState(0)

    const valueMaxInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValueMax(+e.currentTarget.value)
    }
    const valueMinInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValueMin(+e.currentTarget.value)
    }
    const setCounter = () => {
        props.changeMaxValue(valueMax)
        props.changeMinValue(valueMin)
    }

    return (
        <div className="counter">
            <div>
                <span>max value</span>
                <input onChange={valueMaxInput} type={'number'}/>
            </div>
            <div>
                <span>min value</span>
                <input onChange={valueMinInput} type={'number'}/>
            </div>
            <div className={'button'}>
                <Button
                    changeCurrent={setCounter}
                    current={4}
                    value={'Set'}
                    disable={false}
                />
            </div>
        </div>
    )
}