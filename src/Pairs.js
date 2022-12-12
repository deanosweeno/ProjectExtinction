
import './PairsComponents/Pairs.css';
import { useEffect, useState } from 'react';
import SingleCard from './PairsComponents/SingleCard';
import PopupPairs from './PairsComponents/PopupPairs'; 
const PreImgs = ["/PairsImages/1.jpg", "/PairsImages/2.jpg"
, "/PairsImages/3.jpg", "/PairsImages/4.jpg"
, "/PairsImages/5.jpg", "/PairsImages/6.jpg"
, "/PairsImages/7.jpg", "/PairsImages/8.jpg"
, "/PairsImages/9.jpg", "/PairsImages/10.jpg"
, "/PairsImages/11.jpg"]; //Array containing string paths for animal images


var randomImg = () =>{
  return PreImgs[Math.floor(Math.random() * PreImgs.length)];
} //returns number between 0 and PreImgs' length

function Pairs() 
{
  const [img, setimg] =useState(randomImg());
  const [img2, setimg2] =useState(randomImg());
  const [img3, setimg3] =useState(randomImg());
  const [img4, setimg4] =useState(randomImg());
  const [img5, setimg5] =useState(randomImg());
  const [img6, setimg6] =useState(randomImg());

  useState(() => {setimg(randomImg)});
  useState(() => {setimg2(randomImg)});
  useState(() => {setimg3(randomImg)});
  useState(() => {setimg4(randomImg)});
  useState(() => {setimg5(randomImg)});
  useState(() => {setimg6(randomImg)});
  //Generating 6 random images from PreImgs
  //Certain cards may appear more than twice as 'Bonus point'
  //Animals are different in every popup(dolphin will have different images than whale for example)

  const Imgs = [{"src": img, matched: false}, {"src": img2, matched: false}, {"src": img3, matched: false}
  , {"src": img4, matched: false}, {"src": img5, matched: false}, {"src": img6, matched: false}]; // Creating array of 6 paths for game from PreImgs

  const [buttonPopup, setButtonPopup] = useState(false);
  const [turns, setTurns] = useState(0)
  const [cards, setCards] = useState([])
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  //creating constants for later use

  const shuffle = () => {
    const shuffled = [...Imgs, ...Imgs].sort(() => Math.random() - 0.5).map((card) => ({...card, id: Math.random() })) // creates pairs of objects and shuffles, while assigning IDs 
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffled)
    setTurns(0)
  }//shuffles card positions upon reset button click


  const [disabled, setDisabled] = useState(false) //For disabling clicking of cards(if correct or during timer reset)
 
 const handleChoice = (card) => {choiceOne ? setChoiceTwo(card) : setChoiceOne(card)} //handling if user has clicked at least one card

 useEffect(() => 
 {
  if(choiceOne && choiceTwo)
  {
    setDisabled(true)
    if(choiceOne.src === choiceTwo.src)
    { //If cards match
      setCards(prevCards => {return prevCards.map(card => {
        if(card.src === choiceOne.src)
        {
          return{...card, matched: true} // returning a match
        }else{return card}})})
      resetTurn()//ends current turn
    }
    else
    {
      setTimeout(() => resetTurn(), 1200) //Setting a timer before cards turn back over if not matching 
    }
  }
}, [choiceOne, choiceTwo])

 const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
  setDisabled(false)} // Monitors, increments and resets turns once appropriate actions have occurred

  useEffect(() => {shuffle()}, []) // Shuffles cards, will be different on every instance of the game i.e. when reset is pushed

  return (
    <div className="Pairs"> 
      <button classname = "OPEN" onClick={() => setButtonPopup(true)}>Open Pairs</button> 
      <PopupPairs trigger={buttonPopup} setTrigger={setButtonPopup}>   
      <button onClick={shuffle}>Retry</button> 
      <div className="Grid">
        {cards.map(card => (
          <SingleCard 
          key={card.id} 
          card={card} 
          handleChoice={handleChoice}
          flipped={card ===choiceOne || card === choiceTwo || card.matched}
          disabled ={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
      </PopupPairs>  
      
    </div>
  );
}


export default Pairs;