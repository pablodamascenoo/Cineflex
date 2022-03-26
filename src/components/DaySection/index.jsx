import { Button, DaySpan, Box } from "./style";
import { Link } from "react-router-dom";

export default function DaySection({ weekday, date, showtimes }) {
  return (
    <Box>
      <DaySpan>{weekday} - </DaySpan>
      <DaySpan>{date}</DaySpan>
      <br />
      {showtimes.map(({ name, id }) => {
        return (
          <Link key={id} to={`/sessao/${id}`}>
            <Button>{name}</Button>
          </Link>
        );
      })}
    </Box>
  );
}
