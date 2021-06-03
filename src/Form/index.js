import React from 'react';
import Clock from './Clock';
import {FormSelect, FormFieldset, FormLegend, LabelText, FormInput, FormButton} from "./styled";

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
      onSubmit={onFormSubmit}
    >
      <FormFieldset>
        <Clock />
        <FormLegend>Kalkulator Walutowy</FormLegend>
        <LabelText>Wybierz walutę: </LabelText>
        <FormSelect
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
        </FormSelect>
        <p>
          <label>
            <LabelText>
              Podaj kwotę do przeliczenia w zł:
            </LabelText>
            <FormInput
              required
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
            />
          </label>
        </p>
      </FormFieldset>
      <p>
        <FormButton>Oblicz!</FormButton>
      </p>
    </form>
  );
};

export default Form;