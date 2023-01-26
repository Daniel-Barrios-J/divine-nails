import React from 'react';
import { styled, Container } from '@mui/material';
import ServiceCard from '../../components/pure/ServiceCard';
import { promociones } from '../../AppData/Promociones';

const CustomContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 32px;
  padding: 32px;
`

const Promociones = () => {
  return (
    <CustomContainer>
      {
        promociones.map((service, index)=><ServiceCard key={index} service={service} size={'large'}/>)
      }
    </CustomContainer>
  );
}

export default Promociones;