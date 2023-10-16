import React from "react";
import { useContext } from "react";
import ContextData from "../../context/Context";
import "./styleClipo.css"

const Clipo=({data})=>{
    const{handleDialog, dialog, setDialog}=useContext(ContextData) 

    return(
        <>
                <div className="cardContainer">
                     
                    <div className="cardOk">
                        {/*---home----*/}
                        {data =="home" &&(
                            <>
                        {dialog=="hello" &&
                            <div class="globo"onClick={()=>handleDialog("start")} >
                                <p> Hey...aca abajo. Soy Clipo!! ¡Clickeame!  </p>
                           </div>
                        }  
                        {dialog=="soft" &&
                            <div class="globo"onClick={()=>handleDialog("start")} >
                                <p> Hey...aca abajo. Soy Clipo!! ¡Clickeame!  </p>
                           </div>
                        }   
                        {dialog=="start" && 
                        <div class="globo">  
                            <div>
                                <div>
                                <p>¡Quizas me recuerden de Microsoft Word!, ahora estoy con Norberto, ¿Queres que te ayude?</p>
                                </div>
                            <div className="globoChoice">
                                <p onClick={()=>handleDialog("help")}>Si</p>
                                <p onClick={()=>handleDialog("nohelp")}>No</p> 
                            </div>
                            </div>      
                        </div>
                        }
                        {dialog=="help" && (
                        <div class="globo">
                           <p>  ¡Bien!, ¡Es el mejor! Por eso trabajo con el. Mira sus <a href="#skills" >habilidades</a>,<a href="#project">proyectos</a> y <a href="#contact">contactalo</a>   </p>
                        </div>
                        )}
                        {dialog=="nohelp" && (
                        <div class="globo">
                           <p>  Bueno, igual si te arrepientes estoy aca...¡pero este sitio se navega solo de lo bueno que es! Sigue navegando.</p>
                        </div>
                        )}
                        </>
                        )}
                        {/*----project----*/}
                        {data =="project" &&(
                            <>
                        
                        <div class="globo">        
                     
                          <p>¿Te gustaron sus proyectos? Tiene un muy buen codigo, en los repositorios se puede ver. ¡Click aca para contactarlo!</p> 
                        </div>
                     
                        
                        </>
                        )}
                        {/*------skills------*/}
                        {data =="skills" &&(
                            <>
                        {dialog != "soft" && (
                        <div class="globo">        
                     
                          <p onClick={()=>handleDialog("soft")} >Se lo que pensas...que seran esas Soft Skills...Para algo estoy yo, ¡Clickeame!</p> 
                        </div>
                        )}
                         {dialog == "soft" && (
                        <div class="globo">        
                     
                          <p >Trabajo en equipo, cumplimiento de deadlines, responsable, sabe trabajar por objetivos, trabajar remoto, y muy motivado. ¡Es el mejor!...y lo digo no porque sea su amigo.</p> 
                        </div>
                        )}
                        
                        </>
                        )}
                         {/*------contact------*/}
                         {data=="contact" && (
                            <div class="globo">        
                     
                                <p >La seccion mas importante de todas, los contactos!. Vamos, se que quieres, ¡mandale un mail o un whatsapp!</p> 
                           </div>
                         )}

                    {data=="home" && 
                        <div className="clipo1">
                            <img src="clipookbghome.png" alt="loading"/>                            
                        </div>
                         }
                          {data=="project" && 
                        <div className="clipo1">
                            <img src="clipookbghome.png" alt="loading" id="clipo1"/>                            
                        </div>
                         }
                         {data=="skills" && 
                        <div className="clipo1">
                            <img src="clipookbghome.png" alt="loading" id="clipo1"/>                            
                        </div>
                         }
                         {data=="contact" && 
                        <div className="clipo1">
                            <img src="clipookbghome.png" alt="loading" id="clipo1"/>                            
                        </div>
                         }
                    </div>  
                </div>       
        
        </>
    )
}

export default Clipo