import React, { useState } from 'react';
import "./style.css";

const Form = ({ options }) => {

  const [x, setX] = useState(1);
  const [amount, setAmount] = useState(0);
  const [converter, setConverter] = useState(4.51);

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const onChangeSelect = () => {
    if (x === 1) {
      setConverter(converter => converter = 21.37)
      setX(x => x + 1)
    } else {
      setConverter(converter => converter = 4.51)
      setX(x => x - 1)
    }
  }

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
            onChange={onChangeSelect}
          >
            {options.map((option) => (
              <option
                key={option.id}
                value={option.value}
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
        <p>
          <label>
            <span className="form__labelText">
              Podaj aktualny kurs euro:
              </span>
            <input
              required
              className="form__field"
              type="number"
              min="0.01"
              step="0.01"
              value={converter}
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