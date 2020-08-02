import React from "react";
import styled from "styled-components";

const Button = styled.button`

`;

const CoolButton = ({text}) => <Button>
    {text ? text : "Use Text attr"}
</Button>

export default CoolButton;