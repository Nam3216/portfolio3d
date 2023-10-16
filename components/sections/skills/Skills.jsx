import React from "react";
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import "./styleSkills.css"


const Skills=()=>{

    let skillsList=[{
        title:"Front End",
        img:"./frontend.jpg",
        one:"Html",
        two:"Css",
        three:"React - Redux",
        four:"Javascript",
        five:"Typescript",
        six:"VueJS",
        oneimg:"html.png",
        twoimg:"css.png",
        threeimg:"react.png",
        fourimg:"javascript.png",
        fiveimg:"ts.png",
        siximg:"vue.png"

    },{
        title:"Back End",
        img:"./backend.jpg",
        one:"Javascript",
        two:"PHP",
        three:"Node JS",
        four:"Laravel",
        five:"My Sql",
        six:"Mongo DB",
        oneimg:"javascript.png",
        twoimg:"php.png",
        threeimg:"node.png",
        fourimg:"laravel.png",
        fiveimg:"mysql.png",
        siximg:"mongodb.png",
       

    }/*,{
        title:"Soft Skills",
        img:"./soft.jpg",
        one:"Equipo",
        two:"Deadlines",
        three:"Responsabilidad",
        four:"Objetivos",
        five:"Remoto",
        six:"Motivacion",
        oneimg:"team.png",
        twoimg:"deadlines.png",
        threeimg:"responsability.png",
        fourimg:"objectives.png",
        fiveimg:"objectives.png",
        siximg:"objectives.png",
        

    }*/
]

const fadeInAnimationVariantsOnce={//para q aparezca de una cuando se ve
    initial:{
        opacity:0,
        y:100,
    },
    animate:{
        opacity:1,
        y:0,
    },
    transition:{//seria para q tarde 0.05 en aparecer
        delay:0
    }
}

    return(
        <>
         <div className="skillsComContainer">
                <div className="barLateralContainerSkill">
                    <div className="barLateralSkill"></div>
                    <div className="skillsTitle">
                        <h2>Habilidades.</h2>
                    </div>
                </div>
                <Grid container  >
                    {skillsList.map((item,index)=>{

                        return(
                            <Grid item xs={12} md={6} lg={4} class="scenes" tabindex="0">
                                <motion.div className="scene-1" style={{backgroundImage:`url(${item.img})`,backgroundPosition:'center',backgroundRepeat: 'no-repeat'}}
                                 variants={fadeInAnimationVariantsOnce}
                                 initial="initial"
                                 whileInView="animate"
                                 viewport={{
                                     once:true,
                                 }}
                                 custom={index}
                                >
                                    <div className="scene1Text">
                                        <h2 className="scene-titl">{item.title}</h2>
                                    </div>
                                </motion.div>
                        
                                <div className="scene-2" style={{  /*backgroundImage:`url(${item.img})`,backgroundPosition:'center',backgroundRepeat: 'no-repeat',*/}}>
                                    
                                    <div className="scene2Text">
                                        <div className="itemSkills">
                                        <p className="textSkills">{item.one} </p>
                                            <div className="imgSkills">
                                                <img src={item.oneimg} style={{width:"25px"}} />
                                            </div>
                                        </div>
                                        <div className="itemSkills">
                                        <p className="textSkills">{item.two} </p>
                                            <div className="imgSkills">
                                                <img src={item.twoimg} style={{width:"25px"}}/>
                                            </div>
                                        </div>
                                        <div className="itemSkills">
                                        <p className="textSkills">{item.three} </p>
                                            <div className="imgSkills">
                                                <img src={item.threeimg} style={{width:"25px"}}/>
                                            </div>
                                        </div>
                                        <div className="itemSkills">
                                        <p className="textSkills">{item.four} </p>
                                            <div className="imgSkills">
                                                <img src={item.fourimg} style={{width:"25px"}}/>
                                            </div>
                                        </div>
                                        <div className="itemSkills">
                                        <p className="textSkills">{item.five} </p>
                                            <div className="imgSkills">
                                                <img src={item.fiveimg} style={{width:"25px"}}/>
                                            </div>
                                        </div>
                                        <div className="itemSkills">
                                        <p className="textSkills">{item.six} </p>
                                            <div className="imgSkills">
                                                <img src={item.siximg} style={{width:"25px"}}/>
                                            </div>
                                        </div>
                                        <div className="itemSkills">
                                        <p className="textSkills">{item.seven} </p>
                                            <div className="imgSkills">
                                                <img src={item.sevenimg} style={{width:"25px"}}/>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </Grid>

                        )
                    })}
                   
                    
                </Grid>
                
            </div>
        </>
    )
}

export default Skills