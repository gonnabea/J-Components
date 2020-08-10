import React from "react"
import Cube from "../Components/3DCube"
import styled from "styled-components"
import AwesomeMenu from "../Components/AwesomeMenu"
import ListSelector from "../Components/ListSelector"
import CircleButton from "../Components/CircleButton"
import NeonLineButton from "../Components/NeonLineButton"
import CardUI from "../Components/CardUI"

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const CardContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ScreenPresenter = () => (
  <Container>
    <AwesomeMenu
      names={["안녕하세요", "test2", "test3"]}
      links={["/1", "/2"]}
      imageSrc={["/No_Image.jpg", "/No_Image.jpg", "/No_Image.jpg"]}
      imageWidth="300px"
      fontSize="80px"
    />
    {/* <Cube width="200px" bgColorAll="skyblue" front={
        <AwesomeMenu names={["test1", "test2", "test3"]} 
        links={["/1", "/2"]} 
        imageSrc={["/No_Image.jpg", "/No_Image.jpg", "/No_Image.jpg"]}  
        fontSize="50px"
        imageWidth="300px"
        />

    } /> */}
    {/* <CircleButton width="100px" text="submit" /> */}
    <NeonLineButton width="100px" text="Home" color="#45E7B6" />
    <NeonLineButton width="100px" text="Home" />
    <NeonLineButton width="100px" text="Home" color="yellowgreen" />
    <CircleButton />
    <CardUI
      main={<img style={{ width: "200px", height: "200px" }} src="/No_Image.jpg" alt="example" />}
      textArea={
        <CardContainer>
          <div>Title</div>
          <div>descriptions</div>
        </CardContainer>
      }
      backgroundColor="blue"
    />
  </Container>
)

export default ScreenPresenter
