import React from "react";
import { useContext } from "react";
import ContextData from "../../../context/Context";
import "./styleText.css";

const Text=()=>{

    const{language}=useContext(ContextData)

    return(
       
        <>  
        
            <div className="textext">
                <div className="barLateralContainer">
                    <div className="barLateral"></div>
                </div>
                <div className="textComponent">
                    <div className="textComponentHi">
                        <div className="textHi">
                            <div>
                                <h2>&nbsp;Hola Mundo!  </h2>
                            </div>
                            <div style={{display:"flex"}}>{/*para q se vea bien es responsive */}
                                <h2>&nbsp;Soy</h2> <h2 id="norberto" >&nbsp;Norberto</h2>
                            </div>
                        </div>
                        {language=="spanish" && <p id="textHero">&nbsp; Desarrollador Full Stack automotivado especializado en React y Node Js con 2 años de experiencia en stack JavaScript y con conocimientos en .NET C++ y PHP Laravel. Tengo Más de 15 años de experiencia laboral en empresas multinacionales y nacionales en áreas de finanzas. Esto me brinda aptitudes y habilidades blandas para poder integrar cualquier equipo de trabajo, ya sea remoto o presencial.</p>}
                    
                        {language=="english" &&  <p id="textHero">&nbsp; Self-motivated Full Stack developer specialized in React and Node Js with 2 years of experience in the JavaScript stack and knowledge of .NET C++ and PHP Laravel. I have more than 15 years of work experience in multinational and national companies in finance areas. This gives me skills and soft skills to be able to integrate any work team, whether remote or in-person.</p>}
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Text
