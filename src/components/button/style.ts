import styled, { keyframes } from "styled-components";
const changeColor=keyframes`
0%{background-color:#5CD14C; }
50%{background-color:#71BB67; }
`
export const Conteiner=styled.div`
background-color:beige ;border:1px solid black;width:22%;max-height:80px;text-align:center;border-radius:5px;
:hover{
    cursor: pointer;
    animation-name: ${changeColor};
    animation-duration: 8s;
    animation-iteration-count:initial;
}

`


