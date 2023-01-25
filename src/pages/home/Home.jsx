import React from 'react';
import styled from 'styled-components';
import HomeAboutUs from '../../components/pure/HomeAboutUs';
import SliderHome from '../../components/pure/SliderHome';
import ServiceCard from '../../components/pure/ServiceCard';

import { services } from '../../AppData/Services';

const HomeContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  padding: 20px;
`
const ServicesContainer = styled.div`
  width: 100%;
  gap: 24px 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Home = () => {
  return (
    <HomeContainer className='home'>
      <HomeAboutUs />
      <SliderHome />
      <ServicesContainer>
        {
          services.map((service, index) => <ServiceCard key={index} service={service}/>)
        }
      </ServicesContainer>
    </HomeContainer>
  );
}

export default Home;
