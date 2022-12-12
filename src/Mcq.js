import React, { useState, useEffect} from 'react';
import './McqComponent/Mcq.css';
import PopupMcq from './McqComponent/PopupMcq'; 
const animalNames = ["crocodile", "condor", "dolphin", "rhino", "panda", "Leopard", "whale", "PBear", "peng", "mink", "jaguar"];
function Mcq() {
  //properties
  const[data,setData] = useState()


  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("https://raw.githubusercontent.com/deanosweeno/ProjectExtinction/main/public/animalAPI.json");
      const data = await response.json();
      setData(data.animalList)
    };
    loadData();
  },[])
<<<<<<< Updated upstream
  const array = [data]
  console.log(array[0])
=======
  //console.log()
  const test = [{whale}, {croc}, {mink}, {jaguar}, {condor}, {dolph}, {panda}, {peng}, {rhino}, {leopard}, {PBears}, {crocodile}];
  console.log((test[11]))
>>>>>>> Stashed changes
  const [buttonPopup, setButtonPopup] = useState(false);
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
<<<<<<< Updated upstream
  const questions = [
    {
      text: "What colour is a lion?",
      options: [
        { id: 0, text: "Red", isCorrect: false },
        { id: 1, text: "Gold", isCorrect: true },
        { id: 2, text: "Green", isCorrect: false },
        { id: 3, text: "Black", isCorrect: false }
=======
  const questions1 = [
    { 
      text: "What type of area does a crocodile prefer?",
      options: [
        { id: 0, text: croc.habitat, isCorrect: true },
        { id: 1, text: peng.habitat, isCorrect: false },
        { id: 2, text: jaguar.habitat, isCorrect: false },
        { id: 3, text: whale, isCorrect: false }
      ]
    },
    { 
      text: "What does a panda eat?",
      options: [
        { id: 0, text: croc.food, isCorrect: false },
        { id: 1, text: panda.food, isCorrect: true },
        { id: 2, text: mink.food, isCorrect: false },
        { id: 3, text: condor.food, isCorrect: false }
      ]
    },
    { 
      text: "Where does a mink live?",
      options: [
        { id: 0, text: croc.region, isCorrect: false },
        { id: 1, text: panda.region, isCorrect: false },
        { id: 2, text: mink.region, isCorrect: true },
        { id: 3, text: peng.region, isCorrect: false }
      ]
    }
  ];
  const questions2 = [
    { 
      text: "What type of area does a condor prefer?",
      options: [
        { id: 0, text: PBears.habitat, isCorrect: false },
        { id: 1, text: peng.habitat, isCorrect: false },
        { id: 2, text: condor.habitat, isCorrect: true },
        { id: 3, text: dolph.habitat, isCorrect: false }
      ]
    },
    {
      text: "What does a penguin eat?",
      options: [
        { id: 0, text: PBears.food, isCorrect: false },
        { id: 1, text: peng.food, isCorrect: true },
        { id: 2, text: condor.food, isCorrect: false },
        { id: 3, text: dolph.food, food: false }
      ]
    },
    {
      text: "Where does a Polar Bear live?",
      options: [
        { id: 0, text: PBears.region, isCorrect: true },
        { id: 1, text: peng.region, isCorrect: false },
        { id: 2, text: condor.region, isCorrect: false },
        { id: 3, text: dolph.region, food: false }
>>>>>>> Stashed changes
      ]
    },
    {
      text: "What colour is a Beetle?",
      options: [
        { id: 0, text: "Red", isCorrect: false },
        { id: 1, text: "Gold", isCorrect: false },
        { id: 2, text: "Green", isCorrect: false },
        { id: 3, text: "Black", isCorrect: true }
      ]
    },
    {
      text: "What colour is a Flamingo?",
      options: [
        { id: 0, text: "Red", isCorrect: false },
        { id: 1, text: "Gold", isCorrect: false },
        { id: 2, text: "Pink", isCorrect: true },
        { id: 3, text: "Black", isCorrect: false }
      ]
    },
    {
      text: "What colour is a Elephant?",
      options: [
        { id: 0, text: "Red", isCorrect: false },
        { id: 1, text: "Gold", isCorrect: false },
        { id: 2, text: "Green", isCorrect: false },
        { id: 3, text: "Grey", isCorrect: true }
      ]
    }
    
  ];
<<<<<<< Updated upstream
=======
  const questions3 = [
    { 
      text: "What type of area does a condor prefer?",
      options: [
        { id: 0, text: jaguar.habitat, isCorrect: false },
        { id: 1, text: peng.habitat, isCorrect: false },
        { id: 2, text: condor.habitat, isCorrect: true },
        { id: 3, text: dolph.habitat, isCorrect: false }
      ]
    },
  ]
>>>>>>> Stashed changes

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
      <button class = "OPMCQ" onClick={() => setButtonPopup(true)}>Open Mcq</button>   
      <PopupMcq trigger={buttonPopup} setTrigger={setButtonPopup}>
      {showFinalResults ? (
        /*Final results card*/
        <div class="final-results">
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
        <div class="question-card">
          <h2>
            Question {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 class="question-text">{questions[currentQuestion].text}</h3>

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

