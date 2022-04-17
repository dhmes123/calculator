import React from 'react';
import {Conteiner} from './style'

interface props{
    value:string;
    onClick:(text: string ) => void;
}
function Button(prop:props) {
  return (
    <Conteiner onClick={()=>prop.onClick(prop.value)}>
     <h1>{prop.value}</h1>
    </Conteiner>
  );
}

export default Button;