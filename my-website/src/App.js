import React from 'react';
import Header from './Component/header/Header';
import Topcontainer from './Component/Topcontainer/Topcontainer';
import Finalstage from './Component/Finalstage/Finalstage';
import Contact from './Component/Contact/Contact';
import Servicecontainer from './Component/Skill/Servicecontainer';
import About from './Component/About/About';
import { Sign } from './Component/Sign/Sign';




const App = () => {
  return (
    <div>
      <Header/>
      <Sign/> 
      <Topcontainer/>
      <Servicecontainer/>
      <About/>
      <Contact/>
      <Finalstage/>
      
    </div>
  )
}

export default App