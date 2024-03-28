import { createContext, useReducer } from "react";



export const stateContext = createContext("");


export const stateProvider = ({reducer, initialState, children}) => {
    <stateContext.Provider value={{useReducer, initialState}}>
        {children}
    </stateContext.Provider>
}  