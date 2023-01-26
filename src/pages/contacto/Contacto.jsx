import React from 'react';
import { Container, styled } from '@mui/material';
import ContactoForm from '../../components/forms/contactoForm';
import InstruccionesContactoForm from '../../components/pure/InstruccionesContactoForm';

const CustomContainer = styled(Container)`
  width: 100vw;
  min-height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 32px;
  padding: 32px;
`

const Contacto = () => {
  return (
    <CustomContainer>
      <InstruccionesContactoForm />
      <ContactoForm />
    </CustomContainer>
  );
}

export default Contacto;
