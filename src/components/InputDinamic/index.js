import React, { useRef } from 'react'
import styled from 'styled-components'
import './inputDinamic.css'
const Container = styled.div`
    position:relative;
    height:45px;
    margin-bottom: 1rem;
`
const Label = styled.label`
    position:absolute;
    z-index:10;
    top:1rem;
    left:1rem;
    padding:0 0.25rem;
    color:#80868b       ;
    background-color:none;
    transition:.3s;


`
const InputDinamic  = ({name}) =>{
    const inputElement = useRef(null)   
    return(
    <Container>
        <input onChange={
            ()=>{
                console.log(inputElement.current.value)
            }
        } ref={inputElement} type="text" className="input_dinamic" />
        <Label>
            {name}
        </Label>
    </Container>);
}
export default InputDinamic;