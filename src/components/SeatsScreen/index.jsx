import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Seats from "../Seats";

import {
  BoxTitle,
  Container,
  Title,
  Footer,
  ImageBox,
  Image,
  Submit,
} from "../../commom-styles/style";
import { SeatsBox, SeatsLabel, cpfMask, Form } from "./style";

export default function SeatsScreen({ getObj }) {
  const { id } = useParams();
  const [seats, SetSeats] = useState({});
  const [selectedSeats, SetSelectedSeats] = useState([]);
  const [inputs, SetInputs] = useState({ name: "", cpf: "" });

  const navigate = useNavigate();

  let selected;
  let movie = { title: "", posterURL: "" };
  let day = { weekday: "", date: "" };

  if (seats.movie !== undefined) {
    movie = { ...seats.movie };
    day = { ...seats.day };
  }

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

  function handleSubmit(event) {
    event.preventDefault();

    if (selectedSeats.length === 0) {
      alert("escolha pelo menos um assento");
      return;
    }
    const promisse = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      { ids: [...selectedSeats], name: inputs.name, cpf: inputs.cpf }
    );

    promisse.then(() => {
      const obj = {
        title: movie.title,
        weekday: day.weekday,
        date: day.date,
        seats: [...selectedSeats],
        cpf: inputs.cpf,
        name: inputs.name,
      };
      getObj(obj);
      navigate("/sucesso");
    });
  }

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
      <SeatsLabel>
        <div>
          <Seats selected={true} />
          <p>Selecionado</p>
        </div>
        <div>
          <Seats status={true} />
          <p>Disponível</p>
        </div>
        <div>
          <Seats status={false} />
          <p>Indisponível</p>
        </div>
      </SeatsLabel>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome do comprador:</label>
        <input
          placeholder="Digite seu nome..."
          type="text"
          name="name"
          id="name"
          required
          value={inputs.name}
          onChange={(e) => {
            let obj = { ...inputs };
            obj.name = e.target.value;
            SetInputs({ ...obj });
          }}
        />
        <label htmlFor="cpf">CPF do comprador:</label>
        <input
          placeholder="Digite seu CPF..."
          type="text"
          name="cpf"
          id="cpf"
          maxLength="14"
          required
          value={inputs.cpf}
          onChange={(e) => {
            let obj = { ...inputs };
            obj.cpf = cpfMask(e.target.value);
            SetInputs({ ...obj });
          }}
        />
        <Submit type="submit">Reservar assento(s)</Submit>
      </Form>
      <Footer>
        <ImageBox>
          <Image src={movie.posterURL} />
        </ImageBox>
        <div>
          <p>{movie.title}</p>
          <p>
            {`${day.weekday} - `}
            <span>{day.date}</span>
          </p>
        </div>
      </Footer>
    </Container>
  );
}
