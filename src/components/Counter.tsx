import {Display} from "./Display";
import {Button} from "./Button";
import React from "react";

type propsType = {
    current:number
    changeCurrent:(c:number)=> void
    resetCurrent:(c:number)=> void
    disabledReset?:()=> boolean
    disabledInc: ()=> boolean
    valueMax: number
}

export const Counter = (props:propsType) => {

    const {
        current,
        changeCurrent,
        resetCurrent,
        disabledReset,
        disabledInc,
        valueMax
    } = props

    return (
        <div className="counter">
            <Display
                current={current}
                valueMax={valueMax}
            />
            <div className={'button'}>
                <Button
                    changeCurrent={changeCurrent}
                    current={current}
                    value={'Inc'}
                    disable={disabledInc()}
                />
                <Button
                    changeCurrent={resetCurrent}
                    current={current}
                    value={'Reset'}
                   disable={false}
                />
            </div>
        </div>
    )
}