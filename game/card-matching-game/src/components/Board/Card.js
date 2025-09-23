// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ card, onClick, isFlipped }) => {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => onClick(card)}>
      <div className="card-front">
        {card.value}
      </div>
      <div className="card-back"></div>
    </div>
  );
};

export default Card;