import { Container, Image } from "./style"
import { Link } from "react-router-dom"

export default function Movie({image, id}){

    return (
        <Container>
            <Link to={`/filme/${id}`}>
                <Image src={image} alt="" />
            </Link>
        </Container>
    )
}