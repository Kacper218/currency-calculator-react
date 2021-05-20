import React, { useState } from 'react';
import "./style.css";

const Form = ({ options, setScore, score }) => {

  const [amount, setAmount] = useState(0);
  const [converter, setConverter] = useState("4.51");
  const [option, setOption] = useState("");

  const onSelectChange = ({ target }) => setOption(target.value);

  const onFormSubmit = (event) => {

    switch (option) {
      case "euro":
        setConverter(converter => converter = 4.51);
        break;
      case "ruda":
        setConverter(converter => converter = 21)
        break;
    };

    event.preventDefault();

    console.log(option);
    console.log(converter);

  };

  return (

    <form
      className="form"
      onSubmit={onFormSubmit}
    >
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walutowy</legend>
        <p>
          <span className="form__labelText">
            Wybierz walutę:
            </span>
          <select
            className="form__field"
            name="currency"
            value={option}
            onChange={onSelectChange}
          >
            {options.map((option) => (
              <option
                value={option.value}
                key={option.id}
              >
                {option.label}
              </option>
            ))}
          </select>
        </p>
        <p>
          <label>
            <span className="form__labelText">
              Podaj kwotę do przeliczenia w zł:
              </span>
            <input
              required
              className="form__field"
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
            />
          </label>
        </p>
      </fieldset>
      <p>
        <button className="form__button">Oblicz!</button>
      </p>
    </form>
  );
};

export default Form;