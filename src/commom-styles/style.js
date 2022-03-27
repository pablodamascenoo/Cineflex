import styled from "styled-components";

export const Container = styled.main``;

export const Title = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.04em;
  font-family: "Roboto", sans-serif;
  color: ${(props) => {
    return props.success ? "#247A6B" : "#293845";
  }};
  font-weight: ${(props) => {
    return props.success ? "700" : "normal";
  }};
  text-align: center;
`;

export const BoxTitle = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 67px;
  padding: ${(props) => {
    return props.center ? "0 100px" : "0";
  }};
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

export const ImageBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  width: 64px;
  height: 89px;
  margin-left: 10px;
  margin-right: 14px;
`;

export const Image = styled.img`
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  margin: 8px 0 0 8px;
`;

export const Submit = styled.button`
  width: 225px;
  height: 42px;
  border: none;
  background: #e8833a;
  border-radius: 3px;
`;
