import React, { useState } from "react";
import Map from './Map';
import Splash from './SplashComponent/Splash'
import './App.css';

function App(){
  const [buttonPopup, setButtonPopup] = useState(false);
    return (
      
      <div className="App">
        <img src ="/images/map.png" alt = ""/>
        <button className="Start-btn" onClick={() => setButtonPopup(true)}>Learn!</button> 
        <Splash trigger={buttonPopup} setTrigger={setButtonPopup}>     
        <Map/>
        </Splash> 
      </div> 
    );
  }


export default App;

