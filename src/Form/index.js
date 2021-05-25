import React from 'react';
import Clock from './Clock';
import "./style.css";

const Form = ({ amount, setAmount, options, option, setOption, setScore, score }) => {

  const onSelectChange = ({ target }) => {
    setOption(target.value);
    setScore(score => score = "N/a")
  };

  const calculateScore = (options, amount) => {
    const rate = options
      .find(({ value }) => value === option)
      .converter;

    setScore(score = amount * rate);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateScore(options, amount);

  };

  return (
    <form
      className="form"
      onSubmit={onFormSubmit}
    >
      <fieldset className="form__fieldset">
        <Clock />
        <legend className="form__legend">Kalkulator walutowy</legend>
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