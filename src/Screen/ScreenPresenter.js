import React from "react";
import Cube from "../Components/3DCube";
import styled from "styled-components";
import AwesomeMenu from "../Components/AwesomeMenu";
import ListSelector from "../Components/ListSelector";
import CircleButton from "../Components/CircleButton";
import NeonLineButton from "../Components/NeonLineButton";

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`;

const SelectorContainer = styled.div`
    width: 100%;
    height: 100%;
`

const ScreenPresenter = () => <Container>
    <AwesomeMenu names={["안녕하세요", "test2", "test3"]} 
    links={["/1", "/2"]} 
    imageSrc={["/No_Image.jpg", "/No_Image.jpg", "/No_Image.jpg"]}
    imageWidth="300px"
    fontSize="80px"
    />
    {/* <Cube width="500px" bgColorAll="skyblue" front={
        <AwesomeMenu names={["test1", "test2", "test3"]} 
        links={["/1", "/2"]} 
        imageSrc={["/No_Image.jpg", "/No_Image.jpg", "/No_Image.jpg"]}  
        fontSize="50px"
        imageWidth="300px"
        />

    } /> */}
    {/* <CircleButton width="100px" text="submit" /> */}
    <NeonLineButton width="100px" text="Home" color="yellowgreen"/>
</Container>

export default ScreenPresenter;