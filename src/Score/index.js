import React from 'react';
import "./style.css";

const Score = ({ option, amount, score }) => {
  return (

    <div className="score">
      <strong>{amount}</strong> złotych to: <strong>{score}</strong> {option === "euro" ? "euro" : "magicznej rudy"}
    </div>
  );
};

export default Score;