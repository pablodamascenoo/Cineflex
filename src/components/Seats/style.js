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
`;
