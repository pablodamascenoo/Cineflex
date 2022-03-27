import { Title, BoxTitle } from "../commom-styles/style";

export default function SuccessScreen({ obj }) {
  return (
    <BoxTitle center={true}>
      <Title success={true}>Pedido feito com sucesso</Title>
    </BoxTitle>
  );
}
