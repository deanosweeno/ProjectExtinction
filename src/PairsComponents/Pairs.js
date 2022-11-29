
import './Pairs.css';
import { useEffect, useState } from 'react'
import SingleCard from './SingleCard'
import PopupPairs from './PopupPairs'
const Imgs = [{ "src": "/PairsImages/01.jpg", matched: false }, { "src": "/PairsImages/02.jpg", matched: false }, { "src": "/PairsImages/03.jpg", matched: false }] //will call properties from external array here
function Pairs() 
{
  const [buttonPopup, setButtonPopup] = useState(false);
  const [turns, setTurns] = useState(0)
  const [cards, setCards] = useState([])
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const shuffle = () => {
    const shuffled = [...Imgs, ...Imgs].sort(() => Math.random() - 0.5).map((card) => ({...card, id: Math.random() })) // creates pairs of objects and shuffles, while assigning IDs 
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffled)
    setTurns(0)
  }
  const [disabled, setDisabled] = useState(false)
 
 const handleChoice = (card) => {choiceOne ? setChoiceTwo(card) : setChoiceOne(card)}

 useEffect(() => 
 {
  if(choiceOne && choiceTwo)
  {
    setDisabled(true)
    if(choiceOne.src === choiceTwo.src)
    {
      setCards(prevCards => {return prevCards.map(card => {
        if(card.src === choiceOne.src)
        {
          return{...card, matched: true}
        }else{return card}})})
      resetTurn()
    }
    else
    {
      setTimeout(() => resetTurn(), 1200)
    }
  }
}, [choiceOne, choiceTwo])

 const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
  setDisabled(false)}

  useEffect(() => {shuffle()}, [])

  return (
    <div className="App">
      <button onClick={() => setButtonPopup(true)}>Open Pairs</button> 
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
