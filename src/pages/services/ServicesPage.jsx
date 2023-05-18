import styled from "styled-components"
import ServiceComponent from "./containers/ServiceComponent"
// import { services } from "../../utils/services"
import { useEffect } from "react"
import { useState } from "react"

const ServicePageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  padding: 30px;
  background-color: azure;
`

export default function ServicesPage() {

  const [services2, setServices2] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/services')
      .then(res=>res.json())
      .then(data=>setServices2(data))
  }, []);

  return (
    <ServicePageContainer>
      {
        services2
        ?
          services2.map(service => <ServiceComponent key={service.id} {...service} />)
        : <h1>Cargando Servicios...</h1>
      }
      
    </ServicePageContainer>
  )
}
