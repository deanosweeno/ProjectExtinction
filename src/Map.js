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
                  penguins have countershaded dark and white plumage and flippers for swimming.
                  Penguins eat squids, krill, and fish. </p>
              </div>
            </div>
          </div>:""}
        </div>

        <div>
        {popupJaguar?
          <div className ='main-Jaguar'>
            <div className='popup-Jaguar'>
              <Pairs/>
              <Mcq/>
              <div className='popup-header-Jaguar'>
                <h1>Jaguars</h1>
                <h1 onClick={closePopupJaguar}>X</h1>
              </div>
              <div>
                { <img className = "JaguarPic" src = "/images/Jaguar.png" alt =""></img>}
                <p> <strong>Status: </strong>Near Threatened</p>
                <p> The jaguar is a large cat species.  
                  It is the largest cat species in the Americas.
                  Jaguars often live in the tropics in South America.
                  Jaguars can prey upon almost anything they come across,
                  deer, tortoises, fish, birds and monkeys.</p>
                
              </div>
            </div>
          </div>:""}
        </div>

        <div>
        {popupDolphin?
          <div className ='main-Dolphin'>
            <div className='popup-Dolphin'>
            <Pairs/>
            <Mcq/>
              <div className='popup-header-Dolphin'>
                <h1>Dolphins</h1>
                <h1 onClick={closePopupDolphin}>X</h1>
              </div>
              <div>
                { <img className = "DolphinPic" src = "/images/dolphin pic.jpg" alt =""></img> }
                <p> <strong>Status: </strong> Endangered</p>
                <p> A dolphin is an aquatic mammal. 
                  Dolphins live in open oceans and coastal waters.
                  Dolphins are active predators and eat a wide variety of fishes, squids, 
                  and shrimps.
                  </p>
              </div>
            </div>
          </div>:""}
        </div>



        <div>
        {popupWhale?
          <div className ='main-Whale'>
            <div className='popup-Whale'>
            <Pairs/>
            <Mcq/>
              <div className='popup-header-Whale'>
                <h1>Whales</h1>
                <h1 onClick={closePopupWhale}>X</h1>
              </div>
              <div>
                { <img className = "WhalePic" src = "/images/Whales.png" alt =""></img> }
                <p> <strong>Status: </strong>Critically Endangered </p>
                <p> Whales are widely distributed grorup of aquatic mammals.
                  Whales swim in all of the major oceans from the Arctic and Antarctic environments to the tropics
                  located near the center of the equator.
                  They love to eat krill, fish, phytoplankton, and algae. </p>
              </div>
            </div>
          </div>:""}
        </div>

        <div>
        {popupCali?
          <div className ='main-Calicondor'>
            <div className='popup-Calicondor'>
            <Pairs/>
            <Mcq/>
              <div className='popup-header-Calicondor'>
                <h1>California Condors</h1>
                <h1 onClick={closePopupCali}>X</h1>
              </div>
              <div>
                { <img className = "CalicondorPic" src = "/images/condor.png" alt =""></img> }
                <p> <strong>Status: </strong> Critically Endangered</p>
                <p> The California condor is a vulture and the largest land bird in North American. 
                    It is extinct in the wild, but has since been reintroduced to Arizona, Utah, and California.
                   They are scavengers and love to eat carcasses of deer, pigs, cattle, sea lions, whales, and other animals. </p>
              </div>
            </div>
          </div>:""}
        </div>


        <div>
        {popupLeopard?
          <div className ='main-Leopard'>
            <div className='popup-Leopard'>
            <Pairs/>
            <Mcq/>
              <div className='popup-header-Leopard'>
                <h1>Leopard</h1>
                <h1 onClick={closePopupLeopard}>X</h1>
              </div>
              <div>
                { <img className = "LeopardPic" src = "/images/leopard.png" alt =""></img> }
                <p> <strong>Status: </strong>Endangered </p>
                <p> The leopard lives in some parts of Asia, Russia, India, and Africa.
                    Their habitat is deserts and grasslands.
                   Their diet depends on what is around them, such as small mamals, fish, and birds. </p>

              </div>
            </div>
          </div>:""}
        </div>




        <div>
        {popupPolarBear?
          <div className ='main-polar-bear'>
            <div className='popup-polar-bear'>
            <Pairs/>
            <Mcq/>
              <div className='popup-header-polar-bear'>
                <h1>Polar Bears</h1>
                <h1 onClick={closePopupPolarBear}>X</h1>
              </div>
              <div>
                { <img className = "PolarBearPic" src = "/images/polarbears.png" alt =""></img> }
                <p> <strong>Status: </strong> Critically Endangered </p>
                <p>The polar bear lives largely within the Arctic Circle.
                  They like sea ice. 
                  It is the largest bear species, as well as the largest land carnivore.
                  Polar bears favurite food is seals. </p>
              </div>
            </div>
          </div>:""}
        </div>

        <div>
        {popupMink?
          <div className ='main-Mink'>
            <div className='popup-Mink'>
            <Pairs/>
            <Mcq/>
              <div className='popup-header-Mink'>
                <h1>Minks</h1>
                <h1 onClick={closePopupMink}>X</h1>
              </div>
              <div>
                { <img className = "MinkPic" src = "/images/mink.png" alt =""></img> }
                <p> <strong>Status: </strong> (North America: Least Concern) (Europe: Critically Endagered)</p>
                <p>Mink are dark-colored mammals, they like to live in forested land and water.
                   They love slow moving fresh water body such as rivers, lakes, ponds or streams. 
                   Mink hunt muskrats, rabbits, birds, frogs, fish, crayfish and insects.
                   During the winter, they sometimes kill more than they need and stock
                    food in their dens. Minks can climb trees and swim underwater to catch prey.
                    </p>
              </div>
            </div>
          </div>:""}
        </div>

        <div>
        {popupPanda?
          <div className ='main-Panda'>
            <div className='popup-Panda'>
            <Pairs/>
            <Mcq/>
              <div className='popup-header-Panda'>
                <h1>Pandas</h1>
                <h1 onClick={closePopupPanda}>X</h1>
              </div>
              <div>
                { <img className = "PandaPic" src = "/images/panda.png" alt =""></img> }
                <p> <strong>Status: </strong>Vulnerable </p>
                <p>The giant panda, also known as the panda bear, is a bear species endemic to China.
                Pandas live mainly in temperate forests high in the mountains of southwest China, 
                where they subsist almost entirely on bamboo.
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
            <Mcq/>
              <div className='popup-header-Crocodile'>
                <h1>Crocodiles</h1>
                <h1 onClick={closePopupCrocodile}>X</h1>
              </div>
              <div>
                { <img className = "CrocodilePic" src = "/images/crocodile.png" alt =""></img> }
                <p> <strong>Status: </strong> Threatened</p>
                <p>Crocodiles are large semiaquatic reptiles 
                  that live throughout the tropics in Africa, Asia, the Americas and Australia. Since
                  they are semiaquatic, they tend to congregate in habitats such as rivers,
                  lakes and swamps. Crocodiles are  carnivorous, so they eat a 
                  variety of things, such as small mammals, frogs, insects, lizards etc.</p>
              </div>
            </div>
          </div>:""}
        </div>

        <div>
        {popupRhino?
          <div className ='main-Rhino'>
            <div className='popup-Rhino'>
            <Pairs/>
            <Mcq/>
              <div className='popup-header-Rhino'>
                <h1>Rhinos</h1>
                <h1 onClick={closePopupRhino}>X</h1>
              </div>
              <div>
                { <img className = "RhinoPic" src = "/images/Rhino.png" alt =""></img> }
                <p> <strong>Status: </strong>Critically Endangered </p>
                <p>A rhinoceros, commonly abbreviated to rhino,
                   is a member of any of the five extant species of odd-toed ungulates in the family Rhinocerotidae. 
                  Two of the extant species are native to Africa, and three to South and Southeast Asia.
                  Black rhinos are browsers that get most of their sustenance from eating trees and bushes. 
                  They use their lips to pluck leaves and fruit from the branches.</p>
                 
              </div>
            </div>
          </div>:""}
        </div>

        


        </div> //end of "Map" 
      
       
      
    );
  
}


export default Map;
