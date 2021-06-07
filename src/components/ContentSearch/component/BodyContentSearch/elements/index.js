import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
`
const TitleDocument = styled.div`
`
const DescriptionDocument = styled.div``
const OwnerDocument = styled.div``
const PathDocument = styled.div``
const DatePublicDocument = styled.div``

function ElementSearch({title,description,path,owner,date}){
    return (
       <Container>
            <TitleDocument>{title}</TitleDocument>
            <DescriptionDocument>{description}</DescriptionDocument>
            <OwnerDocument>{owner}</OwnerDocument>
            <PathDocument>{path}</PathDocument>
            <DatePublicDocument>{date}</DatePublicDocument>
       </Container>
  )
}
export default ElementSearch;