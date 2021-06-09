import React from'react';
import styled from 'styled-components'
import InputDinamic from '../../../../InputDinamic'
const Container = styled.div`
    width:360;
    padding:1.5rem 1rem;
    border-radius:1rem;
`;

const FormUpload = () =>{
    return(
        <Container>
            <InputDinamic name="Nombre"/>
            <InputDinamic name="Descripcion"/>
            

        </Container>
    )

}
export default FormUpload;