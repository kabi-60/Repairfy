import React from 'react';
import Header from './Component/header/Header';
import Topcontainer from './Component/Topcontainer/Topcontainer';
import Finalstage from './Component/Finalstage/Finalstage';
import Contact from './Component/Contact/Contact';
import Servicecontainer from './Component/Skill/Servicecontainer';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
// import Login from './Component/Login/Login';





const App = () => {
  return (
    <div>
      <Header/>
      <Topcontainer/>
      {/* <Login/> */}
      <Servicecontainer/>
      <Contact/>
      <About/>
      <Blog/>
      <Finalstage/>
      
    </div>
  )
}

export default App