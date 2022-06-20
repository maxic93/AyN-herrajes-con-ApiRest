import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import "./nav.css"

const Nav = styled.nav`
display: flex;
justify-content: flex-end;
width: 100%;
padding: 10px;
position: absolute;
z-index: 100;
`
const LinkStyle = styled(Link)`
 color: #f5f5f5;
 text-decoration: none;
 font-size: 1.4em;
 padding: 15px;
 margin: 0 10px;
 transition: .3s;
 &:hover {
   background: #0D1AAD;
   border-radius: 5px;
 }
`


const NavBar = () => {

  const [showNavBar, setShowNavBar] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 130){
        setShowNavBar(true)
      }else {
        setShowNavBar(false)
      }
    })
  },[])

  return (
    <Nav className={showNavBar && "nav_fixed"}>
          <LinkStyle  to="/">Inicio</LinkStyle>
          <LinkStyle  to="/contacto">Contacto</LinkStyle> 
          <LinkStyle  to="/carrito"><i className="fa-solid fa-cart-shopping"></i>Carrito</LinkStyle> 
    </Nav>
  )
}


export default NavBar
