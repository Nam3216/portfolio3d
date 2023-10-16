import React from "react";
import "./styleText.css"

const Text=()=>{

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
                    <p id="textHero">&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique, ipsa eveniet eius voluptas dolore sit a sint nobis quibusdam obcaecati facere expedita nihil necessitatibus esse possimus quod debitis magnam.</p>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Text
