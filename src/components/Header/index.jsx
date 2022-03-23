import styled from "styled-components"

export default function Header(){

    const Container = styled.header`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;
    `

    const Title = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-size: 34px;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    `

    return(
        <Container>
            <Title>CINEFLEX</Title>
        </Container>
    )
}