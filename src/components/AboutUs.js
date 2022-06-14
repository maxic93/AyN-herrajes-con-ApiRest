import React from 'react'
import styled from "styled-components"
import presentacion from "./img/presentacion.jpg"

const Section = styled.section`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 70px 0;
background: #f5f5f5
`
const Container = styled.div`
width: 70%;
paddin: 20px;
display: flex;
justify-content: center;
background: #fff;
`
const DivImg = styled.div`
width: 100%;
height: 500px;
background-image: url(${presentacion});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
box-shadow: 4px 4px 5px #999
`
const DivInfo = styled.div`
width: 100%;
height: 500px;
padding: 20px;
font-family: 'Open Sans', sans-serif;
font-size: 1.5em;
h2 {
  text-align: center;
}
`

const AboutUs = () => {

   

  return (
    <Section>
      <Container>
        <DivImg></DivImg>
        <DivInfo>
            <h2>¿Quienes Somos?</h2>
            <p>
                Bienvenidos! Les presentamos A&N Herrajes. ¿Que hacemos? Comercializamos herrajes de la mejor calidad y con los mejores precios. Uno de nuestros objetivos es brindar la mejor atención y asesoramiento a cada uno de nuestros clientes.
                Esperamos que nos acompañen en este nuevo camino! 
            </p>
            <p>
                ¿Donde nos encontramos? Estamos en Corrientes Capital y realizamos envios en la Ciudad y al interior de la Prov. Ante cualquier duda contáctanos y no dudes en hacernos tu consulta
            </p>
        </DivInfo>
      </Container>
    </Section>
  )
}

export default AboutUs
