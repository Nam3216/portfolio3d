import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import "./styleFooter.css"

const Footer=()=>{

    return(
        <>
            <div className="footer">
                <LinkedInIcon className="icon" onClick={()=>window.open("https://www.linkedin.com/in/norberto-manzanos-desarrollador-fullstack/")}/>
                <GitHubIcon className="icon" onClick={()=>window.open("https://github.com/Nam3216")}/>
                <InstagramIcon className="icon" onClick={()=>window.open("https://www.instagram.com/norberto_manz/")} />
                <EmailIcon className="icon" onClick={() => window.location = 'mailto:norbertomanzanos@gmail.com'}/>
                   
            </div>
        </>
    )
}

export default Footer