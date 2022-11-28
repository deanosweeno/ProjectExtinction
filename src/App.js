import React, { useState } from "react";
import Map from './Map.js';
import Splash from './Splash.js'


function App(){
  const [buttonPopup, setButtonPopup] = useState(false);

    return (
      <div className="App">
        <button onClick={() => setButtonPopup(true)}>Start</button> 
        <Splash trigger={buttonPopup} setTrigger={setButtonPopup}>     
        <h1>Extinction</h1>
        <Map/>
        </Splash>
      </div>
       
    );
  }


export default App;

