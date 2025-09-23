import React from 'react';
import { answerMapping, personalityProfiles } from '../data/personalityMap2';
import './style.css'

const analyzeAnswers = (answers) => {
  const score = {
    Seeker: 0,
    Fire: 0,
    Veiled: 0,
    Rational: 0,
    Healer: 0,
    Dual: 0,
  };

  answers.forEach((ans, idx) => {
    const key = answerMapping[idx][ans];
    score[key]++;
  });

  const top = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
  return { type: top, description: personalityProfiles[top] };
};

const Result = ({ answers }) => {
  const result = analyzeAnswers(answers);

  return (
    <div className="result-container">
      <h2>ผลลัพธ์ของคุณคือ...</h2>
      <h3 className="result-type">{result.type}</h3>
      <pre className="result-description">{result.description}</pre>
      <button onClick={() => window.location.reload()}>ลองเล่นใหม่</button>
    </div>
  );
};

export default Result;
