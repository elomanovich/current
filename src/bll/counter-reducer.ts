const initialState = {
    value: 0
}

type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "INC-COUNTER":
            return {...state, value: state.value + 1}
        case "SET-VALUE-FROM-LOCAL-STORAGE":
            return {
                ...state
            }
        default:
            return state
    }
}

export const incCounterAC = () => ({type: 'INC-COUNTER'} as const)
export const setValueFromLocalStorageAC = (value: number) => ({type: 'SET-VALUE-FROM-LOCAL-STORAGE', value} as const)

type IncCounterType = ReturnType<typeof incCounterAC>
type SetValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>

type ActionType = IncCounterType | SetValueFromLocalStorageActionType