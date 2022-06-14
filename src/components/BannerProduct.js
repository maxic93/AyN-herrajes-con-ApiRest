import React from 'react'
import styled from "styled-components"
import bannerProduct from "./img/bannerProduct.jpg"

const Container = styled.div`
     background-image: url(${bannerProduct});
     background-repeat: no-repeat;
     background-size: cover;
     background-position: center;
     background-attachment: fixed;
     width: 100%;
     height: 400px;
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
      background-color: rgba(0,0,0,0.6);
     }
  `
  const Div = styled.div`
     position: absolute;

  `
  const H2 = styled.h1`
     font-size: 5em;
     color: #f5f5f5;
  `

const BannerProduct = () => {
  return (
    <Container>
        <Div>
            <H2>Nuestros Productos</H2>
        </Div>
      
    </Container>
  )
}

export default BannerProduct
