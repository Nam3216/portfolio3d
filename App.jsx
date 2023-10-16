import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/pages/Home'
import Dot from './components/dot/Dot'
import Skills from './components/sections/skills/Skills'
import Projects from './components/sections/projects/Projects'
import SkillsTech from './components/sections/skills/SkillsTech'
import { ContextProvider } from './context/Context'
import ResponsiveAppBar from './components/navbar/Navbar'
import Contact from './components/sections/contact/Contact'
import Footer from './components/sections/footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
        <ContextProvider>
          <ResponsiveAppBar/>
        <Home/>
        <div className='content'>
          <div id='skills'>
            <SkillsTech/>
          </div>
          <div id="projects">
            <Projects/>
          </div>
          <div id="contact">
            <Contact/>
          </div>
            <Footer/>
        </div>
          </ContextProvider>
      </div>
      
    </>
  )
}

export default App
