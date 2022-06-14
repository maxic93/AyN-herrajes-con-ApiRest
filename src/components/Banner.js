import React from 'react'
import styled from "styled-components"
import banner from "./img/banner_AyN.jpg"

const Container = styled.div`
     background-image: url(${banner});
     background-repeat: no-repeat;
     background-size: cover;
     background-position: center;
     width: 100%;
     height: 800px;
     position: relative;
     display: flex;
     align-items: center;
     justify-content: center;
     &:before {
      content:'';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0,0.4);
     }
  `
  const Div = styled.div`
     position: absolute;

  `
  const H1 = styled.h1`
     font-size: 5em;
     color: #f5f5f5;
  `

const Banner = () => {
  
  return (
    <Container>
      <Div>
        <H1>AyN Herrajes</H1>
        
      </Div>
    </Container>
  )
}

export default Banner
