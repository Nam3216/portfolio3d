import React,{useRef} from "react";
import emailjs from '@emailjs/browser';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Grid';
import Clipo from "../../clipo/Clipo";
import BasicModal from "../../modal/modal";
import EmailIcon from '@mui/icons-material/Email';
import "./styleContact.css"
import { useContext } from "react";
import ContextData from "../../../context/Context";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";

const Contact=()=>{
    const{language, handleLanguage}=useContext(ContextData)
    const form=useRef()
    /* modal */
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    /* guardar info input */
    const[info, setInfo]=useState({name:"", email:"", message:""})

    const saveInfo=(e)=>{
        e.preventDefault()
        setInfo({...info, [e.target.name]:e.target.value})
        console.log(info)
    }
  
/* email js */
    const sendEmail=(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_kothuvl', 'template_b1s9ayj', form.current, 'Ab-jG_IYyCla718rH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            
    }
/* para modal */
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
  
    /* comprobacion modal */
    const handleModal=()=>{
       if(info.name.length>1){
        if(info.email.length>1){
            if(info.message.length>1){
                handleOpen() 
            }
        }
       }
        
    }

    return(
        <>
            <div className="contactContainer">
                <div className="barLateralContainerSkill">
                        <div className="barLateralSkill"></div>
                        {language=="spanish" &&
                        <div className="skillsTitle">
                            <h2>Contacto.</h2>
                        </div> }
                        {language=="english" &&
                        <div className="skillsTitle">
                            <h2>Contact.</h2>
                        </div> }
                        
                </div>
                <div className="contactData">
                    <p id="mail" onClick={() => window.location = 'mailto:norbertomanzanos@gmail.com'} >norbertomanzanos@gmail.com</p>
                    <p>+549 11-33232167</p>
                </div>
                <div className="icons">
                    <LinkedInIcon className="icon" onClick={()=>window.open("https://www.linkedin.com/in/norberto-manzanos-desarrollador-fullstack/")}/>
                    <GitHubIcon className="icon" onClick={()=>window.open("https://github.com/Nam3216")}/>
                    <InstagramIcon className="icon" onClick={()=>window.open("https://www.instagram.com/norberto_manz/")} />
                    <EmailIcon className="icon" onClick={() => window.location = 'mailto:norbertomanzanos@gmail.com'}/>
                   
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name"></label>
                    <input type="text" placeholder="Escribe tu nombre" name="name" onChange={saveInfo}/>
                    <label htmlFor="email"></label>
                    <input type="text" placeholder="Escribe tu email" name="email" onChange={saveInfo}/>
                    <label htmlFor="message"></label>
                    <textarea  placeholder="Escribe tu mensaje" name="message" onChange={saveInfo} />
                    <Button variant="contained"id="formButton" type="submit" onClick={handleModal} >Enviar</Button>
                </form>
                <Clipo data="contact"/>
                {/* modal */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:"center"}} >
                       <p style={{color:"black"}} >¡Correo Enviado!</p> 
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} >
                       
                    </Typography>
                    </Box>
                </Modal>
               
            </div>
        
        </>
    )
}

export default Contact

