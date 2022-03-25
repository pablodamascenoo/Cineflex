import styled from "styled-components";

export const Container = styled.main``;

export const Title = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  color: #293845;
  font-weight: normal;
`;

export const BoxTitle = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 67px;
`;

export const Footer = styled.footer`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  width: 100%;
  height: 117px;
  left: 0px;
  bottom: 0px;
  background: #dfe6ed;
  border: 1px solid #9eadba;
  position: fixed;
  display: flex;
  align-items: center;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 26px;
    color: #293845;
  }
`;
