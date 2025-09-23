// src/components/Board.js
import React from 'react';
import Card from './Card';
import './Board.css';

const Board = ({ cards, onCardClick }) => {
  return (
    <div className="board">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={onCardClick} isFlipped={card.isFlipped} />
      ))}
    </div>
  );
};

export default Board;