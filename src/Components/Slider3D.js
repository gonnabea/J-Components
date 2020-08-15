import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.section``

const ImageArea = styled.main`
  display: flex;
  width: 80vw;
  overflow: auto;
  flex-wrap: nowrap;
  transform-style: preserve-3d;
  perspective: 800px;

  img:nth-child(5n -1) {
    transform: rotateY(-30deg) translateZ(-50px);
  }
  img:nth-child(5n -3) {
    transform: rotateY(30deg) translateZ(-50px);
  }
  img:nth-child(5n) {
    transform: rotateY(-30deg) translateZ(-50px);
    margin-right: 50px;
    z-index: -1;
  }
  img:nth-child(5n- 4) {
    transform: rotateY(30deg) translateZ(-50px);
    margin-left: 50px;
  }
  img:nth-child(5n - 2) {
    transform: rotateY(0deg);
  }
`

const Control = styled.div``

const Slider3D = () => {
  let currentIndex = 0

  const handleRight = () => {
    const images = document.getElementById("images")
    currentIndex += 1
    images.scrollTo({
      left: images.clientWidth * currentIndex,
      behavior: "smooth",
    })
  }

  const handleLeft = () => {
    const images = document.getElementById("images")
    if (images.clientWidth > 0) currentIndex -= 1
    images.scrollTo({
      left: images.clientWidth * currentIndex,
      behavior: "smooth",
    })
  }

  return (
    <Container>
      <ImageArea id="images">
        <img
          src="https://image.tmdb.org/t/p/w500/hPkqY2EMqWUnFEoedukilIUieVG.jpg"
          alt="exam"
          style={{ width: "19%", boxShadow: "0 0 20px black" }}
        />
        <img
          src="https://image.tmdb.org/t/p/w500/hPkqY2EMqWUnFEoedukilIUieVG.jpg"
          alt="exam"
          style={{ width: "19%", boxShadow: "0 0 20px black" }}
        />
        <img
          src="https://image.tmdb.org/t/p/w500/hPkqY2EMqWUnFEoedukilIUieVG.jpg"
          alt="exam"
          style={{ width: "19%", boxShadow: "0 0 20px black" }}
        />
        <img
          src="https://image.tmdb.org/t/p/w500/hPkqY2EMqWUnFEoedukilIUieVG.jpg"
          alt="exam"
          style={{ width: "19%", boxShadow: "0 0 20px black" }}
        />
        <img
          src="https://image.tmdb.org/t/p/w500/hPkqY2EMqWUnFEoedukilIUieVG.jpg"
          alt="exam"
          style={{ width: "19%", boxShadow: "0 0 20px black" }}
        />
        <img
          src="https://image.tmdb.org/t/p/w500/hPkqY2EMqWUnFEoedukilIUieVG.jpg"
          alt="exam"
          style={{ width: "19%", boxShadow: "0 0 20px black" }}
        />
        <img
          src="https://image.tmdb.org/t/p/w500/hPkqY2EMqWUnFEoedukilIUieVG.jpg"
          alt="exam"
          style={{ width: "19%", boxShadow: "0 0 20px black" }}
        />
        <img
          src="https://image.tmdb.org/t/p/w500/hPkqY2EMqWUnFEoedukilIUieVG.jpg"
          alt="exam"
          style={{ width: "19%", boxShadow: "0 0 20px black" }}
        />
        <img
          src="https://image.tmdb.org/t/p/w500/hPkqY2EMqWUnFEoedukilIUieVG.jpg"
          alt="exam"
          style={{ width: "19%", boxShadow: "0 0 20px black" }}
        />
        <img
          src="https://image.tmdb.org/t/p/w500/hPkqY2EMqWUnFEoedukilIUieVG.jpg"
          alt="exam"
          style={{ width: "19%", boxShadow: "0 0 20px black" }}
        />
        <img
          src="https://image.tmdb.org/t/p/w500/hPkqY2EMqWUnFEoedukilIUieVG.jpg"
          alt="exam"
          style={{ width: "19%", boxShadow: "0 0 20px black" }}
        />
        <img
          src="https://image.tmdb.org/t/p/w500/hPkqY2EMqWUnFEoedukilIUieVG.jpg"
          alt="exam"
          style={{ width: "19%", boxShadow: "0 0 20px black" }}
        />
        <img
          src="https://image.tmdb.org/t/p/w500/hPkqY2EMqWUnFEoedukilIUieVG.jpg"
          alt="exam"
          style={{ width: "19%", boxShadow: "0 0 20px black" }}
        />
        <img
          src="https://image.tmdb.org/t/p/w500/hPkqY2EMqWUnFEoedukilIUieVG.jpg"
          alt="exam"
          style={{ width: "19%", boxShadow: "0 0 20px black" }}
        />
        <img
          src="https://image.tmdb.org/t/p/w500/hPkqY2EMqWUnFEoedukilIUieVG.jpg"
          alt="exam"
          style={{ width: "19%", boxShadow: "0 0 20px black" }}
        />
      </ImageArea>
      <Control>
        <button onClick={handleLeft}>Left</button>
        <button onClick={handleRight}>Right</button>
      </Control>
    </Container>
  )
}

export default Slider3D
