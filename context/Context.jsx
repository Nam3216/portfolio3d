import React from "react";
import { createContext, useState } from "react";

const ContextData=createContext()

const ContextProvider=({children})=>{
    const[dialog,setDialog]=useState("hello")

    const handleDialog=(a)=>{

        setDialog(a)

    }

    const data={dialog, setDialog, handleDialog}

    return(
        <ContextData.Provider value={data}>

            {children}

        </ContextData.Provider>

    )
}

export {ContextProvider}
export default ContextData