import React from 'react'
import styled from 'styled-components'
import ElementSearch from './elements'
const BodyContentSearch = ()=>{
    const Container = styled.div`
    display:flex;
   
    grid-area:container
    `
    return(
    <>
        <Container>
            <ElementSearch title="Carta al presidente" description="Una carta de peticion" owner="Ministerio de educaion" date="23/05/2010" path="C//"/>
        </Container>
        
    </>)
}

export default BodyContentSearch;