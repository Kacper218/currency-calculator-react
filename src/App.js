import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Score from './Score';
import Container from './Container';

function App() {

	const [score, setScore] = useState(0)

  const options = [
    {
      id: 1,
      label: "Euro",
      value: "euro",
    },

    {
      id: 2,
      label: "Magiczna Ruda",
      value: "ruda",
    }
  ];

	return (
		<Container>

			<Form score={score} setScore={setScore} options={options}/>

			<Score />

		</Container>


	)
}

export default App;
