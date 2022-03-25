import { Button, DaySpan, Box } from "./style";

export default function DaySection({ weekday, date, showtimes }) {
  return (
    <Box>
      <DaySpan>{weekday} - </DaySpan>
      <DaySpan>{date}</DaySpan>
      <br />
      {showtimes.map(({ name, id }) => {
        return <Button key={id}>{name}</Button>;
      })}
    </Box>
  );
}
