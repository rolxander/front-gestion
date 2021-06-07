import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from '../../../modal';
const Container = styled.div`
    padding: 0.7em;
    width:0.em;
    font-family:helvetica;
    background-color:#006600;
    text-align: center; 
    color:#ddddda;  
    width: 50%;
    border-radius:12px;
    &:hover{
        background-color:#005500;
    }
    
`
const UploadFIles = () =>{
    const [modalState,setModalState] = useState(false);
    return(
        <>
            {modalState&&(<Modal title = "Subir Archivo">
                <div>
                    <input/>
                </div>
            </Modal>)}
            <Container onClick={()=>{
                setModalState(!modalState)
            }}>
                
                <label>Subir Archivo</label>
            </Container>
        </>
    )
}
export default UploadFIles;