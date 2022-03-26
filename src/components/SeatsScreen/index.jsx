import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Seats from "../Seats";

import { BoxTitle, Container, Title, Footer } from "../../commom-styles/style";
import { SeatsBox } from "./style";

export default function SeatsScreen() {
  const { id } = useParams();
  const [seats, SetSeats] = useState({});
  const [selectedSeats, SetSelectedSeats] = useState([]);
  let selected;

  function addSeat(id) {
    if (!selectedSeats.includes(id)) {
      SetSelectedSeats([...selectedSeats, id]);
      return;
    }
    const ids = selectedSeats.filter((item) => {
      return item === id ? false : true;
    });
    SetSelectedSeats([...ids]);
  }

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`
    );

    promisse.then((obj) => {
      const { data } = obj;
      SetSeats(data);
    });
    promisse.catch((err) => console.log(err.response.status)); // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <BoxTitle>
        <Title>Selecione o(s) assento(s) </Title>
      </BoxTitle>
      <SeatsBox>
        {seats.seats !== undefined ? (
          seats.seats.map((seat) => {
            selectedSeats.includes(seat.id)
              ? (selected = true)
              : (selected = false);
            return (
              <Seats
                key={seat.name}
                name={seat.name}
                status={seat.isAvailable}
                id={seat.id}
                addSeat={addSeat}
                selected={selected}
              />
            );
          })
        ) : (
          <></>
        )}
      </SeatsBox>
      <Footer></Footer>
    </Container>
  );
}
