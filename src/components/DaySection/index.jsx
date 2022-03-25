import { Button, DaySpan } from "./style";

export default function DaySection({ weekday, date, showtimes }) {
  return (
    <div>
      <DaySpan>{weekday} - </DaySpan>
      <DaySpan>{date}</DaySpan>
      <br />
      {showtimes.map(({ name }) => {
        return <Button>{name}</Button>;
      })}
    </div>
  );
}
