import { useState } from "react";
import { createContext } from "react";

export const ProgramContext = createContext();


export const ProgramContextProvider = ({children}) => {
    const [ program, setProgram ] = useState({});
    const createProgram = (item) => {
        setProgram(prev => ({...prev, ...item}))
    }
    return(
        <ProgramContext.Provider value={{program, createProgram}}>
            {children}
        </ProgramContext.Provider>
    )
}