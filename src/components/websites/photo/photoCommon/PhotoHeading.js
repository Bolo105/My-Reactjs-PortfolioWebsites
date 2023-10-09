import React from 'react'
import styled from 'styled-components'

const Serv = styled.div`
  margin: 0px;
  padding-top: 25px;
  text-align: center;
`;
const Text = styled.p`
  font-weight: 700;
  font-size: 16px;
  margin-top: 25px;
  padding-bottom: 35px;
  font-family: 'Poppins', sans-serif;
`;
const Head = styled.h1`
  font-family: arial;
  letter-spacing: 1px;
  &:after {
    content: '';
  display: block;
  background: grey;
  width: 200px;
  margin: 10px auto;
  height: 3px;
  }
`;

export const PhotoHeading = ({ title, parr}) => {
  return (
    
       <Serv className="serv">
          <Head>{title}</Head>
          <Text className = "serv-text">{parr}</Text>
        </Serv>
    
  )
}
