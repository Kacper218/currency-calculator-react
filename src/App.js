import './App.css';
import Form from './Form';
import Score from './Score';
import Container from './Container';

function App() {

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

			<Form options={options}/>

			<Score />

		</Container>


	)
}

export default App;
