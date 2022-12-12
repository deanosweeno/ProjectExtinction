import React, { useState, useEffect} from 'react';
import './McqComponent/Mcq.css';
import PopupMcq from './McqComponent/PopupMcq';
const animalNames = ["crocodile", "condor", "dolphin", "rhino", "panda", "Leopard", "whale", "PBear", "peng", "mink", "jaguar"];
//random animal function to itterate through array
var randomAnimal = () =>{
  return animalNames[Math.floor(Math.random() * animalNames.length)];
}
//declaring animals
function Mcq() {
  //properties
 const[croc,setCroc] = useState([])
 const[dolph,setDolph] = useState([])
 const[condor,setCondor] = useState([])
 const[panda,setPanda] = useState([])
 const[rhino,setRhino] = useState([])
 const[PBear,setPBears] = useState([])
 const[leopard,setLeopard] = useState([])
 const[whale,setWhale] = useState([])
 const[peng,setPeng] = useState([])
 const[mink,setMink] = useState([])
 const[jaguar,setJaguar] = useState([])
//assigning animal variable 
//assigning wrong answer variable
 const [animal, setAnimal] =useState(randomAnimal());
 const [wrong1, setWrong1] =useState(randomAnimal());
 const [wrong2, setWrong2] =useState(randomAnimal());
 const [wrong3, setWrong3] =useState(randomAnimal());
 useState(() => {setAnimal(randomAnimal)});
 useState(() => {setWrong1(randomAnimal)});
 useState(() => {setWrong2(randomAnimal)});
 useState(() => {setWrong3(randomAnimal)});
 //declaring variables
 var qAnim = "";
 var anim;
 var w1;
 var w2;
 var w3;
 //if else statement to display animal on MCQ
 if(animal == "crocodile")
 {
  anim = croc;
  qAnim = "crocodile";
 }
 else if(animal == "dolphin")
 {
  anim = dolph;
  qAnim = "dolphin";
 }
 else if(animal == "condor")
 {
  anim = condor;
  qAnim = "California condor";
 }
 else if(animal == "rhino")
 {
  anim = rhino;
  qAnim = "rhino";
 }
 else if(animal == "panda")
 {
  anim = panda;
  qAnim = "panda";
 }
 else if(animal == "PBear")
 {
  anim = PBear;
  qAnim = "polar bear";
 }
 else if(animal == "leopard")
 {
  anim = leopard;
  qAnim = "leopard";
 }
 else if(animal == "whale")
 {
  anim = whale;
  qAnim = "whale";
 }
 else if(animal == "peng")
 {
  anim = peng;
  qAnim = "penguin";
 }
 else if(animal == "mink")
 {
  anim = mink;
  qAnim = "mink";
 }
 else if(animal == "jaguar")
 {
  anim = jaguar;
  qAnim = "jaguar";
 }

 console.log(jaguar);
  //accessing external JSON array
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
  const [buttonPopup, setButtonPopup] = useState(false);
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //new array for mcq questions and answers
  const questions = [
    { 
      //question 1 with random animal and corresponding correct answer and random incorrect answers
      text: "What habitat does a "+qAnim+" live in?",
      options: [
        { id: 0, text: anim.habitat, isCorrect: true },
        { id: 1, text: anim.region, isCorrect: false },
        { id: 2, text: "Mountains", isCorrect: false },
        { id: 3, text: "Hello World", isCorrect: false }
      ]
    },
    { 
      //question 2 with random animal and corresponding correct answer and random incorrect answers
      text: "What region does a "+qAnim+" live in?",
      options: [
        { id: 0, text: "Western Europes", isCorrect: false },
        { id: 1, text: anim.region, isCorrect: true },
        { id: 2, text: anim.habitat, isCorrect: false },
        { id: 3, text: "Hello World", isCorrect: false }
      ]
    },
    { 
      //question 3 with random animal and corresponding correct answer and random incorrect answers
      text: "What food does a "+qAnim+" eat?",
      options: [
        { id: 0, text: anim.food, isCorrect: true },
        { id: 1, text: "Trees", isCorrect: false },
        { id: 2, text: anim.habitat, isCorrect: false },
        { id: 3, text: "Hello World", isCorrect: false }
      ]
    }
  ];
 

  //if else statement to calcuclate accumulative questions
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
  //reset function
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };

  return (
    //return statement holding MCQ start button
    <div class="Cards">
      <button className = "OPMCQ" onClick={() => setButtonPopup(true)}>Open Mcq</button>
      <PopupMcq trigger={buttonPopup} setTrigger={setButtonPopup}>
      {showFinalResults ? (
        //calculating final results
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
        // iterating through questions
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

