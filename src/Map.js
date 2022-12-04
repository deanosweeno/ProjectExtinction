import React, {useState} from "react";
import './Map.css';
import Pairs from './Pairs'
import Mcq from './Mcq'

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
            <Pairs/>
            <Mcq/>
              <div className='popup-header-Penguin'>
                <h1>Penguins</h1>
                <h1 onClick={closePopup}>X</h1>
              </div>
              <div>
                { <img className = "PenguinPic" src = "/images/Penguin.png" alt =""></img>}
                <p> <strong>Status: </strong>Threatened</p>
                <p> Penguins are a group of aquatic flightless birds. 
                  They live almost exclusively in the Southern Hemisphere: 
                  only one species, the Galápagos penguin, is found north of the Equator. 
                  Highly adapted for life in the water, 
                  penguins have countershaded dark and white plumage and flippers for swimming.</p>
              </div>
            </div>
          </div>:""}
        </div>

        <div>
        {popupJaguar?
          <div className ='main-Jaguar'>
            <div className='popup-Jaguar'>
              <Pairs/>
              <div className='popup-header-Jaguar'>
                <h1>Jaguars</h1>
                <h1 onClick={closePopupJaguar}>X</h1>
              </div>
              <div>
                { <img className = "JaguarPic" src = "/images/Jaguar.png" alt =""></img>}
                <p> <strong>Status: </strong>Near Threatened</p>
                <p> The jaguar is a large cat species and the only living member of the genus Panthera native to the Americas. 
                  With a body length of up to 1.85 m and a weight of up to 158 kg, 
                  it is the largest cat species in the Americas and the third largest in the world.</p>
                
              </div>
            </div>
          </div>:""}
        </div>

        <div>
        {popupDolphin?
          <div className ='main-Dolphin'>
            <div className='popup-Dolphin'>
            <Pairs/>
              <div className='popup-header-Dolphin'>
                <h1>Dolphins</h1>
                <h1 onClick={closePopupDolphin}>X</h1>
              </div>
              <div>
                { <img className = "DolphinPic" src = "/images/dolphin pic.jpg" alt =""></img> }
                <p> <strong>Status: </strong> Endangered</p>
                <p> A dolphin is an aquatic mammal within the infraorder Cetacea. 
                  Dolphin species belong to the families Delphinidae, Platanistidae, Iniidae, Pontoporiidae, and the extinct Lipotidae.
                  There are 40 extant species named as dolphins. </p>
              </div>
            </div>
          </div>:""}
        </div>



        <div>
        {popupWhale?
          <div className ='main-Whale'>
            <div className='popup-Whale'>
            <Pairs/>
              <div className='popup-header-Whale'>
                <h1>Whales</h1>
                <h1 onClick={closePopupWhale}>X</h1>
              </div>
              <div>
                { <img className = "WhalePic" src = "/images/Whales.png" alt =""></img> }
                <p> <strong>Status: </strong>Critically Endangered </p>
                <p> Whales are a widely distributed and diverse group of fully aquatic placental marine mammals. 
                  As an informal and colloquial grouping, they correspond to large members of the infraorder Cetacea, i.e. 
                  all cetaceans apart from dolphins and porpoises. </p>
              </div>
            </div>
          </div>:""}
        </div>

        <div>
        {popupCali?
          <div className ='main-Calicondor'>
            <div className='popup-Calicondor'>
            <Pairs/>
              <div className='popup-header-Calicondor'>
                <h1>California Condors</h1>
                <h1 onClick={closePopupCali}>X</h1>
              </div>
              <div>
                { <img className = "CalicondorPic" src = "/images/condor.png" alt =""></img> }
                <p> <strong>Status: </strong> Critically Endangered</p>
                <p> The California condor (Gymnogyps californianus) is a New World vulture and the largest North American land bird. 
                  It became extinct in the wild in 1987 when all remaining wild individuals were captured, 
                  but has since been reintroduced to northern Arizona and southern Utah (including the Grand Canyon area and Zion National Park),
                   the coastal mountains of California, and northern Baja California in Mexico.
                   Although four other fossil members are known, it is the only surviving member of the genus Gymnogyps. 
                   The species is listed by the International Union for the Conservation of Nature as Critically 
                   Endangered, and similarly considered Critically Imperiled by NatureServe. </p>
              </div>
            </div>
          </div>:""}
        </div>

        <div>
        {popupCrocodile?
          <div className ='main-Crocodile'>
            <div className='popup-Crocodile'>
            <Pairs/>
              <div className='popup-header-Crocodile'>
                <h1>Crocodiles</h1>
                <h1 onClick={closePopupCrocodile}>X</h1>
              </div>
              <div>
                { <img className = "CrocodilePic" src = "/images/crocodile.png" alt =""></img> }
                <p> <strong>Status: </strong> Critically Endangered</p>
                <p>Crocodiles or true crocodiles are large semiaquatic reptiles 
                  that live throughout the tropics in Africa, Asia, the Americas and Australia.  </p>
              </div>
            </div>
          </div>:""}
        </div>

        <div>
        {popupLeopard?
          <div className ='main-Leopard'>
            <div className='popup-Leopard'>
            <Pairs/>
              <div className='popup-header-Leopard'>
                <h1>Leopard</h1>
                <h1 onClick={closePopupLeopard}>X</h1>
              </div>
              <div>
                { <img className = "LeopardPic" src = "/images/leopard.png" alt =""></img> }
                <p> <strong>Status: </strong>Endangered </p>
                <p> The leopard is one of the five extant species in the genus Panthera, a member of the cat family, Felidae.
                   It occurs in a wide range in sub-Saharan Africa, in some parts of Western and Central Asia, 
                   Southern Russia, and on the Indian subcontinent to Southeast and East Asia. </p>

              </div>
            </div>
          </div>:""}
        </div>




        <div>
        {popupPolarBear?
          <div className ='main-polar-bear'>
            <div className='popup-polar-bear'>
            <Pairs/>
              <div className='popup-header-polar-bear'>
                <h1>Polar Bears</h1>
                <h1 onClick={closePopupPolarBear}>X</h1>
              </div>
              <div>
                { <img className = "PolarBearPic" src = "/images/polarbears.png" alt =""></img> }
                <p> <strong>Status: </strong> Critically Endangered </p>
                <p>The polar bear is a hypercarnivorous bear whose native range lies largely within the Arctic Circle, 
                  encompassing the Arctic Ocean, its surrounding seas and surrounding land masses. 
                  It is the largest extant bear species, as well as the largest extant land carnivore.  </p>
              </div>
            </div>
          </div>:""}
        </div>

        <div>
        {popupMink?
          <div className ='main-Mink'>
            <div className='popup-Mink'>
            <Pairs/>
              <div className='popup-header-Mink'>
                <h1>Minks</h1>
                <h1 onClick={closePopupMink}>X</h1>
              </div>
              <div>
                { <img className = "MinkPic" src = "/images/mink.png" alt =""></img> }
                <p> <strong>Status: </strong> (North America: Least Concern) (Europe: Critically Endagered)</p>
                <p>Mink are dark-colored, semiaquatic, carnivorous mammals of the genera Neogale and Mustela 
                  and part of the family Mustelidae, which also includes weasels, otters, and ferrets.
                   There are two extant species referred to as "mink": the American mink and the European mink  </p>
              </div>
            </div>
          </div>:""}
        </div>

        <div>
        {popupPanda?
          <div className ='main-Panda'>
            <div className='popup-Panda'>
            <Pairs/>
              <div className='popup-header-Panda'>
                <h1>Pandas</h1>
                <h1 onClick={closePopupPanda}>X</h1>
              </div>
              <div>
                { <img className = "PandaPic" src = "/images/panda.png" alt =""></img> }
                <p> <strong>Status: </strong>Vulnerable </p>
                <p>The giant panda, also known as the panda bear, is a bear species endemic to China.
                   It is characterised by its bold black-and-white coat and rotund body.
                   The name "giant panda" is sometimes used to distinguish it from the red panda, a neighboring musteloid.  </p>
              </div>
            </div>
          </div>:""}
        </div>


        <div>
        {popupCrocodile?
          <div className ='main-Crocodile'>
            <div className='popup-Crocodile'>
            <Pairs/>
              <div className='popup-header-Crocodile'>
                <h1>Crocodiles</h1>
                <h1 onClick={closePopupCrocodile}>X</h1>
              </div>
              <div>
                { <img className = "CrocodilePic" src = "/images/crocodile.png" alt =""></img> }
                <p> <strong>Status: </strong> Critically Endangered</p>
                <p>Crocodiles or true crocodiles are large semiaquatic reptiles 
                  that live throughout the tropics in Africa, Asia, the Americas and Australia.  </p>
                
              </div>
            </div>
          </div>:""}
        </div>

        <div>
        {popupRhino?
          <div className ='main-Rhino'>
            <div className='popup-Rhino'>
            <Pairs/>
              <div className='popup-header-Rhino'>
                <h1>Rhinos</h1>
                <h1 onClick={closePopupRhino}>X</h1>
              </div>
              <div>
                { <img className = "RhinoPic" src = "/images/Rhino.png" alt =""></img> }
                <p> <strong>Status: </strong>Critically Endangered </p>
                <p>A rhinoceros, commonly abbreviated to rhino,
                   is a member of any of the five extant species of odd-toed ungulates in the family Rhinocerotidae. 
                  Two of the extant species are native to Africa, and three to South and Southeast Asia. </p>
                
              </div>
            </div>
          </div>:""}
        </div>

        


        </div> //end of "Map" 
      
       
      
    );
  
}


export default Map;
