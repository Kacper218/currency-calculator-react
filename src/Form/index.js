import React from 'react';
import "./style.css";

const Form = () => {
    return (

        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walutowy</legend>
                <p>
                    <span className="form__labelText">Wybierz walutę: </span><select className="form__field" name="currency">
                        <option value="euro">Euro</option>
                        <option value="ruda">Magiczna Ruda</option>
                    </select>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Podaj kwotę do przeliczenia w zł: </span><input required className="form__field" type="number" min="0.01" step="0.01" />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Podaj aktualny kurs euro:</span> <input required className="form__field" type="number" min="0.01" step="0.01" value="4.51" /> </label>
                </p>
            </fieldset>
            <p>
                <button className="form__button">Oblicz!</button>
            </p>
        </form>
    );
};

export default Form;