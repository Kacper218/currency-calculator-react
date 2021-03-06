import styled from "styled-components";

export const ScoreElement = styled.div`
    box-shadow: 10px 10px 28px 0px rgba(0, 0, 0, 0.75);
    color: white;
    background-color: rgb(9, 177, 177);
    text-align: center;
    font-size: larger;
    border: 3px solid white;
    padding: 20px;
    margin: 10px 0;
    border-radius: 10px;
    transition: 1s;

    &:hover {
        background-color: hsl(180, 90%, 20%);
        transform: scale(1.05);
    }
`;