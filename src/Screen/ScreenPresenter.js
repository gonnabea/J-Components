import React from "react";
import Cube from "../Components/3DCube";
import styled from "styled-components";
import AwesomeMenu from "../Components/AwesomeMenu";

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ScreenPresenter = () => <Container>
    
    <AwesomeMenu names={["test1", "test2", "test3"]} 
    links={["/1", "/2"]} 
    imageSrc={["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png", "zxc"]}  
    fontSize="50px"
    imageWidth="300px"
    />
</Container>

export default ScreenPresenter;