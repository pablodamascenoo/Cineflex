import { Seat } from "./style";

export default function Seats({ name, status, id, addSeat, selected }) {
  let color = { background: "", border: "" };

  if (status) {
    color.background = "#C3CFD9";
    color.border = "#808F9D";
  } else {
    color.background = "#FBE192";
    color.border = "#F7C52B";
  }

  if (selected) {
    color.background = "#8DD7CF";
    color.border = "#45BDB0";
  }

  return (
    <Seat
      background={color.background}
      border={color.border}
      onClick={() => {
        if (status) addSeat(id);
      }}
    >
      <p>{name}</p>
    </Seat>
  );
}
