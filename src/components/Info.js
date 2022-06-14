import React from 'react'
import styled from "styled-components"

const Section = styled.section`
width: 100%;
display: flex;
background: #f5f5f5

`
const Container = styled.div`
width: 80%;
margin: auto;
display: flex;
justify-content: space-between;
padding: 0 20px;
`
const InfoDiv = styled.div`
width: 100%;
max-width: 380px;
border-radius: 50%;
padding: 40px;
h3 {
    font-size: 1.8em;
    color: #333;
    margin-top: 20px;
}
i {
    font-size: 4em;
    color: #0D1AAD;
    padding: 70px;
    border-radius: 50%;
    background: #fff;
}
p {
    font-size: 1.4em;
    color: #333;
    margin-top: 10px;
}
`

const Info = () => {

  return (
    <Section>
      <Container>
        <InfoDiv>
            <i className="fa-solid fa-credit-card"></i>
            <h3>Metodos de pagos</h3>
            <p>Utilizá alguna de las siguientes formas de pago disponibles. Efectivo/Transf Bc/Mercado Pago</p>
        </InfoDiv>
        <InfoDiv>
            <i className="fa-brands fa-rocketchat"></i>
            <h3>Consulta directa</h3>
            <p>solicitá un presupuesto para tu proyecto, sin intermediarios y de forma rápida y segura.</p>
        </InfoDiv>
        <InfoDiv>
            <i className="fa-solid fa-globe"></i>
            <h3>Envios a toda la ciudad</h3>
            <p>Realizamos envios en la ciudad de Corrientes y al interior.</p>
        </InfoDiv>
      </Container>
    </Section>
  )
}

export default Info
