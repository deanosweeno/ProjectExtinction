import React, { useState, useEffect} from 'react';
import './McqComponent/Mcq.css';
import PopupMcq from './McqComponent/PopupMcq';
const animalNames = ["crocodile", "condor", "dolphin", "rhino", "panda", "Leopard", "whale", "PBear", "peng", "mink", "jaguar"];

function Mcq() {
  //properties
 const[croc,setCroc] = useState([])
 const[dolph,setDolph] = useState([])
 const[condor,setCondor] = useState([])
 const[panda,setPanda] = useState([])
 const[rhino,setRhino] = useState([])
 const[PBears,setPBears] = useState([])
 const[leopard,setLeopard] = useState([])
 const[whale,setWhale] = useState([])
 const[peng,setPeng] = useState([])
 const[mink,setMink] = useState([])
 const[jaguar,setJaguar] = useState([])
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("https://raw.githubusercontent.com/deanosweeno/ProjectExtinction/main/public/animalAPI.json");
      const [data1] = await response.json();
      setCroc(data1.crocodile)
      setDolph(data1.dolphin)
      setCondor(data1.condor)
      setPanda(data1.panda)
      setRhino(data1.rhino)
      setPBears(data1.PBears)
      setLeopard(data1.leopard)
      setWhale(data1.whale)
      setPeng(data1.peng)
      setMink(data1.mink)
      setJaguar(data1.jaguar)
    };
    loadData();
  },[])
  //console.log()
  const test = [{whale}, {croc}, {mink}, {jaguar}];
  console.log((test[3]))
  const [buttonPopup, setButtonPopup] = useState(false);
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    { 
      text: "Where does a crocodile live?",
      options: [
        { id: 0, text: croc.habitat, isCorrect: true },
        { id: 1, text: panda.habitat, isCorrect: false },
        { id: 2, text: test[2].habitat, isCorrect: false },
        { id: 3, text: "Black", isCorrect: false }
      ]
    }
  ];
 

  //helperFunction
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };

  return (
    //section headers
    <div class="Cards">
      <button className = "OPMCQ" onClick={() => setButtonPopup(true)}>Open Mcq</button>
      <PopupMcq trigger={buttonPopup} setTrigger={setButtonPopup}>
      {showFinalResults ? (
        /*Final results card*/
        <div className="final-results">
          <h1>Final Result</h1>
          <h2>
            {" "}
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart Game?</button>
        </div>
      ) : (
        /* Question Card*/
        <div className="question-card">
          <h2>
            Question {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      </PopupMcq>
    </div>
  );
}
export default Mcq;

