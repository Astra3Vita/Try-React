// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState, useEffect } from 'react';
import Board from './components/Board/Board';
import cardValues from './components/CardDetail/CardValue';
// import * as Tone from 'tone'; // sound library
import { Howl } from 'howler'; // sound library Howler.js
import './App.css';

const generateCards = () => {
  // const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const cards = cardValues.concat(cardValues).map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }));
  return cards.sort(() => Math.random() - 0.5);
};

const App = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [score, setScore] = useState(0); // count score
  const [time, setTime] = useState(0); // add state for time
  const [timerActive, setTimerActive] = useState(false); // add for timer

  // const playFlipSound = () => {
  //   const synth = new Tone.Synth().toDestination();
  //   synth.triggerAttackRelease("E4", "8n");
  // };

  // const playMatchSound = () => {
  //   const synth = new Tone.Synth().toDestination();
  //   synth.triggerAttackRelease("A4", "8n");
  // };

  const playClapSound = () => {
    const sound = new Howl({
      src: ['/sounds/clap.mp3']
    });
    sound.play();
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.value === secondCard.value) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.value === firstCard.value ? { ...card, isMatched: true } : card
          )
        );
        // playFlipSound();
        setScore((prevScore) => prevScore + 10);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
          // playMatchSound();
        }, 1000);
      }
      setFlippedCards([]);
    }
  }, [flippedCards]);

  // Part Timer
  useEffect(() => {
    let timer;
    if (timerActive) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timerActive]);

  // Part check all card match?
  useEffect(() => {
    const allMatched = cards.every(card => card.isMatched);
    if (allMatched) {
      setTimerActive(false); // stop timer
      playClapSound();
    }
  }, [cards]);

  const handleCardClick = (clickedCard) => {
    if (flippedCards.length < 2 && !clickedCard.isFlipped && !clickedCard.isMatched) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === clickedCard.id ? { ...card, isFlipped: true } : card
        )
      );
      setFlippedCards((prevFlipped) => [...prevFlipped, clickedCard]);
      if (!timerActive) setTimerActive(true); //start timer when first click
    }
  };

  const resetGame = () => {
    setCards(generateCards());
    setFlippedCards([]);
    setScore(0); //reset score
    setTime(0); // reset time
    setTimerActive(false); // stop timer when reset
  };

  return (
    <div className="App">
      <h1>Card Matching Game</h1>
      <div className="scoreboard">
        <p className='score'>Score: {score}</p>
        <p className='time'>Time: {time}s</p>
      </div>
      
      <button onClick={resetGame}>Reset Game</button>

      <Board cards={cards} onCardClick={handleCardClick} />
    </div>
  );
};

export default App;