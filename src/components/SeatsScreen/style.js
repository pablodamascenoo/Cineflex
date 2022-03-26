import styled from "styled-components";

export const SeatsBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 7px;
  margin: 0 24px;
`;

export const SeatsLabel = styled.div`
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;

    color: #4e5a65;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
`;

export const Form = styled.form`
  margin-top: 42px;
  display: flex;
  flex-direction: column;

  input {
    width: 327px;
    height: 51px;
    margin-left: 24px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    padding-left: 18px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 7px;

    &::placeholder {
      color: #afafaf;
      font-family: "Roboto";
      font-style: italic;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
    }
  }

  label {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin-left: 24px;

    color: #293845;
  }

  button {
    margin: 0 auto;
    margin-top: 50px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const cpfMask = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};
