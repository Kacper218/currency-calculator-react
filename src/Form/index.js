import React from 'react';
import "./style.css";

const Form = ({ amount, setAmount, options, option, setOption, setScore, score }) => {

  const onSelectChange = ({ target }) => {
    setOption(target.value);
    setScore(score => score = "N/a")
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (option === "ruda") {
      let converter = 21;
      setScore((score) => score = converter * amount);
      return score;
    } else {
      let converter = 4.51;
      setScore((score) => score = converter * amount);
      return score;
    };
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