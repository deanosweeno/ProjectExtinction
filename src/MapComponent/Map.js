import React, {useState} from "react";
import './Map.css';


function Map () {
  //Default: Penguin --Pop Ups
  const[popup,setPop]=useState(false);
  const handleClickOpen=()=>{
    setPop(!popup);
  }

  const closePopup=()=>{
    setPop(false);
  }

  //California Condor --Pop Ups
  const[popupCali,setPopCali]=useState(false);
  const handleClickOpenCali=()=>{
    setPopCali(!popupCali);
  }

  const closePopupCali=()=>{
    setPopCali(false);
  }


  //Jaguar --Pop Ups
  const[popupJaguar,setPopJaguar]=useState(false);
  const handleClickOpenJaguar=()=>{
    setPopJaguar(!popupJaguar);
  }

  const closePopupJaguar=()=>{
    setPopJaguar(false);
  }

  //Dolphin--Pop Ups
  const[popupDolphin,setPopDolphin]=useState(false);
  const handleClickOpenDolphin=()=>{
    setPopDolphin(!popupDolphin);
  }

  const closePopupDolphin=()=>{
    setPopDolphin(false);
  }

  //Whale --Pop Ups
  const[popupWhale,setPopWhale]=useState(false);
  const handleClickOpenWhale=()=>{
    setPopWhale(!popupWhale);
  }

  const closePopupWhale=()=>{
    setPopWhale(false);
  }

  //Crocodile --Pop Ups
  const[popupCrocodile,setPopCrocodile]=useState(false);
  const handleClickOpenCrocodile=()=>{
    setPopCrocodile(!popupCrocodile);
  }

  const closePopupCrocodile=()=>{
    setPopCrocodile(false);
  }
  //Leopard --Pop Ups
  const[popupLeopard,setPopLeopard]=useState(false);
  const handleClickOpenLeopard=()=>{
    setPopLeopard(!popupLeopard);
  }

  const closePopupLeopard=()=>{
    setPopLeopard(false);
  }

  //PolarBears --Pop Ups
  const[popupPolarBear,setPopPolarBear]=useState(false);
  const handleClickOpenPolarBear=()=>{
      setPopPolarBear(!popupPolarBear);
    }
    const closePopupPolarBear=()=>{
        setPopPolarBear(false);
      }
//Mink--Pop Ups
  const[popupMink,setPopMink]=useState(false);
  const handleClickOpenMink=()=>{
    setPopMink(!popupMink);
    }
    const closePopupMink=()=>{
        setPopMink(false);
      }

      
//Panda--Pop Ups
      const[popupPanda,setPopPanda]=useState(false);
      const handleClickOpenPanda=()=>{
        setPopPanda(!popupPanda);
        }
        const closePopupPanda=()=>{
            setPopPanda(false);
          }
      
          //Rhino --Pop Ups
              const[popupRhino,setPopRhino]=useState(false);
              const handleClickOpenRhino=()=>{
                setPopRhino(!popupRhino);
                }
                const closePopupRhino=()=>{
                    setPopRhino(false);
                  }

    return (
      <div className="Map">
        <img src ="/images/map.png" alt = ""/>
        <button class=  "Penguin" onClick={handleClickOpen} >Penguin</button>
        <button class= "Rhino" onClick={handleClickOpenRhino} >Rhino</button>
        <button class= "Leopard" onClick={handleClickOpenLeopard}>Leopard</button>
        <button class= "PolarBears" onClick={handleClickOpenPolarBear}>Polar Bears</button>
        <button class= "Crocodiles"onClick={handleClickOpenCrocodile}>Crocodiles</button>
        <button class= "Dolphins"onClick={handleClickOpenDolphin}>Dolphins</button>
        <button class= "Pandas"onClick={handleClickOpenPanda}>Panda</button>
        <button class= "Whale"onClick={handleClickOpenWhale}>Whale</button>
        <button class= "Mink"onClick={handleClickOpenMink}>Mink</button>
        <button class ="CaliCon"onClick={handleClickOpenCali}>Cali Condor</button>
        <button class ="Jaguars"onClick={handleClickOpenJaguar}>Jaguars</button>

        
        
        <div>
          {popup?
          <div className ='main-Penguin'>
            <div className='popup-Penguin'>
              <div className='popup-header-Penguin'>
                <h1>Penguin</h1>
                <h1 onClick={closePopup}>X</h1>
              </div>
              <div>
                <p> Paragraph Here </p> 
              </div>
            </div>
          </div>:""}
        </div>

        <div>
          {popupJaguar?
          <div className ='main-Jaguar'>
            <div className='popup-Jaguar'>
              <div className='popup-header-Jaguar'>
                <h1>Jaguars</h1>
                <h1 onClick={closePopupJaguar}>X</h1>
              </div>
              <div>
                <p> Paragraph Here </p> 
              </div>
            </div>
          </div>:""}
        </div>

        <div>
          {popupDolphin?
          <div className ='main-Dolphin'>
            <div className='popup-Dolphin'>
              <div className='popup-header-Dolphin'>
                <h1>Dolphins</h1>
                <h1 onClick={closePopupDolphin}>X</h1>
              </div>
              <div>
                <p> Paragraph Here </p> 
              </div>
            </div>
          </div>:""}
        </div>


        <div>
          {popupWhale?
          <div className ='main-Whale'>
            <div className='popup-Whale'>
              <div className='popup-header-Whale'>
                <h1>Whales</h1>
                <h1 onClick={closePopupWhale}>X</h1>
              </div>
              <div>
                <p> Paragraph Here </p> 
              </div>
            </div>
          </div>:""}
        </div>

        <div>
          {popupCali?
          <div className ='main-Calicondor'>
            <div className='popup-Calicondor'>
              <div className='popup-header-Calicondor'>
                <h1>California condors</h1>
                <h1 onClick={closePopupCali}>X</h1>
              </div>
              <div>
                <p> Paragraph Here </p> 
              </div>
            </div>
          </div>:""}
        </div>

        <div>
          {popupCrocodile?
          <div className ='main-Crocodile'>
            <div className='popup-Crocodile'>
              <div className='popup-header-Crocodile'>
                <h1>Crocodile</h1>
                <h1 onClick={closePopupCrocodile}>X</h1>
              </div>
              <div>
                <p> Paragraph Here </p> 
              </div>
            </div>
          </div>:""}
        </div>

        <div>
          {popupLeopard?
          <div className ='main-Leopard'>
            <div className='popup-Leopard'>
              <div className='popup-header-Leopard'>
                <h1>Leopard</h1>
                <h1 onClick={closePopupLeopard}>X</h1>
              </div>
              <div>
                <p> Paragraph Here </p> 
              </div>
            </div>
          </div>:""}
        </div>



        <div>
          {popupPolarBear?
          <div className ='main-polar-bear'>
            <div className='popup-polar-bear'>
              <div className='popup-header-polar-bear'>
                <h1>Polar bear</h1>
                <h1 onClick={closePopupPolarBear}>X</h1>
              </div>
              <div>
                <p> Paragraph Here </p> 
              </div>
            </div>
          </div>:""}

        </div>

        <div>
          {popupMink?
          <div className ='main-Mink'>
            <div className='popup-Mink'>
              <div className='popup-header-Mink'>
                <h1>Mink</h1>
                <h1 onClick={closePopupMink}>X</h1>
              </div>
              <div>
                <p> Paragraph Here </p> 
              </div>
            </div>
          </div>:""}

        </div>

        <div>
          {popupPanda?
          <div className ='main-Panda'>
            <div className='popup-Panda'>
              <div className='popup-header-Panda'>
                <h1>Panda</h1>
                <h1 onClick={closePopupPanda}>X</h1>
              </div>
              <div>
                <p> Paragraph Here </p> 
              </div>
            </div>
          </div>:""}

        </div>


        <div>
          {popupCrocodile?
          <div className ='main-Panda'>
            <div className='popup-Panda'>
              <div className='popup-header-Panda'>
                <h1>Crocodiles</h1>
                <h1 onClick={closePopupCrocodile}>X</h1>
              </div>
              <div>
                <p> Paragraph Here </p> 
              </div>
            </div>
          </div>:""}

        </div>

        <div>
          {popupRhino?
          <div className ='main-Rhino'>
            <div className='popup-Rhino'>
              <div className='popup-header-Rhino'>
                <h1>Rhino</h1>
                <h1 onClick={closePopupRhino}>X</h1>
              </div>
              <div>
                <p> Paragraph Here </p> 
              </div>
            </div>
          </div>:""}

        </div>

        


        </div> //end of "Map" 
      
       
      
    );
  
}


export default Map;

