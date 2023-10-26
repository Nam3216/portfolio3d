import React from "react";
import { createContext, useState } from "react";

const ContextData=createContext()

const ContextProvider=({children})=>{
    const[dialog,setDialog]=useState("hello")
    const[language,setLanguage]=useState("spanish")

    const handleDialog=(a)=>{

        setDialog(a)

    }

    const handleLanguage=(a)=>{

        setLanguage(a)
       
    }

    const data={dialog, setDialog, handleDialog, language, handleLanguage}

    return(
        <ContextData.Provider value={data}>

            {children}

        </ContextData.Provider>

    )
}

export {ContextProvider}
export default ContextData