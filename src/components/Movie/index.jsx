import { ImageBox, Image } from "./style";
import { Link } from "react-router-dom";

export default function Movie({ image, id }) {
  return (
    <ImageBox>
      <Link to={`/filme/${id}`}>
        <Image src={image} alt="" />
      </Link>
    </ImageBox>
  );
}
