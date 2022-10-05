import { useEffect, useState } from "react";
import { createContext } from "react";

export const ProgramContext = createContext();


export const ProgramContextProvider = ({children}) => {
    const [ program, setProgram ] = useState({});

    useEffect(() => {
        setProgram(JSON.parse(localStorage.getItem('program')));
    },[])
    const createProgram = (item) => {
        if(item === null) return setProgram({})
        setProgram(prev => ({...prev, ...item}))
    }
    return(
        <ProgramContext.Provider value={{program, createProgram}}>
            {children}
        </ProgramContext.Provider>
    )
}