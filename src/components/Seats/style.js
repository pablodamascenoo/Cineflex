import styled from "styled-components";

export const Seat = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.border};
  background-color: ${(props) => props.background};
  display: flex;
  margin-bottom: 11px;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;

  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    letter-spacing: 0.04em;
  }
`;
