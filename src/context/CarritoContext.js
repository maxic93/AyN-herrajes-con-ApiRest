import { useState, createContext, useEffect } from "react";


export const CarritoContext = createContext()

const CarritoProvider = ({children}) => {

   const [carritoItem, setCarritoItem] = useState(() => {
    try {
        const productsInLocalStorage = localStorage.getItem("carritoProduct")
        console.log(productsInLocalStorage)
        return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : []
    } catch (error) {
        return []
    }
   })
   
   useEffect(()=> {
    localStorage.setItem("carritoProduct", JSON.stringify(carritoItem))
   },[carritoItem])

   

    return (
        <CarritoContext.Provider value={{carritoItem,setCarritoItem}}>
            {children}
        </CarritoContext.Provider>
    )
}

export default CarritoProvider