import React from 'react'
import styled from "styled-components"

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;
  background: #f5f5f5;
`
const Form = styled.form`
  margin: auto
  padding: 16px;
  width: 80%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 3.5em;
    color: #333;
    text-align: center;
    margin: 20px 0;
  }
  textarea {
    height: 300px;
    font-size: 2em;
    padding: 16px;
    width: 1200px;
  }
  button {
    padding: 16px;
    font-size: 1.4em;
    border-style: none;
    background: #0D1AAD;
    border-radius: 5px;
    transition: .3s;
    width: 250px;
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
  }
  button:hover {
    background: #0E2377;
  }
`
const DivForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  input {
    width: 500px;
    padding: 20px;
    margin: 16px;
    font-size: 1.5em;
  }
  
`

const Contacto = () => {
  return (
    <Section>
      <Form>
        <h2>Contactanos</h2>
        <DivForm>
          <input 
            type="text"
            placeholder='Nombre'
            name='name'
          />
           <input 
            type="text"
            placeholder='Email'
            name='email'
          />
          
        </DivForm>
        <textarea
          placeholder='Escribanos su consulta'
          />
          <button 
            type='submit'
          >
            Enviar
          </button>
      </Form>
    </Section>
  )
}

export default Contacto
