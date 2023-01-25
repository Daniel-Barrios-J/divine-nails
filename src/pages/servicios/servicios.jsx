import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../../components/pure/ServiceCard';
import {services} from '../../AppData/Services'

const ServicesContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  padding: 20px;
`


const Servicios = () => {
  return (
    <ServicesContainer>
      {
        services.map((service, index) => <ServiceCard key={index} size={'large'} service={service}/>)
      }
    </ServicesContainer>
  );
}

export default Servicios;
