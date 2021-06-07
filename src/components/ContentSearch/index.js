import React from'react'
import styled from 'styled-components'
import BodyContentSearch from './component/BodyContentSearch'
import HeadContentSearch from './component/HeadContentSearch'
const ContentSearch = () =>{
const Container = styled.div`
height: 100vh;
background-color: skyblue;
display: grid;
grid-template-rows:  1fr 10fr;
grid-template-columns:2fr 1fr;
grid-template-areas: " header header"
                     " container side-2"
                     " footer footer";
grid-gap: 10px;
padding:1.3em;
`
return(
<>
 <Container>
     <HeadContentSearch/>
     <BodyContentSearch/>
</Container>   
</>)
}
export default ContentSearch;