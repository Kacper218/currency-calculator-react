import React from 'react';
import "./style.css";

const Score = ({ option, amount, score }) => {
  return (

    <div className="score">
      <strong>{amount}</strong> PLN to: <strong>{score}</strong> {option}
    </div>
  );
};

export default Score;