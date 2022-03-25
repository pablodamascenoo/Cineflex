import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 67px;
  background-color: #c3cfd9;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;

export const Title = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-size: 34px;
  color: #e8833a;
  font-family: "Roboto", sans-serif;
`;
