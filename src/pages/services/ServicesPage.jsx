import styled from "styled-components"
import ServiceComponent from "./containers/ServiceComponent"
import { services } from "../../utils/services"

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
  return (
    <ServicePageContainer>
      {
        services.map(service => <ServiceComponent key={service.name} {...service} />)
      }
      
    </ServicePageContainer>
  )
}
