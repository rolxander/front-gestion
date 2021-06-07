import React from 'react'
import styled from 'styled-components'
import InputSearch from '../../../search_widtget'
const HeadContentSearch = ()=>{
    const Container = styled.div`
    grid-area:header;
    display:grid;
    grid-template-columns: 0.5fr 5fr;
    grid-template-areas: "logo input";
    `
const HeadLogo = styled.div`
    
    grid-area:logo;

`
const ContainerInputSearch = styled.div`
    
    grid-area:input;
    width:50%
 
`
    return(
    <Container>
        <HeadLogo>logo</HeadLogo>
        <ContainerInputSearch>
           <InputSearch /> 
        </ContainerInputSearch>
    </Container>
    )
}
export default HeadContentSearch;
