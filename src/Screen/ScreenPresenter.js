import React from "react";
import Cube from "../Components/3DCube";
import styled from "styled-components";

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ScreenPresenter = () => <Container>
    <Cube width={"300px"} />
</Container>

export default ScreenPresenter;