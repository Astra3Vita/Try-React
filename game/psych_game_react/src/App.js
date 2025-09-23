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

import React, { useState } from 'react';
import questions from './data/questions';
import Result from './components/Result';
import Question from './components/Question';
import './App.css'

function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (index) => {
    setAnswers([...answers, index]);
    setStep(step + 1);
  };

  return (
    <div className="app-container">
      {step === 0 ? (
        <div className="start-screen">
          <h1>เงาในใจ</h1>
          <p>การเดินทางเข้าไปในใจตัวเอง... พร้อมหรือยัง?</p>
          <button onClick={() => setStep(1)}>เริ่มเกม</button>
        </div>
      ) : step > questions.length ? (
        <Result answers={answers} />
      ) : (
        <Question question={questions[step - 1]} onAnswer={handleAnswer} />
      )}
    </div>
  );
}

export default App;
