import React from 'react'
import styled from "styled-components"

const FooterDiv = styled.footer`
width: 100%;
height: 320px;
background: #333;
`
const Div = styled.div`
 width: 100%;
 height: 100%;
 padding: 90px;
 h2 {
  color: #f5f5f5;
  font-size: 2em;
 }
 div {
  margin-top: 10px;
 }
 div i {
  color: #f5f5f5;
  font-size: 2.5em;
  margin: 0 10px;
  transition: .3s;
 }
 div i:hover {
  color: #0D1AAD;
 }
`
const P = styled.p`
padding: 20px;
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 color: #f5f5f5;
 font-size: 1.4em;
`

const Footer = () => {
  return (
    <FooterDiv>
      <Div>
        <h2>Redes Sociales</h2>
        <div>
          <a href='https://www.instagram.com/aynherrajes/' target="_blank"><i className="fab fa-instagram"></i></a>
          <a href='https://m.facebook.com/herrajesayn/' target="_blank"><i className="fab fa-facebook"></i></a>
        </div>
        <P>© 2022 AyN herrajes todos los dereches reservados   Pagina realizada por Maximiliano Cabral programador front-end</P>
      </Div>
    </FooterDiv>
  )
}

export default Footer
