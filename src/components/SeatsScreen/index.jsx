import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Seats from "../Seats";

import { BoxTitle, Container, Title, Footer } from "../../commom-styles/style";

export default function SeatsScreen() {
  const { id } = useParams();
  const [seats, SetSeats] = useState({});

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`
    );

    promisse.then((obj) => {
      const { data } = obj;
      SetSeats(data);
    });
    promisse.catch((err) => console.log(err.response.status));
  }, []);

  return (
    <Container>
      <BoxTitle>
        <Title>Selecione o(s) assento(s) </Title>
      </BoxTitle>
      <div>
        {seats.seats !== undefined ? (
          seats.seats.map((seat) => {
            return <Seats name={seat.name} />;
          })
        ) : (
          <></>
        )}
      </div>
      <Footer></Footer>
    </Container>
  );
}
