import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import BannerProduct from './components/BannerProduct';
import Footer from './components/Footer';
import Info from './components/Info';
import NavBar from './components/NavBar';
import Products from './components/Products';

function App() {

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
      <NavBar/>
      <Banner/>
      <AboutUs/>
      <Info/>
      <BannerProduct/>
      <Products products={products}/>
      <Footer/>
      <Outlet/>
    </>
  );
}

export default App;
