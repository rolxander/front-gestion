import React, { useState } from 'react';
import styled from 'styled-components';
const Container = styled.div`
    color: black;
    background-color:rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display:flex;
    justify-content: center;
    align-items: center;
    z-index:1;
    
    
`;
const WindowModal = styled.div`
    background-color: #ddddd0;
    width: 40vh;
    padding: 1em;
    position: relative;
    display:grid;
    grid-template-rows: 1fr 10fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 0.5fr;
    grid-template-areas: "titulo titulo titulo close"
                         "body body body body"
                         "footer footer footer footer";
    margin : 0;
    padding:5;
    

`
const WindowModalClose = styled.div`
    grid-area:close;
    display:flex;
    justify-content: center;
    align-items: center;
    color:red;
    &:hover{
        color:#880000;
    }
    
`

const WindowTitleModal = styled.div`
    grid-area : titulo;
    display:flex;
    justify-content: center;
    align-items: center;
`

const Modal = ({state,title,children})=>{
    console.log("estoy aqui")
    console.log(children)
    console.log("estoy aqui")

    return(
    <Container>
        <WindowModal>
            <WindowModalClose>X</WindowModalClose>
            <WindowTitleModal>
                {title}
            </WindowTitleModal>
            {children}
        </WindowModal>
    </Container>)
}
export default Modal;