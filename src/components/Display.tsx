import React from "react";

type propsType = {
    current: number
    valueMax:number
}

export const Display = (props: propsType) => {

    const changeColor = () => props.current === props.valueMax ? 'display2' : 'display'
    return (
        <div className={changeColor()}>{props.current}</div>
    )
}