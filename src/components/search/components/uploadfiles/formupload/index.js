import React from'react';
import styled from 'styled-components'
import InputDinamic from '../../../../InputDinamic'
const Container = styled.div`
    width:360;
    padding:1.5rem 1rem;
    border-radius:1rem;
`;
const ContainerButtons = styled.div`
    margin-top:1rem;
    padding: 1rem 0;
    display:flex;
    justify-content: space-between;
`
const Button = styled.button`
    border-radius: 10px;
    width : 7rem;
    height: 2rem;
    
`
const FormUpload = () =>{
    return(
        <Container>
            <InputDinamic name="Nombre"/>
            <InputDinamic name="Ubicacion"/>
            <InputDinamic name="Descripcion"/>
            <input type="file"/>
            <ContainerButtons>
                <Button>Registrar</Button>
                <Button>Cancelar</Button>
            </ContainerButtons> 

        </Container>
    )

}
export default FormUpload;