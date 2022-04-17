import styled from "styled-components";
export const Conteiner=styled.div`
width:80vw ;height:70vh;background-color:#717A7C;max-width:400px;display:flex;flex-direction:column;padding:10px;align-items:center;justify-content:space-between;border-radius:5px;
@media only screen and (max-width: 350px) {
  
   width:95vw ;height:95vh;
  
}
`
export const Top=styled.div`
width:100% ;height:10%;background-color:white;border-radius:5px;display:flex;align-items:center;justify-content:right;padding-right:0px;
`

export const Value=styled.h1`
margin-right:20px ;letter-spacing:2px;
`


export const Down=styled.div`
width:100% ;height:100% ;background-color:#717A7C;margin-top:10px;display:flex;flex-direction:column;
`
export const Line=styled.div`
width:100% ;height:20% ;background-color:#717A7C;display:flex;justify-content:space-between;margin-top:10px;
`