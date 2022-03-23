import styled from "styled-components";

export const Title = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  color: #293845;
`;

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BoxTitle = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: calc(100% - 60px);
  justify-content: center;
`;
