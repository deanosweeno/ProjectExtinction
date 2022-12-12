import './SingleCard.css'

export default function SingleCard({card, handleChoice, flipped, disabled })
{
  const handleClick = () => {
    if(!disabled){ // Invokes handle choice command which saves and compares the two user selections while the game is running
      handleChoice(card)
    }
  }
    return(
        <div>
            <div className="card">
            <div className={flipped ? "flipped" : ""}>
              <img className ="top" src={card.src} alt="card top"/>
              <img className ="bot" src="/PairsImages/05.jpg" onClick={handleClick} alt="card bottom" />
            </div>
          </div>
        </div>
    )
} //Assigns image files to tops and bottoms of individual cards