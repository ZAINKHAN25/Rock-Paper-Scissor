import React, { useState } from 'react';
import './App.css';

function App() {
  const [isGameOpen, setIsGameOpen] = useState(false);

  function Game() {
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [winnerName, setWinnerName] = useState('Please Select the options!');

    let [computeransw, setcomputeransw] = useState('');
    let [useransw, setuseransw] = useState('')

    function resetwithoutreload() {
      setTimeout(() => {
        setcomputeransw('');
        setuseransw('');
        setPlayerScore(0);
        setComputerScore(0);
        setWinnerName('Please Select the options!');
      }, 800)
    }

    function userSelection(userChoice) {
      setTimeout(() => {

        const allChoices = ['ROCK', 'PAPER', 'SCISSORS'];
        const randomNum = Math.floor(Math.random() * allChoices.length);
        const computerChoice = allChoices[randomNum];

        setcomputeransw(computerChoice)
        setuseransw(userChoice)

        if (userChoice === computerChoice) {
          setWinnerName('Match Tie !');
        } else if (
          (userChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
          (userChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
          (userChoice === 'PAPER' && computerChoice === 'ROCK')
        ) {
          setWinnerName('YOU WON ! 🎉');
          setPlayerScore(playerScore + 1);
        } else {
          setWinnerName('COMPUTER WON ! 🎉');
          setComputerScore(computerScore + 1);
        }
      }, 500)
    }

    return (
      <div className="gamewrapper">
        <h1 className="gameh1">Rock Paper Scissors with Compose</h1>
        <h3 className="gameh3" onClick={resetwithoutreload}>RESET THE TOUR</h3>
        <div className="scorediv">
          <span>PLAYER SCORE: {playerScore}</span>
          <span>COMPUTER SCORE: {computerScore}</span>
        </div>
        <div className="winnerdiv">{winnerName}</div>
        <div className="versesarea">
          <span className="player">
            {/* i want that if user pick scissor so that come */}
            {useransw === 'SCISSORS' && <i class="fa-solid fa-hand-scissors fa-flip-horizontal"></i>}

            {/* if user select the rock so that come  */}
            {useransw === 'ROCK' && <i class="fa-solid fa-hand-fist fa-rotate-90"></i>}

            {/* if user selest the paper so that come  */}
            {useransw === 'PAPER' && <i class="fa-solid fa-hand fa-rotate-90"></i>}
          </span>
          <h3 className='vs'>{useransw && 'vs'}</h3>
          <span className="computer">
            {/* i want that if computer pick scissor so that come */}
            {computeransw === 'SCISSORS' && <i class="fa-regular fa-hand-scissors fa-flip-horizontal"></i>}

            {/* if computer select the rock so that come  */}
            {computeransw === 'ROCK' && <i class="fa-solid fa-hand-fist fa-rotate-90"></i>}

            {/* if user selest the paper so that come  */}
            {computeransw === 'PAPER' && <i class="fa-regular fa-hand fa-rotate-90"></i>}
          </span>
        </div>
        <div className="choseyourmove">Choose your move, rock paper or scissors?</div>
        <div className="btnarea">
          <button onClick={() => userSelection('ROCK')}>ROCK</button>
          <button onClick={() => userSelection('PAPER')}>PAPER</button>
          <button onClick={() => userSelection('SCISSORS')}>SCISSORS</button>
        </div>
      </div>
    );
  }

  function Home() {
    return (
      <div className="homewrapper">
        <button onClick={() => setIsGameOpen(true)} className="btnofhome">
          PLAY
        </button>
        <p className="paraofhome">Rock Paper Scissors with Compose</p>
      </div>
    );
  }

  return (
    <div className="App">
      {isGameOpen ? <Game /> : <Home />}
    </div>
  );
}

export default App;
