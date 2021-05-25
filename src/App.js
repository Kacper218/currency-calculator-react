import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Score from './Score';
import Container from './Container';
import { options } from './options';

function App() {

  const [score, setScore] = useState("N/a")
  const [amount, setAmount] = useState(0);
  const [option, setOption] = useState("EUR");

  return (
    <Container>

      <Form
        option={option}
        setOption={setOption}
        amount={amount}
        setAmount={setAmount}
        score={score}
        setScore={setScore}
        options={options}
      />

      <Score
        option={option}
        score={score}
        amount={amount}
      />

    </Container>

  );
};

export default App;
