import { Link } from "react-router-dom";

import { Title, BoxTitle, Container, Submit } from "../../commom-styles/style";
import { Content, ButtonBox } from "./style";

export default function SuccessScreen({ obj }) {
  if (Object.keys(obj).length === 0) {
    return <></>;
  }

  return (
    <Container>
      <BoxTitle center={true}>
        <Title success={true} bold={true}>
          Pedido feito com sucesso!
        </Title>
      </BoxTitle>
      <Content>
        <section>
          <Title bold={true} subtitle={true}>
            Filme e sessão
          </Title>
          <p>{obj.title}</p>
          <p>
            {`${obj.date} `}
            <span>{obj.time}</span>
          </p>
        </section>
        <section>
          <Title bold={true} subtitle={true}>
            Ingressos
          </Title>
          {obj.seats.map((seat) => (
            <p>{`Assento ${seat}`}</p>
          ))}
        </section>
        <section>
          <Title bold={true} subtitle={true}>
            Comprador
          </Title>
          <p>{`Nome: ${obj.name}`}</p>
          <p>{`CPF: ${obj.cpf}`}</p>
        </section>
      </Content>
      <ButtonBox>
        <Link to="/">
          <Submit>Voltar pra Home</Submit>
        </Link>
      </ButtonBox>
    </Container>
  );
}
