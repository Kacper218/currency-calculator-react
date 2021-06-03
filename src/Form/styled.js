import styled from "styled-components";

export const FormFieldset = styled.fieldset`
    box-shadow: 10px 10px 28px 0px rgba(0, 0, 0, 0.75);
    background-color: white;
    padding: 20px;
    border: 5px solid rgb(9, 177, 177);
    border-radius: 10px;
    margin: 20px 0;
`;

export const FormLegend = styled.legend`
    font-weight: bold;
    background-color: rgb(9, 177, 177);
    color: white;
    padding: 10px;
    border-radius: 10px;
    font-size: larger;
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 150px;
    display: inline-block;
    margin-right: 5px;
    font-size: large;
    vertical-align: middle;
`;

export const FormSelect = styled.select`
    border: 3px solid #ccc;
    padding: 10px;
    margin-top: 10px;
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    transition: 1s;
    vertical-align: middle;

    &:hover {
        transform: scale(1.05);
    }
`;

export const FormInput = styled.input`
    border: 3px solid #ccc;
    padding: 10px;
    margin-top: 10px;
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    transition: 1s;
    vertical-align: middle;

    &:hover {
        transform: scale(1.05);
    }
`;

export const FormButton = styled.button`
    box-shadow: 10px 10px 28px 0px rgba(0, 0, 0, 0.75);
    font-weight: bold;
    width: 100%;
    border: none;
    padding: 10px;
    border-radius: 10px;
    border: 3px solid white;
    background-color: rgb(9, 177, 177);
    color: white;
    transition: 1s;
    font-size: large;

    &:hover {
        background-color: hsl(180, 90%, 20%);
        transform: scale(1.05);
    }

    &:active {
        background-color: hsl(180, 90%, 10%);
    }
`;