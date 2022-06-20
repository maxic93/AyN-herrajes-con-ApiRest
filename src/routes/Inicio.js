import React from 'react'
import { useEffect, useState } from 'react';
import AboutUs from '../components/AboutUs';
import BannerProduct from '../components/BannerProduct';
import Info from '../components/Info';
import Products from "../components/Products"


const Inicio = () => {

 const [products, setProducts] = useState([]);
 
  
  useEffect(()=> {
    consumeApi() 
  },[]);

  async function consumeApi(){
    const res = await fetch("https://protected-fjord-28497.herokuapp.com/api");
    const data = await res.json();
    setProducts(data);
    console.log(products);
  }

  return (
    <>
      
      <AboutUs/>
      <Info/>
      <BannerProduct/>
      <Products products={products}/>
    </>
  )
}

export default Inicio
