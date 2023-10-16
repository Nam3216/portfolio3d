import * as React from 'react';
import {useState,useEffect} from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
//import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
//import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
//import AdbIcon from '@mui/icons-material/Adb';
import { ThemeProvider, createTheme } from '@mui/material/styles';
//import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import GitHubIcon from '@mui/icons-material/GitHub';
import "./styleNavbar.css"




function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const[appbarok,setAppbarok]=useState(true)


  const darkTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: /*'#000000'*/ "#FFFFFF00",
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#000000',
      },
    },
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll)
    return()=>{
        window.removeEventListener("scroll",handleScroll)
    }
  })

  const handleScroll=()=>{
    if(window.scrollY>50){
        
        setAppbarok(false)
    }
    if(window.scrollY<50){
        setAppbarok(true)
    }
  }

  return (
    <ThemeProvider theme={ appbarok ? darkTheme : lightTheme}>

    <AppBar position="fixed" className={appbarok ? "appbar" : "appbarfalse"}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'flex-start' }}>
       {/*logo*/ }
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              
            >
              
                <MenuItem key={5} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"> <a href="#start"  className='buttonLink'>Presentacion</a></Typography>
                </MenuItem>
                <MenuItem key={5} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"> <a href="#skills"   className='buttonLink'>Habilidades</a></Typography>
                </MenuItem>
                <MenuItem key={5} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">  <a href="#projects"   className='buttonLink'>Proyectos</a></Typography>
                </MenuItem>
                <MenuItem key={5} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">  <a href="#contact"   className='buttonLink'>Contacto</a></Typography>
                </MenuItem>
              
            </Menu>
          
          </Box>
         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
              <Button
                key={1}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              
              >
                <a href="#start"   className='buttonLink'>Presentacion</a>
              </Button>
              <Button
                key={2}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <a href="#skills"   className='buttonLink'>Habilidades</a>
              </Button>
              <Button
                key={3}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <a href="#projects"   className='buttonLink'>Proyectos</a>
              </Button>
              <Button
                key={4}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <a href="#contact"   className='buttonLink'>Contacto</a>
              </Button>
          
          </Box>

          <Box sx={{ flexGrow: 0 }}>
           
                <div className='iconsNavbar' >
                  {/*<LinkedInIcon className='iconsappbar'onClick={()=>window.open("https://www.linkedin.com/in/norberto-manzanos-desarrollador-fullstack/")} />
                    <GitHubIcon className='iconsappbar' onClick={()=>window.open("https://github.com/Nam3216")}/>*/}  
                    <div className='iconsNavbar' id="flags">
                      <img onClick={()=>window.open("https://www.linkedin.com/in/norberto-manzanos-desarrollador-fullstack/")} src="linkedin1.png" alt="flag"  />
                      <img onClick={()=>window.open("https://github.com/Nam3216")} src="github1.png" alt="flag"/>
                      <img onClick={()=>handleLanguage("spanish")} src="argentina.png" alt="flag"  />
                      <img onClick={()=>handleLanguage("english") } src="united-states.png" alt="flag"/>
                    </div>
                </div>
           
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
 
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;