import React  from 'react'
import styled from "styled-components"


const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;
  background: #f5f5f5;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Info = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  div {
  display: flex;
  }
`

const Carrito = () => {

  
  

  return (
    <Section>
      <Container>
        <h1>Carrito de compras<i className="fa-solid fa-cart-shopping"></i></h1>
        <Info>
          <h3>Productos</h3>
          <div>
           <h3>Precio</h3>
           <h3>Cantidad</h3>
           <h3>Subtotal</h3>
          </div>
        </Info>
      </Container>
    </Section>
  )
}

export default Carrito
