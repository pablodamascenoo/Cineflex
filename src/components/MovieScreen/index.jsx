import {Container, Title, BoxTitle, BoxMovies} from "./style"
import Movie from "../Movie"

export default function MovieScreen(){

    const array = [1,2,3,4,5]

    return(
        <Container>
            <BoxTitle>
                <Title>Selecione o Filme</Title>
            </BoxTitle>
            <BoxMovies>{array.map(index=>{return <Movie key={index}/>})}</BoxMovies>
        </Container>
    )
}