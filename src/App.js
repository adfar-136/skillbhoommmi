
import './App.css';
// import About from './components/About';
import Message from './components/Message';
import Navbar from './components/Navbar';
// import { Greet } from './components/Greet';
// import Welcome from './components/Welcome';
import React, { useState } from 'react'




function App() {
 const [mode, setMode] = useState('light')
const toggleMode = () => {
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor ='#247dac'
  }
  else{
    setMode('light')
    document.body.style.backgroundColor ='white'
  }
}
 return (
    
    <div className="App">
      {/* <Greet name = "Tony" heroName = "IronMan"><p>IronMan Died</p></Greet>
      <Greet name ="Peter" heroName = "SpiderMan"><button>Addd</button></Greet>
      <Greet name ="Steven" heroName = "DrSTrange"/>
      <Greet name = "Bruce" heroName = "BatMan"/>
      <Greet name = "Adfar" heroName = "Joey"/>
      <Greet/>

      <Welcome/>
         */}
      <Navbar heading="Skillbhoomi" mode = {mode} toggleMode = {toggleMode}/>
      <div className="container">
      <Message heading = "Enter your text here" mode = {mode}/>
      </div>
       {/* <About/> */}
    </div>
   
  );
}

export default App;
