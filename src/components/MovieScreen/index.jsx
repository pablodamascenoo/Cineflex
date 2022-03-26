import { useState, useEffect } from "react";
import axios from "axios";

import Movie from "../Movie";

import { BoxMovies } from "./style";
import { Container, Title, BoxTitle } from "../../commom-styles/style";

export default function MovieScreen() {
  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    const promisse = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    promisse.then((obj) => {
      const { data } = obj;
      SetMovies(data);
    });
    promisse.catch((err) => {
      console.log(err.response.status);
    }); // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <BoxTitle>
        <Title>Selecione o Filme</Title>
      </BoxTitle>
      <BoxMovies>
        {movies.map((movie) => {
          return <Movie key={movie.id} image={movie.posterURL} id={movie.id} />;
        })}
      </BoxMovies>
    </Container>
  );
}
