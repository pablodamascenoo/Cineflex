import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { BoxTitle, Container, Title } from "../../commom-styles/style";

export default function TimeScreen() {
  const [sections, SetSections] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`
    );

    promisse.then((obj) => {
      const { data } = obj;
      SetSections(data);
    });
    promisse.catch((err) => {
      console.log(err.response.status);
    });
  }, []);

  return (
    <Container>
      <BoxTitle>
        <Title>Selecione o horário</Title>
        <div>
          {sections.days.map((day) => {
            return <p>{day.weekday}</p>;
          })}
        </div>
      </BoxTitle>
    </Container>
  );
}
