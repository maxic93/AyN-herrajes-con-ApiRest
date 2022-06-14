import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./index.css"
import Catalogo from "./routes/Catalogo"
import Contacto from "./routes/Contacto"
import Carrito from "./routes/Carrito"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='catalogo' element={<Catalogo/>}/>
        <Route path='contacto' element={<Contacto />}/>
        <Route path='carrito' element={<Carrito />}/>
      </Route>
    </Routes>  
  </BrowserRouter>
);


