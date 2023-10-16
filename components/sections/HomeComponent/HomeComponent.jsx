import React,{useState} from "react";
import Text from "./Text";
import Animation from "./Animation";
import WindyContainer from "../../model/windyContainer";
import { Grid } from "@mui/material";
import { useContext } from "react";
import ContextData from "../../../context/Context";
import Clipo from "../../clipo/Clipo";
import "./styleHomeComponent.css"

const HomeComponent=()=>{
    const{handleDialog, dialog, setDialog}=useContext(ContextData) 

   

    return(
        <>
        
            <div className="homeComponentContainer">
                
                        
                      
                         <WindyContainer/>
                <div className="clipoHome">
                    <Clipo data={"home"} />
                </div>    
            </div>
            
        
        </>
    )
}

export default HomeComponent