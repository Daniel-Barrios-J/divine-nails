import React from 'react';
import styled from 'styled-components';
import ContactoForm from '../../components/forms/contactoForm';
import InstruccionesContactoForm from '../../components/pure/InstruccionesContactoForm';

const ContactoContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Contacto = () => {
  return (
    <ContactoContainer>
      <InstruccionesContactoForm />
      <ContactoForm />
    </ContactoContainer>
  );
}

export default Contacto;
