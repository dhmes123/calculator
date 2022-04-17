import React, { useState } from 'react';
import {Conteiner,Top,Down,Value,Line} from './style'
import Button from '../button';



function Screen() {
    const [valueOne,setOne]=useState<string>("")
    const [valueTwo,setTwo]=useState<string>("")
    const [operator,setOperator]=useState<string>("")

    const handleClick=(n:string)=>{
        if(operator===""){
            var newValue=valueOne+n;
            setOne(newValue);
        }
        if(operator!==""){
            var newValue=valueTwo+n;
            setTwo(newValue);}
         

        }

    const handleOperator=(n:string)=>{
        if(operator!==''){
            Calculate(n)
            return
        }
        setOperator(n);
        
    }
    const Calculate=(operator_:string)=>{
        var n1=parseFloat(valueOne)
        var n2=parseFloat(valueTwo)
        var new_operator=operator_;
        var result=0;
        switch (operator) {
            case "+":
                result=n1+n2;
                setOne(result.toString())
                setTwo("")
                setOperator(new_operator)
                break;
        
            case "-":
                result=n1-n2;
                setOne(result.toString())
                setTwo("")
                setOperator(new_operator)
                break;
            case "*":
                result=n1*n2;
                setOne(result.toString())
                setTwo("")
                setOperator(new_operator)
                break;
            case "/":
                result=n1/n2;
           
                setOne(result.toString().substring(0,8))
                setTwo("")
                setOperator(new_operator)
                break;
            case "=":
                resetAndCalculate()
                setOperator("")
                break;      
        }
    }
    const resetAndCalculate=()=>{
        var n1=parseFloat(valueOne)
        var n2=parseFloat(valueTwo)
        var result=0;
        if(operator!=="" && valueTwo===""){
            setOperator("")
            return
        }
        if(operator=='+'){
            result=n1+n2;
            setOne(result.toString())
            setTwo("")
            setOperator("")
            return

        }
        if(operator=='-'){
            result=n1-n2;
            setOne(result.toString())
            setTwo("")
            setOperator("")
            return
        }
        if(operator=='*'){
            result=n1*n2;
            setOne(result.toString())
            setTwo("")
            setOperator("")
            return
        }
        if(operator=='/'){
            result=n1/n2;
            setOne(result.toString().substring(0,8))
            setTwo("")
            setOperator("")
            return
        }
       
    }

  return (
    <Conteiner >
       <Top>
           <Value>{valueOne+operator+valueTwo}</Value>
          
       </Top>
       <Down>
        
           <Line>
               <Button value='1' onClick={(v:string)=>handleClick(v)}></Button>
               <Button value='2' onClick={(v:string)=>handleClick(v)}></Button>
               <Button value='3' onClick={(v:string)=>handleClick(v)}></Button>
               <Button value='+' onClick={(v:string)=>handleOperator(v)}></Button>
           </Line>
           <Line>
               <Button value='4' onClick={(v:string)=>handleClick(v)}></Button>
               <Button value='5' onClick={(v:string)=>handleClick(v)}></Button>
               <Button value='6' onClick={(v:string)=>handleClick(v)}></Button>
               <Button value='-' onClick={(v:string)=>handleOperator(v)}></Button>
           </Line>
           <Line>
               <Button value='7' onClick={(v:string)=>handleClick(v)}></Button>
               <Button value='8' onClick={(v:string)=>handleClick(v)}></Button>
               <Button value='9' onClick={(v:string)=>handleClick(v)}></Button>
               <Button value='*' onClick={(v:string)=>handleOperator(v)}></Button>
           </Line>
           <Line>
               <Button value='0' onClick={(v:string)=>handleClick(v)}></Button>
               <Button value='.' onClick={(v:string)=>handleClick(v)}></Button>
               <Button value='=' onClick={(v:string)=>resetAndCalculate()}></Button>
               <Button value='/' onClick={(v:string)=>handleOperator(v)}></Button>
           </Line>
       </Down>
    </Conteiner>
  );
}

export default Screen;