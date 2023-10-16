import React from "react";
import Grid from '@mui/material/Grid';
import mockProjects from "./mock";
import Button from '@mui/material/Button';
import { motion } from "framer-motion";
import "./styleProjects.css"
import Clipo from "../../clipo/Clipo";
// fade in video framer https://www.youtube.com/watch?v=ajPPgKTViX8
const Projects=()=>{
/*para definir animation */
    const fadeInAnimationVariants={
        initial:{
            opacity:0,
            y:100,
        },
        animate:(index)=>({
            
            opacity:1,
            y:0,
        
            transition:{//seria para q tarde 0.05 en aparecer
            delay:0.08 * index,
        }
       
    })
    }
/* asi para un solo elemento, arriba le agrego una funcion al animate, porq quiero q aparezca u elemento primero y otro despues y asi, q el primer elemento tenga delay 0.05, el segundo 0.05 mas y asi*/
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
            delay:0.05
        }
    }
    return(
        <div className="projectsContainer">
            <div className="barLateralContainerSkill">
                    <div className="barLateralSkill"></div>
                    <div className="skillsTitle">
                        <h2>Proyectos.</h2>
                    </div>
                </div>
            <Grid container className="projectItemContainer">
                {mockProjects.map((item,index)=>{
                    return(
                        <Grid item xs={12} md={6} className="itemProject" >
                            
                            <div className="projectItem"
                               
                            
                            >
                                <motion.img src={item.img} alt="img"
                                 variants={fadeInAnimationVariants}
                                 initial="initial"
                                 whileInView="animate"
                                /* viewport={{
                                     once:true,
                                 }}*/
                                 custom={index}/>
                            </div>
                            <div className="projectItemText">
                                <h3>{item.title} </h3>
                                    <div className="techContainer">
                                    {item.tech.map((tech, index)=>{
                                        return(
                                            
                                                <motion.img src={tech} alt="tech"
                                                variants={fadeInAnimationVariants}
                                                initial="initial"
                                                whileInView="animate"
                                                /*viewport={{
                                                    once:true,
                                                }}*/
                                                custom={index}
                                                  />
                                            
                                        )
                                    })}
                                    </div>
                                    <div className="projectButton">
                                        <Button variant="contained" onClick={()=>window.open(item.linkSite)} >
                                          Demo
                                        </Button>
                                        <Button variant="contained" onClick={()=>window.open(item.linkGit)} >
                                          Codigo
                                        </Button>
                                    </div>
                            </div>
                            
                        </Grid>
                        
                    )
                })}
                
            </Grid>
                <Clipo data={"project"} />
        </div>
    )
}

export default Projects

/*  <>
                            <Grid item xs={12} md={6} className="projectItem"
                               
                            
                            >
                                <motion.img src={item.img} alt="img"
                                 variants={fadeInAnimationVariants}
                                 initial="initial"
                                 whileInView="animate"
                                 viewport={{
                                     once:true,
                                 }}
                                 custom={index}/>
                            </Grid>
                            <Grid item xs={12} md={6} className="projectItemText">
                                <h3>{item.title} </h3>
                                    <div className="techContainer">
                                    {item.tech.map((tech, index)=>{
                                        return(
                                            
                                                <motion.img src={tech} alt="tech"
                                                variants={fadeInAnimationVariants}
                                                initial="initial"
                                                whileInView="animate"
                                                viewport={{
                                                    once:true,
                                                }}
                                                custom={index}
                                                  />
                                            
                                        )
                                    })}
                                    </div>
                                    <div className="projectButton">
                                        <Button variant="contained" onClick={()=>window.open(item.linkSite)} >
                                          Demo
                                        </Button>
                                        <Button variant="contained" onClick={()=>window.open(item.linkGit)} >
                                          Codigo
                                        </Button>
                                    </div>
                            </Grid>
                        </>*/