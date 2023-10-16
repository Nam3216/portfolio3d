import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Grid';
import Clipo from "../../clipo/Clipo";
import "./styleContact.css"

const Contact=()=>{

    return(
        <>
            <div className="contactContainer">
                <div className="barLateralContainerSkill">
                        <div className="barLateralSkill"></div>
                        <div className="skillsTitle">
                            <h2>Contacto.</h2>
                        </div>
                </div>
                <Grid container>
                    <Grid item xs={12} md={4} className="contactInfo">
                        <p onClick={() => window.location = 'mailto:norbertomanzanos@gmail.com'} id="contactName">norbertomanzanos@gmail.com</p>
                        <p>(+549)11-33232167</p>

                    </Grid>
                    <Grid item xs={12} md={4} className="contactLogo">
                        <p id="contactNm">NM</p> 

                    </Grid>
                    <Grid item xs={12} md={4} className="mediaIcon">
                   
                            <LinkedInIcon className="icon" onClick={()=>window.open("https://www.linkedin.com/in/norberto-manzanos-desarrollador-fullstack/")}/>
                            <GitHubIcon className="icon" onClick={()=>window.open("https://github.com/Nam3216")}/>
                            <InstagramIcon className="icon" onClick={()=>window.open("https://www.instagram.com/norberto_manz/")} />
                      


                    </Grid>
                </Grid>
                <Clipo data="contact"/>
            </div>
        
        </>
    )
}

export default Contact

/*<Grid container>
                            <Grid item xs={4} md={4}>
                                <LinkedInIcon/>
                            </Grid>
                            <Grid item xs={4} md={4}>
                                <GitHubIcon/>
                            </Grid>
                            <Grid item xs={4} md={4}>
                                <InstagramIcon/>
                            </Grid>
                        </Grid>*/