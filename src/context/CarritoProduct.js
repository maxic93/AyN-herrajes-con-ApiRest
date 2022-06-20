import React, { createContext, useState } from 'react'

export const ProductContext = createContext()

const CarritoProduct = ({children}) => {

    const [carrito, setCarrito] = useState([{
        name: "",
        price: "",
        img: "",
        cantidad: 1,
      }])

  return (
    <ProductContext.Provider value={{carrito, setCarrito}}>
      {children}
    </ProductContext.Provider>
  )
}

export default CarritoProduct
