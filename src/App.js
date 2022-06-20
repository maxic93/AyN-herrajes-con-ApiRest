import {Route, Routes} from "react-router-dom"
import './App.css';
import Inicio from "./routes/Inicio"
import Contacto from "./routes/Contacto"
import Carrito from "./routes/Carrito"
import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import CarritoProduct from "./context/CarritoProduct";


function App() {


  return (
    <>
    <CarritoProduct>
    <NavBar/>
    <Banner/>
    <Routes>
    <Route path='/' element={<Inicio/>}/>
    <Route path='/contacto' element={<Contacto/>}/>
    <Route path='/carrito' element={<Carrito/>}/>
    </Routes>
    <Footer/>
    </CarritoProduct>
    </>
  );
}

export default App;
