import React from "react";
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import "./styleSkillsTech.css"
import Clipo from "../../clipo/Clipo";

const SkillsTech=()=>{
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
           
    
        },{
            title:"Soft Skills",
            img:"./soft.jpg",
            one:"Equipo",
            two:"Deadlines",
            three:"Responsabilidad",
            four:"Objetivos",
            five:"Remoto",
            six:"Motivacion",
            oneimg:"teamwork.png",
            twoimg:"deadlins.png",
            threeimg:"responsability.png",
            fourimg:"objectives.png",
            fiveimg:"remotes.png",
            siximg:"motivation.png",
            
    
        }
    ]
    return(
        <div className="skillsTechContainer">
            <div className="barLateralContainerSkill">
                    <div className="barLateralSkill"></div>
                    <div className="skillsTitle">
                        <h2>Habilidades.</h2>
                    </div>
            </div>
           
            {skillsList.map((item,index)=>{
                if(item.title=="Front End"){
                    return(
                    <div className="skillsCateg">
                        <div className="skillsTitleOk">
                             <h3>{item.title} </h3>
                         </div>
                         
                         <div className="skillsTech">
                            <div className="skillsTechOne">
                             <motion.img src={item.oneimg} alt="loading"
                             variants={fadeInAnimationVariants}
                             initial="initial"
                             whileInView="animate"
                            /* viewport={{
                                 once:true,
                             }}*/
                             custom={index}/>
                             <motion.img src={item.twoimg} alt="loading"
                             variants={fadeInAnimationVariants}
                             initial="initial"
                             whileInView="animate"
                             /*viewport={{
                                 once:true,
                             }}*/
                             custom={index}/>
                             <motion.img src={item.threeimg} alt="loading"
                             variants={fadeInAnimationVariants}
                             initial="initial"
                             whileInView="animate"
                             /*viewport={{
                                 once:true,
                             }}*/
                             custom={index}/>
                             </div>
                             <div className="skillsTechTwo">
                             <motion.img src={item.fourimg} alt="loading"
                             variants={fadeInAnimationVariants}
                             initial="initial"
                             whileInView="animate"
                            /* viewport={{
                                 once:true,
                             }}*/
                             custom={index}/>
                             <motion.img src={item.fiveimg} alt="loading"
                             variants={fadeInAnimationVariants}
                             initial="initial"
                             whileInView="animate"
                           /*  viewport={{
                                 once:true,
                             }}*/
                             custom={index}/>
                             <motion.img src={item.siximg} alt="loading"
                             
                             variants={fadeInAnimationVariants}
                                 initial="initial"
                                 whileInView="animate"
                               /*  viewport={{
                                     once:true,
                                 }}*/
                                 custom={index}/>
                             </div>
                         </div>
                                
                     </div>
                    )
                }
                if(item.title=="Back End"){
                    return(
                        <div className="skillsCateg">
                           <div className="skillsTitleOk">
                                <h3>{item.title} </h3>
                            </div>
                            <div className="skillsTech">
                                <div className="skillsTechOne">
                                    <motion.img src={item.oneimg} alt="loading"
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                   /* viewport={{
                                        once:true,
                                    }}*/
                                    custom={index}/>
                                    <motion.img src={item.twoimg} alt="loading"
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                   /* viewport={{
                                        once:true,
                                    }}*/
                                    custom={index}/>
                                    <motion.img src={item.threeimg} alt="loading"
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                  /*  viewport={{
                                        once:true,
                                    }}*/
                                    custom={index}/>
                                </div>
                                <div className="skillsTechTwo">
                                    <motion.img src={item.fourimg} alt="loading"
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                  /*  viewport={{
                                        once:true,
                                    }}*/
                                    custom={index}/>
                                    <motion.img src={item.fiveimg} alt="loading"
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                   /* viewport={{
                                        once:true,
                                    }}*/
                                    custom={index}/>
                                    <motion.img src={item.siximg} alt="loading"
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                   /* viewport={{
                                        once:true,
                                    }}*/
                                    custom={index}/>
                                </div>
                         </div>
                        </div>
                    
                    )}

                    if(item.title=="Soft Skills"){
                        return(
                            <div className="skillsCateg">
                               <div className="skillsTitleOk">
                                    <h3>{item.title} </h3>
                                </div>
                                <div className="skillsTech">
                                    <div className="skillsTechOne">
                                        <motion.img src={item.oneimg} alt="loading"
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                       /* viewport={{
                                            once:true,
                                        }}*/
                                        custom={index}/>
                                        <motion.img src={item.twoimg} alt="loading"
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                       /* viewport={{
                                            once:true,
                                        }}*/
                                        custom={index}/>
                                        <motion.img src={item.threeimg} alt="loading"
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                      /*  viewport={{
                                            once:true,
                                        }}*/
                                        custom={index}/>
                                    </div>
                                    <div className="skillsTechTwo">
                                        <motion.img src={item.fourimg} alt="loading"
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                      /*  viewport={{
                                            once:true,
                                        }}*/
                                        custom={index}/>
                                        <motion.img src={item.fiveimg} alt="loading"
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                       /* viewport={{
                                            once:true,
                                        }}*/
                                        custom={index}/>
                                        <motion.img src={item.siximg} alt="loading"
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                       /* viewport={{
                                            once:true,
                                        }}*/
                                        custom={index}/>
                                    </div>
                             </div>
                            </div>
                        
                        )
                }
            })}
             
        <Clipo data="skills"/>
        
        </div>
    )
}

export default SkillsTech

/* return(
                        <div className="skillsCateg">
                           <div className="skillsTitleOk">
                                <h3>{item.title} </h3>
                            </div>
                            
                            <div className="skillsTech">
                                <img src={item.oneimg} alt="loading"/>
                                <img src={item.twoimg} alt="loading"/>
                                <img src={item.threeimg} alt="loading"/>
                                <img src={item.fourimg} alt="loading"/>
                                <img src={item.fiveimg} alt="loading"/>
                                <img src={item.siximg} alt="loading"/>
                            </div>

                        </div>
                    )
                }
                if(item.title=="Back End"){
                    return(
                        <div className="skillsCateg">
                           <div className="skillsTitleOk">
                                <h3>{item.title} </h3>
                            </div>
                            <div className="skillsTech">
                            <img src={item.oneimg} alt="loading"/>
                                <img src={item.twoimg} alt="loading"/>
                                <img src={item.threeimg} alt="loading"/>
                                <img src={item.fourimg} alt="loading"/>
                                <img src={item.fiveimg} alt="loading"/>
                                <img src={item.siximg} alt="loading"/>
                            </div>

                        </div>
                    )
                }
            })}
            

        
        </div>
    )*/