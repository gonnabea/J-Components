import React from "react";
import styled from "styled-components";

const Container = styled.section`
`;

const A = styled.a`
    text-decoration: none;
    display: flex;
    padding: 0;
    img{
        display: none;
        position: relative;
    }
    :hover{
        img{
            display: block;
            animation: rotate 1s forwards;
            margin-left: 30px;
            position: absolute;
            z-index: -1;
        }
    }
    @keyframes rotate {
        from{
           transform: rotateZ(0);
        }
        to{
            transform: rotateZ(-10deg);
        }
    }
`

const Text = styled.p`
padding: 0;
       text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;  
    color: white;
    font-size: 30px;
    width: fit-content;
    :hover{
        position: relative;
        animation: repeatMove 1s forwards;
        ::before{
            content: ${props => `"${props.name ? props.name : "Home"}"`};
            
        }
    
        ::after{
            content: ${(props) => `"${props.name ? props.name : 'Home'}"`};
            display: inline-block;
            
        }
        
        
    }
        @keyframes repeatMove {
            from{
                transform: translate(0, 0) skew(0deg, 3deg);
            }
            to{
                transform: translate(50px, 0) skew(0deg, 3deg);
            }
        }
`

const Image = styled.img`
    width: 200px;
    height: 200px;
`


const MarqueeMenu = ({names, links, imageSrc}) => {
    
    const init = (names) => {
        console.log(names);
        console.log(links, imageSrc);
        const result = names ? names.map( (name, index) => {

            return (
            <A href={links[index]}>
                <Text name={name}>{name}</Text>
                <div>
                <Image src={imageSrc[index]} />
                </div>
            </A>
            )

        }) : null;
        
        return result;
    }

 return (   
<Container>
    {init(names, links, imageSrc)}
</Container>
 )
}

export default MarqueeMenu;

// 사용법 : names, links, imageSrc,를 각각 배열의 형태로 데이터를 보내준다.