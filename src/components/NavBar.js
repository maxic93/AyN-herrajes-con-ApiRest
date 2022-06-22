import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"


const Nav = styled.nav`
display: flex;
justify-content: flex-end;
width: 100%;
padding: 30px;
position: absolute;
z-index: 100;
margin-right: 20px;
transition: .3s;
.nav_fixed {
  position: fixed;
  background: #222;
  
}
`
const LinkStyle = styled(Link)`
 color: #f5f5f5;
 text-decoration: none;
 font-size: 1.8em;
 padding: 15px;
 margin: 0 10px;
 transition: .3s;
 font-weith: 700;
 &:hover {
   background: #0D1AAD;
   border-radius: 5px;
 }
`
const Cart = styled.div`
i {
  font-size: 1.2em;
}
 span {
  position: absolute;
  margin: 5px;
  font-size: 1.1em;
  padding: 6px;
  border-radius: 50%;
  color: #ffff;
  background: #0D1AAD;
  width: 50px;
  top: 5px;
  right: 10px;
  text-align: center;
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
    return window.removeEventListener("scroll", setShowNavBar(false));
  },[])

  return (
    <Nav className={showNavBar && "nav_fixed"}>
          <LinkStyle  to="/">Inicio</LinkStyle>
          <LinkStyle  to="/contacto">Contacto</LinkStyle> 
          <LinkStyle  to="/carrito">
            <Cart>
              <i className="fa-solid fa-cart-shopping"></i>
            <span>0</span>
            </Cart>
            </LinkStyle> 
    </Nav>
  )
}


export default NavBar
