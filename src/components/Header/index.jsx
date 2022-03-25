import { Container, Title } from "./style";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <Title>CINEFLEX</Title>
      </Link>
    </Container>
  );
}
