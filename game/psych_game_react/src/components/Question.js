import React from 'react';
import './styleQuestion.css';

const Question = ({ question, onAnswer }) => {
  return (
    <div className="question-container">
      <h2>{question.text}</h2>
      <ul>
        {question.options.map((option, idx) => (
          <li key={idx}>
            <button onClick={() => onAnswer(idx)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
