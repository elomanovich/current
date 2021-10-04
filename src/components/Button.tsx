import React from "react";

type propsType = {

    changeCurrent: (current: number) => void
    current: number
    value: string
    disable: boolean
}

export const Button = (props: propsType) => {
    return (
        <div className={'currentButton'}>
            <button
                onClick={() => props.changeCurrent(props.current)}
                disabled={props.disable ?? false}
            >{props.value}</button>
        </div>
    )
}