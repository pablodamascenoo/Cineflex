import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { BoxTitle, Container, Title, Footer } from "../../commom-styles/style";
import { BoxSection } from "./style";

import DaySection from "../DaySection";

export default function TimeScreen() {
  const { id } = useParams();
  const [sections, SetSections] = useState({});

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
      </BoxTitle>
      <BoxSection>
        {sections.days !== undefined ? (
          sections.days.map(({ weekday, date, showtimes, id }) => {
            return (
              <DaySection
                key={id}
                weekday={weekday}
                date={date}
                showtimes={showtimes}
              />
            );
          })
        ) : (
          <></>
        )}
      </BoxSection>
      <Footer></Footer>
    </Container>
  );
}
