import React from "react";
import { useContext } from "react";
import ContextData from "../../context/Context";
import "./styleClipo.css"

const Clipo=({data})=>{
    const{handleDialog, dialog, setDialog, handleLanguage, language}=useContext(ContextData) 

    return(
        <>
                <div className="cardContainer">
                     
                    <div className="cardOk">
                        {/*---home----*/}
                        {data =="home" &&(
                            <>
                        {dialog=="hello" &&

                            <div className="globo"onClick={()=>handleDialog("start")} >
                                {language=="spanish" && <p className="start"> Hey...aca abajo. Soy Clipo!! ¡Clickeame!  </p>}
                                {language=="english" && <p className="start"> Hey...down here. I'm Clipo!! Click me!  </p>}
                                
                           </div>
                        }  
                        {dialog=="soft" &&
                            <div className="globo"onClick={()=>handleDialog("start")} >
                                {language=="spanish" && <p> Hey...aca abajo. Soy Clipo!! ¡Clickeame!  </p>}
                                {language=="english" && <p> Hey...down here. I'm Clipo!! Click me!  </p>}
                           </div>
                        }   
                        {dialog=="start" && 
                        <div className="globo">  
                            <div>
                                <div>
                                    {language=="spanish" && <p>¡Quizas me recuerden de Microsoft Word!, ahora estoy con Norberto, ¿Queres que te ayude?</p>}
                                    {language=="english" && <p>Maybe you remember me from Microsoft Word! Now I'm with Norberto. Do you want me to help you?</p>}
                                
                                </div>
                            <div className="globoChoice">
                                {language=="spanish" && (
                                    <>
                                    <p onClick={()=>handleDialog("help")} id="yes">Si</p>
                                    <p onClick={()=>handleDialog("nohelp")} id="no">No</p> 
                                    </>
                                )
                                }

                                {language=="english" && (
                                    <>
                                    <p onClick={()=>handleDialog("help")} id="yes">Yes</p>
                                    <p onClick={()=>handleDialog("nohelp")} id="no">No</p> 
                                    </>
                                )
                                }
                            </div>
                            </div>      
                        </div>
                        }
                        {dialog=="help" && (
                        <div className="globo">
                           {language=="spanish" && <p> ¡Bien!, ¡Es el mejor! Por eso trabajo con el. Mira sus <a href="#skills" style={{fontWeight:"bold"}}>habilidades</a>,<a href="#project" style={{fontWeight:"bold"}}>proyectos</a> y <a href="#contact" style={{fontWeight:"bold"}}>contactalo</a>   </p>}
                           {language=="english" && <p> Good! It's the best! That's why I work with him. Look at their <a href="#skills" >skills</a>,<a href="#project">projects</a> and <a href="#contact">contact</a>   </p>}
                        </div>
                        )}
                        {dialog=="nohelp" && (
                        <div className="globo">
                           {language=="spanish" &&<p>  Bueno, igual si te arrepientes estoy aca...¡pero este sitio se navega solo de lo bueno que es! Sigue navegando.</p>}
                           {language=="english" &&<p>  Well, maybe if you regret it, I'm here... but this site is so good that it is so good! Keep browsing.</p>}
                        </div>
                        )}
                        </>
                        )}
                        {/*----project----*/}
                        {data =="project" &&(
                            <>
                        
                        <div className="globo">        
                     
                        {language=="spanish" && <p>¿Te gustaron sus proyectos? Tiene un muy buen codigo, en los repositorios se puede ver. ¡Click aca para <a href="#contact" style={{fontWeight:"bold"}}>contactarlo</a>!</p> }
                        {language=="english" && <p>Did you like their projects? It has a very good code, you can see it in the repositories. Click here to <a href="#contact" style={{fontWeight:"bold"}}>contact</a> him!</p> }
                        </div>
                     
                        
                        </>
                        )}
                        {/*------skills------*/}
                        {data =="skills" &&(
                            <>
                        {dialog != "soft" && (
                        <div className="globo">        
                     
                        {language=="spanish" &&<p onClick={()=>handleDialog("soft")} className="skillsP" >Se lo que pensas...que seran esas Soft Skills...Para algo estoy yo, ¡Clickeame!</p> }
                        {language=="english" &&<p onClick={()=>handleDialog("soft")} className="skillsP" >I know what you think...what those Soft Skills will be...I'm here for something, Click me!</p> }
                        </div>
                        )}
                         {dialog == "soft" && (
                        <div className="globo">        
                     
                     {language=="spanish" &&<p >Trabajo en equipo, cumplimiento de deadlines, responsable, sabe trabajar por objetivos, trabajar remoto, y muy motivado. ¡Es el mejor!...y lo digo no porque sea su amigo.</p> }
                     {language=="english" &&<p >Teamwork, meeting deadlines, responsible, knows how to work towards objectives, work remotely, and very motivated. He is the best!...and I say this not because I am his friend.</p> }
                        </div>
                      
                        )}
                        
                        </>
                        )}
                         {/*------contact------*/}
                         {data=="contact" && (
                            <div className="globo">        
                     
                     {language=="spanish" &&  <p >La seccion mas importante de todas, los contactos!. Vamos, se que quieres, ¡mandale un mail o un whatsapp!</p> }
                     {language=="english" &&  <p >The most important section of all, the contacts! Come on, I know what you want, send him an email or whatsapp!</p> }
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