import React from "react"
import styled from "styled-components"

const Container = styled.section`
  transform-style: preserve-3d;
  position: relative;
  color: white;
  animation: rotate 3s;
  @keyframes rotate {
    to {
      transform: rotateY(-360deg);
    }
  }
`

const Front = styled.div`
  position: absolute;
  width: ${(props) => (props.width ? props.width : "100px")};
  height: ${(props) => (props.height ? props.height : "150px")};
  background-color: black;
  border: solid 2px white;
  color: white;

  :hover {
    transform-origin: top left;
    animation: openBook 2s forwards;
  }
  @keyframes openBook {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(-150deg);
    }
  }
`

const Back = styled.div`
  position: absolute;
  width: ${(props) => (props.width ? props.width : "100px")};
  height: ${(props) => (props.height ? props.height : "150px")};
  background-color: black;
  border: solid 2px white;
  transform: translateZ(
    ${(props) => (props.spineWidth ? `calc(${props.spineWidth}*-1)` : "-30px")}
  );
`

const Left = styled.div`
  position: absolute;
  width: calc(${(props) => (props.spineWidth ? props.spineWidth : "30px")});
  height: ${(props) => (props.height ? props.height : "150px")};
  background-color: grey;
  border: solid 2px white;
  transform: rotateY(90deg)
    translateX(${(props) => (props.spineWidth ? `calc(${props.spineWidth} /2)` : "15px")})
    translateZ(${(props) => (props.spineWidth ? `calc(${props.spineWidth} /-2)` : "15px")});
`

const Inside1 = styled.div`
  position: absolute;
  top: 7px;
  width: calc(${(props) => (props.width ? props.width : "100px")} + (-10px));
  height: calc(${(props) => (props.height ? props.height : "150px")} + (-10px));
  transform: translateX(4px)
    translateZ(${(props) => (props.width ? `calc(${props.width} / -20)` : "-5px")});
  background-color: white;
  border-radius: 0 3px 3px 0;
`

const Inside2 = styled.div`
  position: absolute;
  top: 7px;
  width: calc(${(props) => (props.width ? props.width : "100px")} + (-10px));
  height: calc(${(props) => (props.height ? props.height : "150px")} + (-10px));
  transform: translateX(4px)
    translateZ(${(props) => (props.width ? `calc(${props.width} / -18)` : "-5px")});
  background-color: red;
  border-radius: 0 3px 3px 0;
`

const Inside3 = styled.div`
  position: absolute;
  top: 7px;
  width: calc(${(props) => (props.width ? props.width : "100px")} + (-10px));
  height: calc(${(props) => (props.height ? props.height : "150px")} + (-10px));
  transform: translateX(4px)
    translateZ(${(props) => (props.width ? `calc(${props.width} / -16)` : "-5px")});
  background-color: white;
  border-radius: 0 3px 3px 0;
`

const Inside4 = styled.div`
  position: absolute;
  top: 7px;
  width: calc(${(props) => (props.width ? props.width : "100px")} + (-10px));
  height: calc(${(props) => (props.height ? props.height : "150px")} + (-10px));
  transform: translateX(4px)
    translateZ(${(props) => (props.width ? `calc(${props.width} / -14)` : "-5px")});
  background-color: white;
  border-radius: 0 3px 3px 0;
`

const Inside5 = styled.div`
  position: absolute;
  top: 7px;
  width: calc(${(props) => (props.width ? props.width : "100px")} + (-10px));
  height: calc(${(props) => (props.height ? props.height : "150px")} + (-10px));
  transform: translateX(4px)
    translateZ(${(props) => (props.width ? `calc(${props.width} / -12)` : "-5px")});
  background-color: white;
  border-radius: 0 3px 3px 0;
`

const Inside6 = styled.div`
  position: absolute;
  top: 7px;
  width: calc(${(props) => (props.width ? props.width : "100px")} + (-10px));
  height: calc(${(props) => (props.height ? props.height : "150px")} + (-10px));
  transform: translateX(4px)
    translateZ(${(props) => (props.width ? `calc(${props.width} / -10)` : "-5px")});
  background-color: white;
  border-radius: 0 3px 3px 0;
`

const Book = ({ width = "200px", height = "300px", spineWidth = "30px", topWidth, leftWidth }) => {
  return (
    <Container>
      <Front width={width} height={height} spineWidth={spineWidth}>
        front
      </Front>
      <Inside1 width={width} height={height} spineWidth={spineWidth}>
        asdsad
      </Inside1>
      <Inside2 width={width} height={height} spineWidth={spineWidth}></Inside2>
      <Inside3 width={width} height={height} spineWidth={spineWidth}></Inside3>
      <Inside4 width={width} height={height} spineWidth={spineWidth}></Inside4>
      <Inside5 width={width} height={height} spineWidth={spineWidth}></Inside5>
      <Inside6 width={width} height={height} spineWidth={spineWidth}></Inside6>

      <Back width={width} height={height} spineWidth={spineWidth}>
        back
      </Back>
      <Left width={width} height={height} spineWidth={spineWidth}>
        spine
      </Left>
    </Container>
  )
}

export default Book
