import React from 'react';
import { ScoreElement } from "./styled";

const Score = ({ option, amount, score }) => {
  return (
    <ScoreElement>
      <strong>{amount}</strong> PLN to: <strong>{score}</strong> {option}
    </ScoreElement>
  );
};

export default Score;