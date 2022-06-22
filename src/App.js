import {Route, Routes} from "react-router-dom"
import './App.css';
import Inicio from "./routes/Inicio"
import Contacto from "./routes/Contacto"
import Carrito from "./routes/Carrito"
import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import CarritoProvider from "./context/CarritoContext"



function App() {


  return (
    <>
    <CarritoProvider>
      <NavBar/>
      <Banner/>
      <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/carrito' element={<Carrito/>}/>
      </Routes>
      <Footer/>
    </CarritoProvider>
    </>
  );
}

export default App;
