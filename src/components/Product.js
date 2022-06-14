import React from 'react'
import styled from "styled-components"

const Container = styled.div`
width: 400px;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid #999;
background: #fff;
h2 {
    font-size: 1.8em;
    color: #333;
    text-align: center;
}

`

const Div = styled.div`
width: 300px;
height: 350px;
padding: 20px;
img {
    widht: 100%;
    height: 100%;
    objet-fit: cover;
}
`
const DivInfo = styled.div`
    font-size: 1.7em;
    padding: 10px;
    color: #111;
`
const Button = styled.button`
    padding: 15px;
    width: 200px;
    margin: 10px;
    font-size: 1.2em;
    background: #1EB80F;
    border-style: none;
    border-radius: 5px;
    color #f5f5f5;
    cursor: pointer;
    transition: .3s;
    &:hover {
        background: #17770E;
    }
`
const handleClick = e => {
  alert("diste click")
}

const Product = ({name, img, price, cantidad}) => {
    console.log(img)
  return (
    <Container>
      <h2>{name}</h2>
      <Div>
        <img src={img} alt={name}/>  
      </Div>  
      <DivInfo>
          <p>Precio ${price}</p>
          <p>Cantidad: {cantidad}</p>
      </DivInfo>
      <Button onClick={handleClick}>
          Agregar al carrito
      </Button>
    </Container>
  )
}

export default Product
