import React from 'react'
import Product from './Product'
import styled from "styled-components"

const Div = styled.div`
    width: 100%;
    padding: 50px;
    gap: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #f5f5f5;
`

const Products = ({products}) => { 
  return (
    <Div>
        {products.map( item => {
            return <Product name={item.name} img={item.img} price={item.price} cantidad={item.cantidad}key={item._id} />
        })}
    </Div>
  )
}

export default Products
